public class VarConversao {

	public static void main(String[] args) {
		//Casting - double to int;
		double salario = 1250.50;
		int intSalrio = (int) salario;
		
		//Mostra só a parte inteira 
		System.out.println(intSalrio);
	
		//float
		float pontoFlutuante = 3.14f;
		System.out.println(pontoFlutuante);
		
		/*
		 * byte - max: 8bits
		 * short - max: 16bits
		 * int - max: 32bits
		 * long - max: 64bits
		 */
		
		double valor1 = 0.1;
		double valor2 = 0.2;
		double total = valor1 + valor2;
		System.out.println(total);
		
	}
	
}