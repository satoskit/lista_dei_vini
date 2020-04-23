package com.sato.listadeiviniapp.service;

import java.util.List;

import com.sato.listadeiviniapp.model.Item;
import com.sato.listadeiviniapp.model.ItemJson;

public interface ItemService {
	
	public void createItem(Item item);
	public void updateItem(Long id, Item item);
	public void deleteItem(Long id);
	
	public List<ItemJson> getList();
	
	public ItemJson getItemById(Long id);
	
//	public List<ItemJson> getItemsByGrade(Integer grade);
	public List<ItemJson> getItemsByCountry(String country);
//	public List<ItemJson> getItemsByType(String type);
//	public List<ItemJson> getItemsByGrape(String grape);
//	public List<ItemJson> getItemsByYear(Integer year);
//	public List<ItemJson> getItemsByWinery(String winery);
	
}
