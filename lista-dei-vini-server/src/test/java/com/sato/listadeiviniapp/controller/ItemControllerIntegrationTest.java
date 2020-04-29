//package com.sato.listadeiviniapp.controller;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import org.junit.Before;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.mockito.internal.verification.VerificationModeFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.http.MediaType;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.test.web.servlet.MockMvc;
//
//import static org.hamcrest.Matchers.hasSize;
//import static org.mockito.BDDMockito.given;
//import static org.mockito.Mockito.reset;
//import static org.mockito.Mockito.verify;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//import com.sato.listadeiviniapp.model.Item;
//import com.sato.listadeiviniapp.service.ItemServiceImpl;
//
//@RunWith(SpringRunner.class)
//@WebMvcTest(ItemController.class)
//public class ItemControllerIntegrationTest {
//	
//	@Autowired
//	private MockMvc mockMvc;
//	
//	@MockBean
//	private ItemServiceImpl itemService;
//	
//	@Before
//	public void setUp() throws Exception { }
//	
////	@Test
////	public void givenItems_whenGetItems_thenReturnJsonArray() {
////		Item wine1 = new Item("Red Wine");
////		Item wine2 = new Item("White Wine");
////		Item wine3 = new Item("Rose Wine");
////		
////		List<Item> items = new ArrayList<>();
////		items.add(wine1);
////		items.add(wine2);
////		items.add(wine3);
////
////        given(itemService.getList()).willReturn(itemService.convertToListOfItemJson(items));
////
////        mockMvc.perform(get("/api/v1/list").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk())
////        	.andExpect(jsonPath("$", hasSize(3)))
////        	.andExpect(jsonPath("$[0].name", is(itemService.convertItem(wine1).getName())))
////        	.andExpect(jsonPath("$[1].name", is(wine2.getName())))
////        	.andExpect(jsonPath("$[2].name", is(itemService.convertItem(wine3)).getName()));
////        verify(itemService, VerificationModeFactory.times(1)).getList();
////        reset(itemService);
////		
////	}
//
//}
