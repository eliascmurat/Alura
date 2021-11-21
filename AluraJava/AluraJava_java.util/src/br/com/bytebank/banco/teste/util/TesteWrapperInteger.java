package br.com.bytebank.banco.teste.util;

import java.util.ArrayList;
import java.util.List;

public class TesteWrapperInteger {
	public static void main(String[] args) {
		int[] idades = new int[5];
		String[] nomes = new String[5];
		
		int idade = 17;
		Integer idadeRef = new Integer(17);
		List<Integer> numeros = new ArrayList<Integer>();
		numeros.add(idade);
	
		/*
		 * 
		 * Tipo primitivo -> Autoboxing -> Wrapper
		 * Tipo primitivo <- Unboxing <- Wrapper
		 * 
		 * int -> Integer
		 * int <- Integer
		 * 
		 * */
		
		String numString =  "10";
		//Integer numero = Integer.valueOf(numString);
		int numero = Integer.parseInt(numString);

		System.out.println(numero);
		
		
	}
}
