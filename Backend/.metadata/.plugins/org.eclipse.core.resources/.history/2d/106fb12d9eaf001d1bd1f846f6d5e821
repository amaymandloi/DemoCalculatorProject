package com.yash.calculator;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
public class CalculatorControllerTestCases {

	 @Autowired
	  private MockMvc mockMvc;
	  
	@Test
	  public void additionTest() throws Exception {
	    mockMvc.perform(get("/addition/2/2"))
	      .andExpect(status().isOk())
	      .andExpect(content().string("4.0"));
	  }
	  
	  @Test
	  public void negatvieAdditionTest() throws Exception {
	    mockMvc.perform(get("/addition/one/two"))
	      .andExpect(status().isBadRequest());
	  }
	  
	  @Test
	  public void subtractionionTest() throws Exception {
	    mockMvc.perform(get("/subtractionion/5/1"))
	      .andExpect(status().isOk())
	      .andExpect(content().string("4.0"));
	  }
	  
	  @Test
	  public void negatviesubtractionionTest() throws Exception {
	    mockMvc.perform(get("/subtractionion/one/two"))
	      .andExpect(status().isBadRequest());
	  }
	  
	  @Test
	  public void multificationTest() throws Exception {
	    mockMvc.perform(get("/multification/2/2"))
	      .andExpect(status().isOk())
	      .andExpect(content().string("4.0"));
	  }
	  
	  @Test
	  public void negatvieMultificationTest() throws Exception {
	    mockMvc.perform(get("/multification/one/four"))
	      .andExpect(status().isBadRequest());
	  }
	  
	  @Test
	  public void divisionTest() throws Exception {
	    mockMvc.perform(get("/division/20/5"))
	      .andExpect(status().isOk())
	      .andExpect(content().string("4.0"));
	  }
	  
	 
	  
	  @Test
	  public void negatviedivisionTest() throws Exception {
	    mockMvc.perform(get("/division/four/two"))
	      .andExpect(status().isBadRequest());
	  }
}
	
