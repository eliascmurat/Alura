package br.com.bytebank.banco.teste.util;

public class TesteOutrosWrapper {
	public static void main(String[] args) {
		Integer referenciaInt = Integer.valueOf(17); //Autoboxing
		System.out.println(referenciaInt.intValue()); //Unboxing
		
		Double referenciaDouble = Double.valueOf(3.14); 
		System.out.println(referenciaDouble.doubleValue());
		
		Boolean referenciaBoolean = Boolean.FALSE;
		System.out.println(referenciaBoolean.booleanValue());		

	}
}