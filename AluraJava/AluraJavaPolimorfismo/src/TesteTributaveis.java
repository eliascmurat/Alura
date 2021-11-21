public class TesteTributaveis {
	public static void main(String[] args) {
		ContaCorrente cc = new ContaCorrente(111, 222);
		cc.deposita(100.0);
		
		SeguroDeVida sdv = new SeguroDeVida();
		
		CalculadorDeImposto cdi = new CalculadorDeImposto();
		cdi.registra(cc);
		cdi.registra(sdv);
		
		System.out.println(cdi.getTotalImposto());
	}
}
