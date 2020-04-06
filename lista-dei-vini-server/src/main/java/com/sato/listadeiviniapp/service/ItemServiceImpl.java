package com.sato.listadeiviniapp.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.sato.listadeiviniapp.model.Item;
import com.sato.listadeiviniapp.model.ItemJson;
import com.sato.listadeiviniapp.repository.ItemRepository;

@Service
public class ItemServiceImpl implements ItemService {
	
	@Autowired
	private ItemRepository itemRepo;
	
	private static final Logger logger = LoggerFactory.getLogger(ItemServiceImpl.class);
	
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
		
		return itemJson;
	}
	
	public List<ItemJson> convertToListOfItemJson(List<Item> itemList) {
		List<ItemJson> itemJsonList = new ArrayList<>();
		for(Item item : itemList) {
			ItemJson itemJson = new ItemJson();
			
			itemJsonList.add(convertItem(item));
		}
		return itemJsonList;
	}

	@Override
	public void createItem(Item item) {
		itemRepo.save(item);
	}

	@Override
	public void updateItem(Long id, Item item) {
		Optional<Item> originalItemOptional = itemRepo.findById(id);
		Item originalItem = originalItemOptional.get();
		
		originalItem.setName(item.getName());
		originalItem.setGrade(item.getGrade());
		originalItem.setType(item.getType());
		originalItem.setYear(item.getYear());
		originalItem.setCountry(item.getCountry());
		originalItem.setWinery(item.getWinery());
		originalItem.setGrape(item.getGrape());
		
		itemRepo.save(originalItem);
	}

	@Override
	public void deleteItem(Long id) {
//		Optional<Item> itemOptional =itemRepo.findById(id);
//		Item item = itemOptional.get();
		
		itemRepo.deleteById(id);
	}

	@Override
	public List<ItemJson> getList() {
		List<Item> item = itemRepo.findAll();
		
		return convertToListOfItemJson(item);
	}

	@Override
	public ItemJson getItemById(Long id) {
		Optional<Item> itemOptional =itemRepo.findById(id);
		Item item = itemOptional.get();
		logger.info("Get an item! " + item.getName());
//		ItemJson itemJson = convertItem(item);
		ItemJson itemJson = new ItemJson();
		return convertItem(item);
	}

//	@Override
//	public List<ItemJson> getItemsByGrade(Integer grade) {
//		return itemRepo.findAllByGrade(grade);
//	}
//	
//	@Override
//	public List<ItemJson> getItemsByCountry(String country) {
//		return itemRepo.findAllByCountry(country);
//	}
//
//	@Override
//	public List<ItemJson> getItemsByType(String type) {
//		return itemRepo.findAllByType(type);
//	}
//
//	@Override
//	public List<ItemJson> getItemsByGrape(String grape) {
//		return itemRepo.findAllByGrape(grape);
//	}
//
//	@Override
//	public List<ItemJson> getItemsByYear(Integer year) {
//		return itemRepo.findAllByYear(year);
//	}
//
//	@Override
//	public List<ItemJson> getItemsByWinery(String winery) {
//		return itemRepo.findAllByWinery(winery);
//	}

	@Override
	public List<Item> sortByGradeAsc(Integer grade) {
		return itemRepo.findAll(Sort.by(Sort.Direction.ASC, "grade"));
	}

	@Override
	public List<Item> sortByCountryAsc(String country) {
		return itemRepo.findAll(Sort.by(Sort.Direction.ASC, "country"));
	}

	@Override
	public List<Item> sortByTypeAsc(String type) {
		return itemRepo.findAll(Sort.by(Sort.Direction.ASC, "type"));
	}

	@Override
	public List<Item> sortByGrapeAsc(String grape) {
		return itemRepo.findAll(Sort.by(Sort.Direction.ASC, "grape"));
	}

	@Override
	public List<Item> sortByYearAsc(Integer year) {
		return itemRepo.findAll(Sort.by(Sort.Direction.ASC, "year"));
	}

	@Override
	public List<Item> sortByWineryAsc(String winery) {
		return itemRepo.findAll(Sort.by(Sort.Direction.ASC, "winery"));
	}

	@Override
	public List<Item> sortByGradeDesc(Integer grade) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Item> sortByCountryDesc(String country) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Item> sortByTypeDesc(String type) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Item> sortByGrapeDesc(String grape) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Item> sortByYearDesc(Integer year) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Item> sortByWineryDesc(String winery) {
		// TODO Auto-generated method stub
		return null;
	}

}
