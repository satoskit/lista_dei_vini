// ** API NO LONGER AVAILABLE! **//
//package com.sato.listadeiviniapp.controller;
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.sato.listadeiviniapp.model.ItemSystembolaget;
//import com.sato.listadeiviniapp.service.SystembolagetProductServiceImpl;
//
//import reactor.core.publisher.Mono;
//
//@RestController
//@RequestMapping("/systembolaget/v1/product/")
//@CrossOrigin(origins="http://localhost:19006")
//public class SystembolagetAPIController {
//	
//	@Autowired
//	private final SystembolagetProductServiceImpl productService;
//	
//	private static final Logger logger = LoggerFactory.getLogger(SystembolagetAPIController.class);
//	
//	public SystembolagetAPIController(SystembolagetProductServiceImpl productService) {
//		this.productService = productService;
//	}
//	
//	@GetMapping("/result-list/")
//	public Mono<ResponseEntity<ItemSystembolaget>> getSearchResult(@RequestParam("searchedName") String searchedName) {
//		logger.info("Searching for " + searchedName);
//		return productService.getItemByName(searchedName)
//				.map(item -> ResponseEntity.ok(item))
//				.defaultIfEmpty(ResponseEntity.notFound().build());
//	}
//	
//}
