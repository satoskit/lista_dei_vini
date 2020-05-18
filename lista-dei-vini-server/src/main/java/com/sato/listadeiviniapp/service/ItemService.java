package com.sato.listadeiviniapp.service;

import java.util.List;

import com.sato.listadeiviniapp.model.Item;

public interface ItemService {
	
	public void createItem(Item item);
	public void updateItem(Long id, Item item);
	public void deleteItem(Long id);
	
	public List<Item> getList();
	public List<Item> getListWithoutPic();
	
	public Item getItemById(Long id);
	public Item getItemByIdWithoutPic(Long id);
	
	public byte[] getImageByteById(Long id);
	public String getImageTypeById(Long id);
	
//	public List<Item> getItemsByGrade(Integer grade);
	public List<Item> getItemsByCountry(String country);
//	public List<Item> getItemsByType(String type);
//	public List<Item> getItemsByGrape(String grape);
//	public List<Item> getItemsByYear(Integer year);
//	public List<Item> getItemsByWinery(String winery);
	
}
