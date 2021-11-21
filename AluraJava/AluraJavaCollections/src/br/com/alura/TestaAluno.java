package br.com.alura;

import java.util.Collection;
import java.util.HashSet;

public class TestaAluno {

	public static void main(String[] args) {
		Collection<String> alunos = new HashSet<>();
		alunos.add("Rodrigo Turini");
		alunos.add("Alberto Souza");
		alunos.add("Nico Steppat");
		alunos.add("Sergio Lopes");
		alunos.add("Renan Saggio");
		alunos.add("Mauricio Aniche");
		
		for (String aluno: alunos) {
			System.out.println(aluno);
		}
		
		System.out.println(alunos.contains("Elias Murat"));
		
	}

}
