package br.com.alura.java.io.teste;

import java.io.File;
import java.util.Locale;
import java.util.Scanner;

public class TesteLeitura2 {

	public static void main(String[] args) throws Exception {
		Scanner scanner = new Scanner(new File("contas.csv"), "UTF-8");
		while (scanner.hasNextLine()) {
			String linha = scanner.nextLine();
			//System.out.println(linha);

			Scanner scannerLinha = new Scanner(linha);
			scannerLinha.useLocale(Locale.US); //Evita erro de localidade ou de pontos
			scannerLinha.useDelimiter(",");
			
			String tipoConta = scannerLinha.next();
			int agencia = scannerLinha.nextInt();
			int numeroConta = scannerLinha.nextInt();
			String titular = scannerLinha.next();
			double saldo = scannerLinha.nextDouble();
						
			// Locale para mudar "." -> ","
			// %s -> String
			// %d -> decimal
			// %f -> float
			// %n -> quebra de linha
			
			System.out.format(
					new Locale("pt", "BR"),
					"%s - %04d-%08d, %20s: %08.2f %n",
					tipoConta, agencia, numeroConta, titular, saldo
			);
			
			scannerLinha.close();
			
			//String[] valores = linha.split(",");
			//System.out.println(Arrays.toString(valores));
			//System.out.println(valores[3]);
		}
		scanner.close();
	}

}
