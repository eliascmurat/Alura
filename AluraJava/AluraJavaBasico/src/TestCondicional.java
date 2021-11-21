public class TestCondicional {

	public static void main(String[] args) {
		
		System.out.println("Testando condicionais");
		int idade = 16;
		int qtdPessoas = 2;
		
		if (idade >= 18) {
			System.out.println("Você é maior de idade.");
		} else {
			if (qtdPessoas >= 1) {
				System.out.println("Você é de menor de idade, mas pode entrar.");
			} else {
				System.out.println("Você é menor de idade.");				
			}
		}
		
	}
}
