public class TestCondicional2 {
	public static void main(String[] args) {
		System.out.println("Testando condicionais 2#");
		int idade = 16;
		int qtdPessoas = 2;
		boolean acompanhado = qtdPessoas >= 1;

		if (idade >= 18 || acompanhado) {
			System.out.println("Seja bem-vindo!");
		} else {
			System.out.println("Não pode entrar!");
		}

		/*
		 * || == OU 
		 * && == E
		 */
	}
}
