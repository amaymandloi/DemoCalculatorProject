package com.yash.calculator.services;


import java.math.BigInteger;

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
	public Calculator mod(double x, double y) {
		
		return new Calculator(x, y,x%y);
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
	@Override
	public Calculator sinValue(double x) {
		
		return new Calculator(x,x,Math.sin(Math.toRadians(x)));
	}
	@Override
	public Calculator cosValue(double x) {
		
		return new Calculator(x,x,Math.cos(x));
	}
	@Override
	public Calculator tanValue(double x) {
		
		return new Calculator(x,x,Math.tan(x));
	}
	@Override
	public Calculator cosecValue(double x) {

		return new Calculator(x,x,1/Math.sin(Math.toRadians(x)));
	}
	@Override
	public Calculator cotValue(double x) {
		
		return new Calculator(x,x,1/Math.tan(Math.toRadians(x)));
	}
	@Override
	public Calculator secValue(double x) {
		
		return new Calculator(x,x,1/Math.cos(Math.toRadians(x)));
	}
	@Override
	public Calculator logValue(double x) {
		
		return new Calculator(x,x,Math.log10(x));
	}
	@Override
	public Calculator piValue() {
		
		return new Calculator(0,0,Math.PI);
	}
	@Override
	public Calculator tenPower(double x) {
		
		return new Calculator(0,0,Math.pow(10, x));
	}
	@Override
	public Calculator cube(double x) {
		
		return new Calculator(x,x,x*x*x);
	}

}
