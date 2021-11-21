package br.com.bytebank.banco.teste;

import br.com.bytebank.banco.modelo.Conta;
import br.com.bytebank.banco.modelo.ContaCorrente;
import br.com.bytebank.banco.modelo.ContaPoupanca;

public class TesteArrayReferencia {
	public static void main(String[] args) {
		Conta[] contas = new Conta[5];
		ContaCorrente cc = new ContaCorrente(11, 22);
		ContaPoupanca cp = new ContaPoupanca(33, 44);
		
		contas[0] = cc;
		contas[1] = cp;
		
		System.out.println(contas[0].getNumero());
		System.out.println(contas[1].getNumero());
	}
}
