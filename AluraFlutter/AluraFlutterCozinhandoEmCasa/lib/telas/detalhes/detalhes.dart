import 'package:flutter/material.dart';
import '../../modelos/receita.dart';

class Detalhes extends StatelessWidget {
  final Receita receita;

  Detalhes({Key key, @required this.receita}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return _construirDetalhes();
  }

  Widget _construirDetalhes() {
    return Scaffold(
      body: ListView(
        children: [
          _construirImgDetalhes(receita.foto),
          _construirTituloDetalhes(receita.titulo),
          _construirLinhaDetalhes(
              '${receita.porcoes} porções', receita.tempoPreparo),
          _construirSubtituloDetalhes('Ingredientes'),
          _construirTextDetalhes(receita.ingredientes),
          _construirSubtituloDetalhes('Modo de Preparo'),
          _construirTextDetalhes(receita.modoPreparo)
        ],
      ),
      appBar: _construirAppBar(),
    );
  }

  Widget _construirImgDetalhes(image) {
    return Image.asset(image);
  }

  Widget _construirTituloDetalhes(titulo) {
    return Center(
        child: Text(titulo,
            style: TextStyle(color: Colors.deepOrange, fontSize: 30)));
  }

  Widget _construirLinhaDetalhes(redimento, tempoPreparo) {
    return Row(
      children: [
        _construirColunaIconeDetalhes(Icons.restaurant, redimento),
        _construirColunaIconeDetalhes(Icons.timer, tempoPreparo)
      ],
    );
  }

  Widget _construirColunaIconeDetalhes(icone, texto) {
    return Expanded(
      child: Column(
        children: [
          Icon(
            icone,
            color: Colors.deepOrange,
          ),
          Text(
            texto,
            style: TextStyle(
                color: Colors.deepOrange, fontWeight: FontWeight.bold),
          )
        ],
      ),
    );
  }

  Widget _construirSubtituloDetalhes(subtitulo) {
    return Center(
      child: Text(subtitulo, style: TextStyle(fontSize: 20)),
    );
  }

  Widget _construirTextDetalhes(texto) {
    return Container(
      padding: EdgeInsets.all(16),
      child: Text(texto),
    );
  }

  Widget _construirAppBar() {
    return AppBar(centerTitle: true, title: Text('Cozinhando em casa'));
  }
}
