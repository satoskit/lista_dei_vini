package com.sato.listadeiviniapp.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sato.listadeiviniapp.ListaDeiViniAppApplicationProperties;
import com.sato.listadeiviniapp.controller.SystembolagetAPIController;
import com.sato.listadeiviniapp.model.ItemJson;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class SystembolagetProductServiceImpl implements SystembolagetProductService {

	private static final String SYSTEMBOLAGET_URL = "https://api-extern.systembolaget.se/product/v1/product/";
	private final String API_KEY;
	private final String HEADER_NAME = "Ocp-Apim-Subscription-Key";
	
	private final WebClient webClient; 
	
	private static final Logger logger = LoggerFactory.getLogger(SystembolagetProductServiceImpl.class);
	
	public SystembolagetProductServiceImpl(ListaDeiViniAppApplicationProperties properties) {
		this.API_KEY = properties.getApi().getApiKey();
		this.webClient = WebClient.builder().baseUrl(SYSTEMBOLAGET_URL)
				.defaultHeader(HttpHeaders.CONTENT_TYPE, "application/json")
				.defaultHeader(HEADER_NAME, API_KEY)
				.build();
	}

	@Override
	public Mono<ItemJson> getItemByName(String searchedName) {
		logger.info(searchedName + " " + API_KEY);
		return webClient.get().uri(uriBuilder -> 
				uriBuilder.path("search").queryParam("SearchQuery", searchedName).build(searchedName))
			.header(HEADER_NAME, API_KEY)
//			.exchange().flatMap(response -> response.toEntityList(ItemJson.class));
			.retrieve()
			.bodyToMono(ItemJson.class);
//		return null;
	}

	@Override
	public ItemJson getItemByInteger(int searchWord) {
		// TODO Auto-generated method stub
		return null;
	}
	
	// Example from Pluralsight
//	private Mono<ResponseEntity<ItemJson>> postNewItem() {
//		
//		return webClient.post().body(Mono.just(new ItemJson(null, "Something")), ItemJson.class)
//				.exchange().flatMap(response -> reponse.toEntity(ItemJson.class))
//				.doOnSuccess(o -> System.out.println("post " + o));
//	}
//	private Flux<ItemJson> getAllItems() {
//		return webClient.get().retrieve().bodyToFlux(ItemJson.class)
//				.doOnNext(o -> System.out.println("get " + o));
//	}

}
