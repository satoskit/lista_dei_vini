package com.sato.listadeiviniapp.service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.sato.listadeiviniapp.model.Item;
import com.sato.listadeiviniapp.repository.ItemRepository;

@Service
public class ItemServiceImpl implements ItemService {
	
	@Autowired
	private ItemRepository itemRepo;
	
	private static final Logger logger = LoggerFactory.getLogger(ItemServiceImpl.class);

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
		Optional<Item> itemOptional =itemRepo.findById(id);
		Item item = itemOptional.get();
		itemRepo.delete(item);
	}

	@Override
	public List<Item> getList() {
		return itemRepo.findAll();
	}

	@Override
	public Item getItemById(Long id) {
		Optional<Item> itemOptional =itemRepo.findById(id);
		Item item = itemOptional.get();
		return item;
	}

	@Override
	public List<Item> getItemsByGrade(int grade) {
		return itemRepo.findAllByGrade(grade);
	}
	
	@Override
	public List<Item> getItemsByCountry(String country) {
		return itemRepo.findAllByCountry(country);
	}

	@Override
	public List<Item> getItemsByType(String type) {
		return itemRepo.findAllByType(type);
	}

	@Override
	public List<Item> getItemsByGrape(String grape) {
		return itemRepo.findAllByGrape(grape);
	}

	@Override
	public List<Item> getItemsByYear(int year) {
		return itemRepo.findAllByYear(year);
	}

	@Override
	public List<Item> getItemsByWinery(String winery) {
		return itemRepo.findAllByWinery(winery);
	}

	@Override
	public List<Item> sortByGradeAsc(int grade) {
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
	public List<Item> sortByYearAsc(int year) {
		return itemRepo.findAll(Sort.by(Sort.Direction.ASC, "year"));
	}

	@Override
	public List<Item> sortByWineryAsc(String winery) {
		return itemRepo.findAll(Sort.by(Sort.Direction.ASC, "winery"));
	}

	@Override
	public List<Item> sortByGradeDesc(int grade) {
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
	public List<Item> sortByYearDesc(int year) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Item> sortByWineryDesc(String winery) {
		// TODO Auto-generated method stub
		return null;
	}

}
