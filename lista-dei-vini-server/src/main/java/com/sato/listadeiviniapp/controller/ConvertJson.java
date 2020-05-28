package com.sato.listadeiviniapp.controller;

import java.util.ArrayList;
import java.util.List;

import com.sato.listadeiviniapp.model.Item;
import com.sato.listadeiviniapp.model.ItemJson;

public class ConvertJson {

	public ItemJson convertItem(Item item) {
		ItemJson itemJson = new ItemJson();
		
		itemJson.setId(item.getId());
		itemJson.setName(item.getName());
		itemJson.setGrade(item.getGrade());
		itemJson.setType(item.getType());
		itemJson.setYear(item.getYear());
		itemJson.setCountry(item.getCountry());
		itemJson.setWinery(item.getWinery());
		itemJson.setGrape(item.getGrape());
		if(item.getImageByte() != null) {
//				itemJson.setImage(item.getImage());
			itemJson.setImage(true);
//				itemJson.setImageByte(item.getImage());
		}
		if(item.getCreatedAt() != null) {
			itemJson.setCreated_at(item.getCreatedAt());			
		}
		return itemJson;
	}
	
	public ItemJson convertItemWithoutPic(Item item) {
		ItemJson itemJsonWithoutPic = new ItemJson();
		
		itemJsonWithoutPic.setId(item.getId());
		itemJsonWithoutPic.setName(item.getName());
		itemJsonWithoutPic.setGrade(item.getGrade());
		itemJsonWithoutPic.setType(item.getType());
		itemJsonWithoutPic.setYear(item.getYear());
		itemJsonWithoutPic.setCountry(item.getCountry());
		itemJsonWithoutPic.setWinery(item.getWinery());
		itemJsonWithoutPic.setGrape(item.getGrape());
		if(item.getImageType() != null) {
			itemJsonWithoutPic.setImage(true);
			itemJsonWithoutPic.setImageType(item.getImageType());
		} else {
			itemJsonWithoutPic.setImage(false);
		}
		if(item.getCreatedAt() != null) {
			itemJsonWithoutPic.setCreated_at(item.getCreatedAt());			
		}
		
		return itemJsonWithoutPic;
	}
	
	public List<ItemJson> convertToListOfItemJson(List<Item> itemList) {
		List<ItemJson> itemJsonList = new ArrayList<>();
		for(Item item : itemList) {
			itemJsonList.add(convertItem(item));
		}
		return itemJsonList;
	}
	
	public List<ItemJson> convertToListOfItemJsonWithoutPic(List<Item> itemList) {
		List<ItemJson> itemJsonList = new ArrayList<>();
		for(Item item : itemList) {
			ItemJson itemJson = new ItemJson();
			itemJsonList.add(convertItemWithoutPic(item));
		}
		return itemJsonList;
	}
			
}
