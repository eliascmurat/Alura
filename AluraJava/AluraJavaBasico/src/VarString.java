public class VarString {

	public static void main(String[] args) {
		//char - guarda um único caracter entre aspas simples
		//char na realidade é um "numero", mas converte quando for "printado"
		char letra = 'a';
		System.out.println(letra);
		
		char valor = 66;
		System.out.println(valor);
				
		valor = (char) (valor + 1);
		System.out.println(valor);
				
		//String
		String frase = "A minha idade é: ";
		System.out.println(frase);
		System.out.println(frase + 18);
	}
	
}
