package com.yash.calculator.model;

public class Calculator {
 double firstnumber;
 double secondnumber;
 double total;
public Calculator(double firstnumber, double secondnumber, double total) {
	super();
	this.firstnumber = firstnumber;
	this.secondnumber = secondnumber;
	this.total = total;
}

public Calculator() {
	super();
	// TODO Auto-generated constructor stub
}

public double getFirstnumber() {
	return firstnumber;
}
public void setFirstnumber(double firstnumber) {
	this.firstnumber = firstnumber;
}
public double getSecondnumber() {
	return secondnumber;
}
public void setSecondnumber(double secondnumber) {
	this.secondnumber = secondnumber;
}
public double getTotal() {
	return total;
}
public void setTotal(double total) {
	this.total = total;
}
@Override
public String toString() {
	return "Calculator [firstnumber=" + firstnumber + ", secondnumber=" + secondnumber + ", total=" + total + "]";
}



 
}
