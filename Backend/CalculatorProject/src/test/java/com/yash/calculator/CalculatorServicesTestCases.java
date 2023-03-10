package com.yash.calculator;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;


import org.junit.jupiter.api.Test;

import com.yash.calculator.model.Calculator;
import com.yash.calculator.services.CalculatorSeviceIMPL;


public class CalculatorServicesTestCases {
	@Test
	  public void positiveAdditionTest() {
			CalculatorSeviceIMPL  calculatorService = new CalculatorSeviceIMPL();
		    Calculator result = calculatorService.addition(4, 4);
		    assertEquals(4, result.getFirstnumber());
		    assertEquals(4, result.getSecondnumber());
		    assertEquals(8, result.getTotal());
	}
	  
		@Test
		  public void negativeAddTest() {
			CalculatorSeviceIMPL calculatorService = new CalculatorSeviceIMPL();
		    Calculator result = calculatorService.addition(4, 4);
		    assertNotEquals(9, result.getTotal());
		  }

		@Test
		  public void positivesubtractionTest() {
			CalculatorSeviceIMPL calculatorService = new CalculatorSeviceIMPL();
			 
		    Calculator result = calculatorService.subtractionion(10, 7);

		    assertEquals(10, result.getFirstnumber());
		    assertEquals(7, result.getSecondnumber());
		    assertEquals(3, result.getTotal());
		  }
		
		@Test
		  public void negativesubtractionTest() {
			CalculatorSeviceIMPL calculatorService = new CalculatorSeviceIMPL();
		    Calculator result = calculatorService.subtractionion(10, 8);

		    assertNotEquals(5, result.getTotal());
		  }
		
		@Test
		  public void positivemultificationTest() {
			CalculatorSeviceIMPL calculatorService = new CalculatorSeviceIMPL();
		    Calculator result = calculatorService.multification(10, 5);

		    assertEquals(10, result.getFirstnumber());
		    assertEquals(5, result.getSecondnumber());
		    assertEquals(50, result.getTotal());
		  }
		
		@Test
		  public void negativemultificationTest() {
			CalculatorSeviceIMPL calculatorService = new CalculatorSeviceIMPL();
		    Calculator result = calculatorService.multification(2,10);

		    assertNotEquals(21, result.getTotal());
		  }
		
		
		@Test
		  public void positiveDivideTest() {
			CalculatorSeviceIMPL calculatorService = new CalculatorSeviceIMPL();
		    Calculator result = calculatorService.division(100,4);

		    assertEquals(100, result.getFirstnumber());
		    assertEquals(4, result.getSecondnumber());
		    assertEquals(25, result.getTotal());
		  }
		
		@Test
		  public void negativeDivideTest() {
			CalculatorSeviceIMPL calculatorService = new CalculatorSeviceIMPL();
		    Calculator result = calculatorService.division(80, 20);

		    assertNotEquals(5, result.getTotal());
		  }
			  
	  
}
