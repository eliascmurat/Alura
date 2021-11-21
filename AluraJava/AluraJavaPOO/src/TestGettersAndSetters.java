public class TestGettersAndSetters {
	public static void main(String[] args) {
		Conta conta = new Conta(1000, 1000);
		System.out.println(conta.getNumero());
		System.out.println(conta.getAgencia());
		
		Cliente cliente = new Cliente();
		cliente.setNome("Elias Murat");
		
		conta.setTitular(cliente);
		
		System.out.println(conta.getTitular().getNome());
		
		conta.getTitular().setProfissao("Programador");
	}
}