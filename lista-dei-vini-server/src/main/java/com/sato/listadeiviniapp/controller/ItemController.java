package com.sato.listadeiviniapp.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sato.listadeiviniapp.model.Item;
import com.sato.listadeiviniapp.model.ItemJson;
import com.sato.listadeiviniapp.repository.ItemRepository;
import com.sato.listadeiviniapp.service.ItemServiceImpl;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins="http://localhost:19006")
public class ItemController {
	
	@Autowired
	private final ItemServiceImpl itemService;
	
	private static final Logger logger = LoggerFactory.getLogger(ItemServiceImpl.class);
	
	public ItemController(ItemServiceImpl itemService) {
		this.itemService = itemService;
	}
	
	@GetMapping("/list")
	public ResponseEntity<List<ItemJson>> getList() {
		return ResponseEntity.ok().body(itemService.getList());
	}
	
	@GetMapping("/list/")
	public ResponseEntity<ItemJson> getItemById(@RequestParam(value="id") Long id) {
		return ResponseEntity.ok().body(itemService.getItemById(id));
	}
	
//	@GetMapping("/list/{grade}")
//	public ResponseEntity<List<Item>> getItemsByGrade(@PathVariable(value="grade") int grade) {
//		List<Item> listByGrade = itemService.getItemsByGrade(grade);
//		return ResponseEntity.ok().body(listByGrade);
//	}
//	
//	@GetMapping("/list/{country}")
//	public ResponseEntity<List<Item>> getItemsByCountry(@PathVariable(value="country") String country) {
//		List<Item> listByCountry = itemService.getItemsByCountry(country);
//		return ResponseEntity.ok().body(listByCountry);
//	}
//	
//	@GetMapping("/list/{type}")
//	public ResponseEntity<List<Item>> getItemsByType(@PathVariable(value="type") String type) {
//		List<Item> listByType = itemService.getItemsByType(type);
//		return ResponseEntity.ok().body(listByType);
//	}
//	
//	@GetMapping("/list/{grape}")
//	public ResponseEntity<List<Item>> getItemsByGrape(@PathVariable(value="grape") String grape) {
//		List<Item> listByGrape = itemService.getItemsByGrape(grape);
//		return ResponseEntity.ok().body(listByGrape);
//	}
//	
//	@GetMapping("/list/{year}")
//	public ResponseEntity<List<Item>> getItemsByYear(@PathVariable(value="year") int year) {
//		List<Item> listByYear = itemService.getItemsByYear(year);
//		return ResponseEntity.ok().body(listByYear);
//	}
//	
//	@GetMapping("/list/{winery}")
//	public ResponseEntity<List<Item>> getItemsByWinery(@PathVariable(value="winery") String winery) {
//		List<Item> listByWinery = itemService.getItemsByWinery(winery);
//		return ResponseEntity.ok().body(listByWinery);
//	}
//	
//	//TODO: @Valid needed?
//	@PostMapping("/list")
//	public ResponseEntity<?> createItem(@RequestBody Item item) {
//		itemService.createItem(item);
//		return ResponseEntity.ok().body(item);
//	}
//	
//	@PostMapping("/list/{id}")
//	public ResponseEntity<Item> updateItem(@PathVariable(value="id") Long id, @RequestBody Item item) {
//		itemService.updateItem(id, item);
//		return ResponseEntity.ok().body(item);
//	}
//	
//	@DeleteMapping("/list/{id}")
//	public ResponseEntity<Long> deleteItem(@PathVariable Long id) {
//		itemService.deleteItem(id);
//		return ResponseEntity.ok().body(id);
//	}

}
