package br.com.alura.java.io.teste;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class TesteEscritaFileWriter {

	public static void main(String[] args) throws IOException {
		BufferedWriter bw = new BufferedWriter(new FileWriter("lorem2.txt"));
		bw.write("Hello world, estou aprendendo sobre o java.io");
		bw.newLine();
		bw.newLine();
		bw.newLine();
		bw.write("Elias de Camargo Murat");
		bw.close();
	}
	
}
