package com.yash.calculator.services;

import com.yash.calculator.model.Calculator;

public interface CalculatorService {

	Calculator addition(double x, double y);
	           
	Calculator subtractionion(double x, double y);
	
	Calculator multification(double x, double y);
	
	Calculator division(double x, double y);
	
	Calculator percentage(double x, double y);
	
	Calculator square(double x);
	
	Calculator squareRoot(double x);
	
	Calculator numberByone(double x);
}
