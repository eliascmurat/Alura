package br.com.alura;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class TestalistaDeAula {

	public static void main(String[] args) {
		Aula a1 = new Aula("Revisando ArrayList", 21);
		Aula a2 = new Aula("Listas de objetos", 19);
		Aula a3 = new Aula("Relacionamento de listas e objetos", 22);
		
		ArrayList<Aula> aulas = new ArrayList<Aula>();
		aulas.add(a1);
		aulas.add(a2);
		aulas.add(a3);
		
		Collections.sort(aulas);
		
		aulas.forEach(aula -> {
			System.out.println(aula);
		});
		
		System.out.println("--------------------------------------------");
		
		aulas.sort(Comparator.comparing(Aula::getTempo));
		
		aulas.forEach(aula -> {
			System.out.println(aula);
		});
		
	}

}
