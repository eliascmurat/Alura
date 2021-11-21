package br.com.bytebank.banco.teste.util;

import java.util.ArrayList;

import br.com.bytebank.banco.modelo.Conta;
import br.com.bytebank.banco.modelo.ContaCorrente;
import br.com.bytebank.banco.modelo.ContaPoupanca;

public class TesteArrayListEquals {

	public static void main(String[] args) {
		//Generics
		ArrayList<Conta> lista = new ArrayList<Conta>();
		
		Conta conta1 = new ContaCorrente(11, 22);
		lista.add(conta1);
		
		Conta conta2 = new ContaPoupanca(11, 23);
		lista.add(conta2);
		
		String e = lista.contains(conta2) ? "sim" : "nao";
		System.out.println(e);		
		
		
		for (Object obj : lista) {
			System.out.println(obj);
		}
	}

}
