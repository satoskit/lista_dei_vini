package com.sato.listadeiviniapp.service;

import java.util.List;

import com.sato.listadeiviniapp.model.Item;

public interface ItemService {
	
	public void createItem(Item item);
	public void updateItem(Long id, Item item);
	public void deleteItem(Long id);
	
	public List<Item> getList();
	
	public Item getItemById(Long id);
	
	public List<Item> getItemsByGrade(int grade);
	public List<Item> getItemsByCountry(String country);
	public List<Item> getItemsByType(String type);
	public List<Item> getItemsByGrape(String grape);
	public List<Item> getItemsByYear(int year);
	public List<Item> getItemsByWinery(String winery);
	
	public List<Item> sortByGradeAsc(int grade);
	public List<Item> sortByCountryAsc(String country);
	public List<Item> sortByTypeAsc(String type);
	public List<Item> sortByGrapeAsc(String grape);
	public List<Item> sortByYearAsc(int year);
	public List<Item> sortByWineryAsc(String winery);
	
	public List<Item> sortByGradeDesc(int grade);
	public List<Item> sortByCountryDesc(String country);
	public List<Item> sortByTypeDesc(String type);
	public List<Item> sortByGrapeDesc(String grape);
	public List<Item> sortByYearDesc(int year);
	public List<Item> sortByWineryDesc(String winery);
	
}
