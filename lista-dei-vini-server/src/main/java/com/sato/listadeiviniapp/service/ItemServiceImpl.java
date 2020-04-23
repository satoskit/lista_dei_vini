package com.sato.listadeiviniapp.service;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.imageio.ImageIO;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
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
		itemJson.setImage(item.getImage());
		if(item.getCreatedAt() != null) {
			itemJson.setCreated_at(item.getCreatedAt());			
		}
		
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
		
		originalItem.setId(id);
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
	@Override
	public List<ItemJson> getItemsByCountry(String country) {
		List<Item> items = itemRepo.findAllByCountry(country);
		return convertToListOfItemJson(items);
	}
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


	// file to/from byte[]
//	public byte[] convertToByte(File image) {
//		BufferedImage bImage;
//		ByteArrayOutputStream boStream = new ByteArrayOutputStream();
//		try {
//			bImage = ImageIO.read(image);
//			ImageIO.write(bImage, "jpg", boStream);
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		byte[] imageByte = boStream.toByteArray();
//		return imageByte;
//	}
//	
//	public File convertFromByte(byte[] imageByte, String filepath) {
//		File image = new File(filepath + "saved.jpg");
//		ByteArrayInputStream biStream = new ByteArrayInputStream(imageByte);
//		try {
//			BufferedImage bImage = ImageIO.read(biStream);
//			ImageIO.write(bImage, "jpg", image);
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		
//		return image;
//	}

}
