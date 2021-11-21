package br.com.alura;

import java.util.ArrayList;
import java.util.Collections;

public class TestesListas {

	public static void main(String[] args) {
		String aula1 = "Conhecendo mais de listas";
		String aula2 = "Modelando a classe Aula";
		String aula3 = "Trabalhando com Cursos e Sets";
		
		ArrayList<String> aulas = new ArrayList<String>();
		aulas.add(aula1);
		aulas.add(aula2);
		aulas.add(aula3);
		
		System.out.println(aulas);
		
		aulas.remove(0);
		
		System.out.println(aulas);
		
		aulas.add("Aumentando nosso conhecimento");
		
		System.out.println(aulas);
		
		System.out.println("-----------------");
		
		for (String aula : aulas) {
			System.out.println("Aula: " + aula);
		}
		
		System.out.println("-----------------");
		
		for (int i = 0; i < aulas.size(); i++) {
			System.out.println("Aula:" + aulas.get(i));
		}
		
		System.out.println("-----------------");
		
		aulas.forEach(aula -> {
			System.out.println("Aula: " + aula);
		});
		
		System.out.println("-----------------");
		
		Collections.sort(aulas);
		System.out.println(aulas);
		
	}

}
