import java.util.Scanner;

public class TestLacos {
	public static void main(String[] args) {
		/*
		Scanner scn = new Scanner(System.in);
		System.out.print("Digite o número da tabuada: ");
		int num = scn.nextInt();
		
		for (int contador = 0; contador <= 10; contador++) {
			int resultado = num * contador;
			System.out.println(num + " x " + contador + " = " + resultado);
		}
		*/
		
		for(int multiplicador = 1; multiplicador <= 10; multiplicador++) {
			System.out.print("Tabuada do " + multiplicador + ": ");
			for(int contador = 0; contador <= 10; contador++) {
                System.out.print(multiplicador * contador);
                System.out.print(" ");
            }
            System.out.println("");
        }
	}
}
