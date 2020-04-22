package com.sato.listadeiviniapp.model;

import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ItemSystembolaget {
	
	@JsonProperty("name")
	private String ProductNameBold;
	@JsonProperty("type") // or subcategory?
	private String Category;
//	@JsonProperty("year")
//	private int Vintage;
	@JsonProperty("country")
	private String Country;
	@JsonProperty("winery")
	private String ProducerName;
	
	public ItemSystembolaget() {}
	
	public ItemSystembolaget(String name, String type) {
		this.ProductNameBold = name;
		this.Category = type;
	}

	public String getProductNameBold() {
		return ProductNameBold;
	}

	public void setProductNameBold(String productNameBold) {
		ProductNameBold = productNameBold;
	}

	public String getCategory() {
		return Category;
	}

	public void setCategory(String category) {
		Category = category;
	}

//	public int getVintage() {
//		return Vintage;
//	}
//
//	public void setVintage(int vintage) {
//		Vintage = vintage;
//	}

	public String getCountry() {
		return Country;
	}

	public void setCountry(String country) {
		Country = country;
	}

	public String getProducerName() {
		return ProducerName;
	}

	public void setProducerName(String producerName) {
		ProducerName = producerName;
	}
	
	@JsonProperty("Hits")
	public void setName(List<Map<String, Object>> itemEntries) {
		Map<String, Object> itemObject = itemEntries.get(0);
		// set name
		setProductNameBold((String) itemObject.get("ProductNameBold"));
		// set type
		String temp = (String) itemObject.get("Category");
		String category;
		switch(temp) {
			case "Röda viner": category = "Red Wine";
				break;
			case "Vita viner": category = "White Wine";
				break;
			case "Roséviner": category = "Rose Wine";
				break;
			case "Mousserande viner": category = "Sparkling Wine";
				break;
			default: category = "Unknown";
		}
		setCategory(category);
		// set year
//		setVintage((int) itemObject.get("Vintage"));
		// set winery
		setProducerName((String) itemObject.get("ProducerName"));
		// set country
		String temp2 = (String) itemObject.get("Country");
		String country;
		switch(temp2) {
			case "Italien": country = "Italy";
				break;
			case "Frankrike": country = "France";
				break;
			case "USA": country = "USA";
				break; 
			case "Tyskland": country = "Germany";
				break;
			case "Spanien": country = "Spain";
				break;
			case "Portugal": country = "Portgual";
				break;
			case "Sydafrika": country = "South Africa";
				break;
			case "Ungern": country = "Hungary";
				break;
			default: country = "Unknown";
		}
		setCountry(country);
	}
	
}
