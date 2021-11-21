public class VarDouble {

	public static void main(String[] args) {
		double salario = 1000.50;
		System.out.println("Meu salário é: " + salario); 
		//Meu salário é: 1000.5
		
		/*
		 *  O double(ponto flutuante) consegue receber um vaor inteiro,
		 *	mas um inteiro(int) não consegue receber um double.
		 */
		
		double divisao = 3.14 / 2;
		System.out.println(divisao);
		
		int outraDivisao = 5 / 2;
		System.out.println(outraDivisao);
		
		//Se os dois valores à ser dividido não ter ponto, então o resultado é arredondado.
		double novaTentativa = 5 / 2;
		System.out.println(novaTentativa);
		
		//Se um dos dois valores à ser dividido ter ponto, então o resultado é com vírgula.
		double novaTentativa2 = 5.0 / 2;
		System.out.println(novaTentativa2);		
	}
	
}
