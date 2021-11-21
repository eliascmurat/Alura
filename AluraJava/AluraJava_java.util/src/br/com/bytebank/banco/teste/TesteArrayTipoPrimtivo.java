package br.com.bytebank.banco.teste;

public class TesteArrayTipoPrimtivo {

	public static void main(String[] args) {
		int[] idades = new int[5];
		idades[0] = 17;

		for (int i = 0; i < idades.length; i++) {
			idades[i] = i;
		}

		for (int i = 0; i < idades.length; i++) {
			System.out.println(idades[i]);
		}

		System.out.println(idades.length);

	}

}
