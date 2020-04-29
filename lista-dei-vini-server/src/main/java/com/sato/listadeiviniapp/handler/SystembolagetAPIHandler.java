package com.sato.listadeiviniapp.handler;

import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.sato.listadeiviniapp.model.ItemSystembolaget;
import com.sato.listadeiviniapp.service.SystembolagetProductServiceImpl;

import reactor.core.publisher.Mono;

import static org.springframework.http.MediaType.APPLICATION_JSON;

//@Component
//public class SystembolagetAPIHandler {
//	
//	private SystembolagetProductServiceImpl productService;
//	
//	public SystembolagetAPIHandler(SystembolagetProductServiceImpl service) {
//		this.productService = service;
//	}
//	
//	public Mono<ServerResponse> getSearchResult(ServerRequest request) {
//		String searchedName = request. pathVariable("name");
//		
//		Mono<ItemSystembolaget> items = productService.getItemByName(searchedName);
//		Mono<ServerResponse> notFound = ServerResponse.notFound().build();
//				
//		//return //ServerResponse.ok().contentType(APPLICATION_JSON)
//				//.body(items, ItemSystembolaget.class);
//			return	items.flatMap(item -> ServerResponse.ok()
//							.contentType(APPLICATION_JSON).body(fromObject(item)))
//						.switchIfEmpty(notFound);
//	}

//}
