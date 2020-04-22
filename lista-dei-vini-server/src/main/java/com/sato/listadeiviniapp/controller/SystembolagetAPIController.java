package com.sato.listadeiviniapp.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sato.listadeiviniapp.model.ItemJson;
import com.sato.listadeiviniapp.service.SystembolagetProductServiceImpl;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/systembolaget/v1/product/")
public class SystembolagetAPIController {
	
	@Autowired
	private final SystembolagetProductServiceImpl productService;
	
	private static final Logger logger = LoggerFactory.getLogger(SystembolagetAPIController.class);
	
	public SystembolagetAPIController(SystembolagetProductServiceImpl productService) {
		this.productService = productService;
	}
	
	@GetMapping("/result-list/")
	public Mono<ResponseEntity<ItemJson>> getSearchResult(@RequestParam("searchedName") String searchedName) {
		logger.info("Searching for " + searchedName);
		return productService.getItemByName(searchedName)
				.map(item -> ResponseEntity.ok(item))
				.defaultIfEmpty(ResponseEntity.notFound().build());
	}
	
}
