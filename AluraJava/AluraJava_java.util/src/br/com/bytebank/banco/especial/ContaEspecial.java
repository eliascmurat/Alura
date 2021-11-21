package br.com.bytebank.banco.especial;

import br.com.bytebank.banco.modelo.*;

public class ContaEspecial extends Conta{

	public ContaEspecial(int agencia, int numero) {
		super(agencia, numero);
	}

	@Override
	public void deposita(double valor) {
		super.saldo += valor;
	}

	/*
	 * private (visível apenas na classe);
	 * <<package private>> (visível na classe E em qualquer outro membro do mesmo pacote, podendo ser chamado de default)
	 * protected (visível na classe E em qualquer outro membro do mesmo pacote E para qualquer filho)
	 * public (visível em qualquer pacote)
	 * */
	
}
