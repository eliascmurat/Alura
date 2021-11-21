public class Fluxo {
	public static void main(String[] args) {
		System.out.println("Ini do main");
		try {
			metodo1();
		} catch (Exception ex) {
			System.out.println(ex.getMessage());
			ex.printStackTrace();
		}
		System.out.println("Fim do main");
	}

	private static void metodo1() throws MyException {
		System.out.println("Ini do metodo1");
		metodo2();
		System.out.println("Fim do metodo1");
	}

	private static void metodo2() throws MyException {
		System.out.println("Ini do metodo2");
		throw new MyException("minha exception, deu ruim!");

		//System.out.println("Fim do metodo2");
		//int a = 1 / 0;
		
		
		
		/*
		 * usa throws no metodo || usa try catch
		 * */
	}
}