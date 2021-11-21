public class TesteConexao {
	public static void main(String[] args) {
		
		try (Conexao conexao = new Conexao()) {
			conexao.leDados();
		} catch (Exception ex) {
			System.out.println("Erro na conexao");
		} 
		
		/*
		Conexao c = null;
		try {
			c = new Conexao();
			c.leDados();
		} catch (Exception ex) {
			System.out.println("Erro na conexao");
		} finally {
			if (c != null) {
				c.fecha();				
			}
		}
		*/
	}
}