public class TestVarEscopo {
	public static void main(String[] args) {
		System.out.println("Testando condicionais - (Escopo) 3#");
		int idade = 16;
		int qtdPessoas = 2;

		// boolean acompanhado = qtdPessoas >= 1;

		boolean acompanhado;
		if (qtdPessoas >= 1) {
			acompanhado = true;
		} else {
			acompanhado = false;
		}

		if (idade >= 18 || acompanhado) {
			System.out.println("Seja bem-vindo!");
		} else {
			System.out.println("Não pode entrar!");
		}
	}
}
