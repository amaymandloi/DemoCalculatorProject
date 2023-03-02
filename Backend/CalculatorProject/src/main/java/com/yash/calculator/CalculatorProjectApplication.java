package com.yash.calculator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class CalculatorProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(CalculatorProjectApplication.class, args);
		System.out.println("project start port number 8080");
	}

}
