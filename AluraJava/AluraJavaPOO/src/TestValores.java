public class TestValores {
	public static void main(String[] args) {
		Conta conta = new Conta(1000,1555);
		Conta conta1 = new Conta(1000,1552);
		Conta conta2 = new Conta(1000,1575);
		
		System.out.println(conta.getAgencia());
		System.out.println(conta.getNumero());
		
		System.out.println("----------------------");
		
		System.out.println(Conta.getTotal());
	}
}