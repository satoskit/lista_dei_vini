package com.sato.listadeiviniapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sato.listadeiviniapp.model.Item;
import com.sato.listadeiviniapp.repository.ItemRepository;
import com.sato.listadeiviniapp.service.ItemServiceImpl;

@RestController
@RequestMapping("/api/v1")
public class ItemController {
	
	@Autowired
	private ItemServiceImpl itemService;
	
	@GetMapping("/list")
	public List<Item> getList() {
//		return itemService
		return null;
	}
	
	@GetMapping("/list/{id}")
	public ResponseEntity<Item> getItemById(@PathVariable(value="id") Long id) {
		Item item = itemService.getItemById(id);
		return ResponseEntity.ok().body(item);
	}
	
	@GetMapping("/list/{grade}")
	public ResponseEntity<List<Item>> getItemsByGrade(@PathVariable(value="grade") int grade) {
		List<Item> listByGrade = itemService.getItemsByGrade(grade);
		return ResponseEntity.ok().body(listByGrade);
	}
	
	@GetMapping("/list/{country}")
	public ResponseEntity<List<Item>> getItemsByCountry(@PathVariable(value="country") String country) {
		List<Item> listByCountry = itemService.getItemsByCountry(country);
		return ResponseEntity.ok().body(listByCountry);
	}

}
