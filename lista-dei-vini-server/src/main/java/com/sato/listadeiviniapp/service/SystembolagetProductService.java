package com.sato.listadeiviniapp.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import com.sato.listadeiviniapp.model.ItemJson;


public interface SystembolagetProductService {
	
//	public Mono<ResponseEntity<List<ItemJson>>> getItemByName(String searchedName);
	public Mono<ItemJson> getItemByName(String searchedName);
	public ItemJson getItemByInteger(int searchWord);
	
}
