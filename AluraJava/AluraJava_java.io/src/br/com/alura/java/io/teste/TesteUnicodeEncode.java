package br.com.alura.java.io.teste;

import java.io.UnsupportedEncodingException;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;

public class TesteUnicodeEncode {

	public static void main(String[] args) throws UnsupportedEncodingException {
		String c = "C";
		//mostra valor unicode
		System.out.println(c.codePointAt(0));
		
		Charset charset = Charset.defaultCharset();
		System.out.println(charset.displayName());
		
		byte[] bytes = c.getBytes("windows-1252");
		System.out.println(bytes.length + ", windows-1252");
		String cString = new String(c);
		System.out.println(cString);
		
		bytes = c.getBytes("UTF-16");
		System.out.println(bytes.length + ", UTF-16");
		
		bytes = c.getBytes(StandardCharsets.US_ASCII);
		System.out.println(bytes.length + ", US_ASCII");
	}
	
}
