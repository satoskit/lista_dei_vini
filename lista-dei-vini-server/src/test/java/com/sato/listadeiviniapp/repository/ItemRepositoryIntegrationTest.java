package com.sato.listadeiviniapp.repository;

import java.util.List;
import java.util.Optional;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

import com.sato.listadeiviniapp.model.Item;

@RunWith(SpringRunner.class)
@DataJpaTest
public class ItemRepositoryIntegrationTest {
	
	@Autowired
	private TestEntityManager testEntityManager;
	
	@Autowired
	private ItemRepository itemRepo;
	
	@Test
	public void whenFindById_thenReturnItem() {
		Item item = new Item("Test Wine");
		testEntityManager.persistAndFlush(item);
		
		Item foundItem = itemRepo.findById(item.getId()).orElse(null);
		
		assertThat(foundItem.getName()).isEqualTo(item.getName());	
	}
	
	@Test
	public void whenFindAll_thenReturnItemList() {
		Item redWine = new Item("Red Wine");
		Item whiteWine = new Item("White Wine");
		Item sparklingWine = new Item("Sparkling Wine");
		testEntityManager.persist(redWine);
		testEntityManager.persist(whiteWine);
		testEntityManager.persist(sparklingWine);
		testEntityManager.flush();
		
		List<Item> allItems = itemRepo.findAll();
		
		assertThat(allItems).hasSize(3).extracting(Item::getName)
			.containsOnly(redWine.getName(), whiteWine.getName(), sparklingWine.getName());
	}
	
	@Test
	public void whenFindAllByCountry_thenReturnItemList() {
		Item redWine1 = new Item("Red Wine1", "Italy");
		Item redWine2 = new Item("Red Wine2", "Italy");
		Item redWine3 = new Item("Red Wine3", "France");
		
		testEntityManager.persist(redWine1);
		testEntityManager.persist(redWine2);
		testEntityManager.persist(redWine3);
		testEntityManager.flush();
		
		List<Item> foundItems = itemRepo.findAllByCountry(redWine1.getCountry());
		
		assertThat(foundItems).hasSize(2).extracting(Item::getCountry)
			.containsOnly(redWine1.getCountry(), redWine2.getCountry());
	}
	
	@Test
	public void whenFindAllByGrade_thenReturnItemList() {
		Item redWine1 = new Item("Red Wine1", 4);
		Item redWine2 = new Item("Red Wine2", 5);
		Item redWine3 = new Item("Red Wine3", 4);
		
		testEntityManager.persist(redWine1);
		testEntityManager.persist(redWine2);
		testEntityManager.persist(redWine3);
		testEntityManager.flush();
		
		List<Item> foundItems = itemRepo.findAllByGrade(redWine1.getGrade());
		
		assertThat(foundItems).hasSize(2).extracting(Item::getGrade)
			.containsOnly(redWine1.getGrade(), redWine3.getGrade());
	}

}
