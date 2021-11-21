import 'dart:convert';
import 'package:bytebank/http/webclient.dart';
import 'package:bytebank/models/transactions.dart';
import 'package:http/http.dart';

class TransactionWebClient {
  Future<List<Transaction>> findAll() async {
    final Response response = await client.get(baseUrl);
    final List<dynamic> decodedJson = jsonDecode(response.body);
    return decodedJson
        .map((dynamic json) => Transaction.fromJson(json))
        .toList();
  }

  Future<Transaction> save(Transaction transaction, String password) async {
    final String transactionJson = jsonEncode(transaction.toJson());

    await Future.delayed(Duration(seconds: 2));

    final Response response = await client.post(
      baseUrl,
      headers: {
        'Content-type': 'application/json',
        'password': password,
      },
      body: transactionJson,
    );

    if (response.statusCode == 200) {
      return Transaction.fromJson(jsonDecode(response.body));
    }
    throw HttpException(_getMessage(response.statusCode));
  }

  String _getMessage(int statusCode) {
    if (_statusCodadeResponses.containsKey(statusCode)) {
      return _statusCodadeResponses[statusCode];
    }
    return 'Unknow error.';
  }

  static final Map<int, String> _statusCodadeResponses = {
    400: 'There was an error submiting transaction.',
    401: 'Authentication failed.',
    409: 'Transaction already exists.'
  };
}

class HttpException implements Exception {
  final String message;

  HttpException(this.message);
}
