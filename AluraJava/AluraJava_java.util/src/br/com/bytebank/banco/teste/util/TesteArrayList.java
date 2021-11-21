package br.com.bytebank.banco.teste.util;

import java.util.ArrayList;
import java.util.List;
import java.util.Vector;

import br.com.bytebank.banco.modelo.Conta;
import br.com.bytebank.banco.modelo.ContaCorrente;
import br.com.bytebank.banco.modelo.ContaPoupanca;

public class TesteArrayList {

	public static void main(String[] args) {
		//Generics
		List<Conta> lista = new ArrayList<Conta>(); //thread safe
		/*
		 * ArrayList
		 * LinkedList
		 * Vector
		 * */
		
		Conta conta1 = new ContaCorrente(11, 22);
		lista.add(conta1);
		
		Conta conta2 = new ContaPoupanca(33, 44);
		lista.add(conta2);
		
		Conta conta3 = new ContaPoupanca(55, 66);
		lista.add(conta3);
		
		Conta conta4 = new ContaCorrente(11, 77);
		lista.add(conta4);
		
		//System.out.println(lista.size());
		//lista.remove(0);
		
		for (int i = 0; i < lista.size(); i++) {
			Object ref = lista.get(i).getNumero();
			System.out.println(ref);
		}
		
		System.out.println("----------------");
		
		for (Object obj : lista) {
			System.out.println(obj);
		}
	}

}
