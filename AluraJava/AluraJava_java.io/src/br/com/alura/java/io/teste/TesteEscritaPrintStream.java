package br.com.alura.java.io.teste;

import java.io.File;
import java.io.IOException;
import java.io.PrintStream;

public class TesteEscritaPrintStream {

	public static void main(String[] args) throws IOException {
		//BufferedWriter bw = new BufferedWriter(new FileWriter("lorem2.txt"));
		
		PrintStream ps = new PrintStream(new File("lorem2.txt"));
		
		ps.println("Hello world, estou aprendendo sobre o java.io");
		
		ps.close();
	}
	
}
