package com.sato.listadeiviniapp.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sato.listadeiviniapp.exceptions.NoItemFoundException;
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
		itemRepo.deleteById(id);
	}

	@Override
	public List<Item> getList() {
		List<Item> items = itemRepo.findAll();
		if(items.isEmpty()) {
			throw new NoItemFoundException("No item found.");
		}
		return items;
	}
	
	@Override
	public List<Item> getListWithoutPic() {
		List<Item> items = itemRepo.findAll();
		if(items.isEmpty()) {
			throw new NoItemFoundException("No item found.");
		}
		return items;
	}

	@Override
	public Item getItemById(Long id) {
		Optional<Item> itemOptional =itemRepo.findById(id);
		
		if(!(itemOptional.isPresent())) {
			throw new NoItemFoundException("No item found.");
		}
		
		Item item = itemOptional.get();
		logger.info("Get an item! " + item.getName());
		return item;
	}
	
	@Override
	public Item getItemByIdWithoutPic(Long id) {
		Item itemWithoutPic =itemRepo.findByIdWithoutPicture(id);
		
		if(itemWithoutPic == null) {
			throw new NoItemFoundException("No item found.");
		}
		
		logger.info("Get an item without image! " + itemWithoutPic.getName());
		return itemWithoutPic;
	}
	
	@Override
	public byte[] getImageByteById(Long id) {
		byte[] imageByte =itemRepo.findImageByteById(id);
		
		if(imageByte.length == 0 || imageByte == null) {
			throw new NoItemFoundException("No item found.");
		}
		
		return imageByte;
	}
	
	@Override
	public String getImageTypeById(Long id) {
		Optional<Item> itemOptional =itemRepo.findById(id);
		
		if(!(itemOptional.isPresent())) {
			throw new NoItemFoundException("No item found.");
		}
		
		Item item = itemOptional.get();
		return item.getImageType();
	}

//	@Override
//	public List<ItemJson> getItemsByGrade(Integer grade) {
//		return itemRepo.findAllByGrade(grade);
//	}
//	
	@Override
	public List<Item> getItemsByCountry(String country) {
		List<Item> items = itemRepo.findAllByCountry(country);
		
		if(items.isEmpty()) {
			throw new NoItemFoundException("No item found.");
		}
		
		return items;
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
