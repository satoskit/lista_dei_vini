package com.sato.listadeiviniapp.service;

import reactor.core.publisher.Mono;

import com.sato.listadeiviniapp.model.ItemSystembolaget;


public interface SystembolagetProductService {
	
//	public Mono<ResponseEntity<List<ItemJson>>> getItemByName(String searchedName);
	public Mono<ItemSystembolaget> getItemByName(String searchedName);
	public ItemSystembolaget getItemByInteger(int searchWord);
	
}
