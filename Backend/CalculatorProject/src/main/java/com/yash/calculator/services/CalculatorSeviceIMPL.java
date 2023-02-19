package com.yash.calculator.services;

import org.springframework.stereotype.Service;

import com.yash.calculator.model.Calculator;
@Service
public class CalculatorSeviceIMPL implements CalculatorService {

	@Override
	public Calculator addition(double x, double y) {
		
		return new Calculator(x,y,x+y);
	}
	@Override
	public Calculator subtractionion(double x, double y) {
		
		return new Calculator(x,y,x-y);
	}
	
	@Override
	public Calculator multification(double x, double y) {
		
		return new Calculator(x, y, x*y);
	}

	@Override
	public Calculator division(double x, double y) {
		
		return new Calculator(x, y, x/y);
	}

	@Override
	public Calculator percentage(double x, double y) {
		
		return new Calculator(x, y, y-((y/100)*x));
	}

	@Override
	public Calculator square(double x) {
		
		return new Calculator(x, x, x*x);
	}

	@Override
	public Calculator squareRoot(double x) {
		
		return new Calculator(x,x,Math.sqrt(x));
	}

	@Override
	public Calculator numberByone(double x) {
	
		return new Calculator(x,x,1/x);
	}


	

}
