package com.sato.listadeiviniapp.service;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.assertj.core.util.Arrays;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit4.SpringRunner;

import com.sato.listadeiviniapp.model.Item;
import com.sato.listadeiviniapp.model.ItemJson;
import com.sato.listadeiviniapp.repository.ItemRepository;
import com.sato.listadeiviniapp.service.ItemService;

@RunWith(SpringRunner.class)
public class ItemServiceImplIntegrationTest {
	
	@TestConfiguration
	static class ItemServiceImplTestContextConfiguration {
		@Bean
		public ItemService itemService() {
			return new ItemServiceImpl();
		}
	}
	
	@Autowired
	private ItemService itemService;
	
	@MockBean
	private ItemRepository itemRepo;
	
	@Before
	public void setUp() {
		Item wine1 = new Item("Red Wine", "Italy");
		wine1.setId(1L);
		Item wine2 = new Item("White Wine", "Germany");
		Item wine3 = new Item("Sparkling Wine", 4);
		
		List<Item> itemList = new ArrayList<>();
		itemList.add(wine1);
		itemList.add(wine2);
		itemList.add(wine3);
		
		List<Item> itemItaly = new ArrayList<>();
		itemList.add(wine1);
		
		Mockito.when(itemRepo.findById(wine1.getId())).thenReturn(Optional.of(wine1));
		Mockito.when(itemRepo.findAll()).thenReturn(itemList);
		Mockito.when(itemRepo.findAllByCountry(wine1.getCountry())).thenReturn(itemItaly);
	}
	
	@Test
	public void whenValidId_thenItemShouldBeFound() {
		ItemJson itemJson = itemService.getItemJsonById(1L);
		
		assertThat(itemJson.getName()).isEqualTo("Red Wine");
	}

}
