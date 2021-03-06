package com.sato.listadeiviniapp.controller;

import java.util.Base64;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sato.listadeiviniapp.model.Item;
import com.sato.listadeiviniapp.model.ItemJson;
import com.sato.listadeiviniapp.service.ImageService;
import com.sato.listadeiviniapp.service.ItemServiceImpl;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins= {"http://localhost:19006", "http://localhost:19000"})
public class ItemController {
	
	@Autowired
	private final ItemServiceImpl itemService;
	
	@Autowired
	private final ImageService imageService;
	
	private static final Logger logger = LoggerFactory.getLogger(ItemController.class);
	private ConvertJson jsonConverter = new ConvertJson();
	
	public ItemController(ItemServiceImpl itemService, ImageService imageService) {
		this.itemService = itemService;
		this.imageService = imageService;
	}
	
	//TODO: @Valid needed?
	@PostMapping("/new-item")
	public ResponseEntity<?> createItem(@RequestBody Item item) {
		itemService.createItem(item);
		return ResponseEntity.ok().body(item);
	}
	
	@PostMapping("/new-item-with-pic")
	public ResponseEntity<?> createItemWithPic(@RequestBody Item item) {
		String imageBase64 = Base64.getEncoder().encodeToString(imageService.getImage().getImage());
		if(imageBase64.startsWith("/9j")) {
			item.setImageType("jpeg");
		} else if(imageBase64.startsWith("/9g")) {
			item.setImageType("jpg");
		} else if(imageBase64.startsWith("iVBORw0KGgo")) {
			item.setImageType("png");
		}
		item.setImageByte(imageService.getImageByte());
		
		itemService.createItem(item);
		
		return ResponseEntity.ok().body(item);
	}
	
	@PostMapping("/update/{id}")
	public ResponseEntity<Item> updateItem(@PathVariable(value="id") Long id, @RequestBody Item item) {
		itemService.updateItem(id, item);
		return ResponseEntity.ok().body(item);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Long> deleteItem(@PathVariable(value="id") Long id) {
		itemService.deleteItem(id);
		return ResponseEntity.ok().body(id);
	}
	
	@GetMapping("/list")
	public ResponseEntity<List<ItemJson>> getList() {
		List<Item> items = itemService.getList();
		List<ItemJson> itemJsons = jsonConverter.convertToListOfItemJson(items);
		return ResponseEntity.ok().body(itemJsons);
	}
	
	@GetMapping("/list-without-pic")
	public ResponseEntity<List<ItemJson>> getListWithoutPic() {
		List<Item> items = itemService.getListWithoutPic();
		List<ItemJson> itemJsons = jsonConverter.convertToListOfItemJsonWithoutPic(items);
		return ResponseEntity.ok().body(itemJsons);
	}
	
	@GetMapping("/list/id")
	public ResponseEntity<ItemJson> getItemById(@RequestParam(value="id") Long id) {
		Item foundItem = itemService.getItemById(id);
		ItemJson itemJson = jsonConverter.convertItem(foundItem);
		return ResponseEntity.ok().body(itemJson);
	}
	
	@GetMapping("/list/id-without-pic")
	public ResponseEntity<ItemJson> getItemByIdWithoutPic(@RequestParam(value="id") Long id) {
		Item foundItem = itemService.getItemByIdWithoutPic(id);
		ItemJson itemJson = jsonConverter.convertItemWithoutPic(foundItem);
		return ResponseEntity.ok().body(itemJson);
	}
	
	@GetMapping(value="/list/image/id", produces=MediaType.APPLICATION_OCTET_STREAM_VALUE)
	public ResponseEntity<byte[]> getImageById(@RequestParam(value="id") Long id) {
//		if(item.getImage().isEmpty()) {
		String itemString = itemService.getImageTypeById(id);
		byte[] imageByte = itemService.getImageByteById(id);
		if(itemString.isEmpty()) {
			return null;
		} else {
		if(itemString.equals("png")) {
			return ResponseEntity.ok().contentType(MediaType.IMAGE_PNG).body(imageByte);
		} else {
			return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(imageByte);
		}
		}
	}
	
//	@GetMapping("/list/{grade}")
//	public ResponseEntity<List<Item>> getItemsByGrade(@PathVariable(value="grade") int grade) {
//		List<Item> listByGrade = itemService.getItemsByGrade(grade);
//		return ResponseEntity.ok().body(listByGrade);
//	}
//	
	@GetMapping("/list/country")
	public ResponseEntity<List<ItemJson>> getItemsByCountry(@RequestParam(value="country") String country) {
		List<Item> items = itemService.getItemsByCountry(country);
		List<ItemJson> itemJsons = jsonConverter.convertToListOfItemJson(items);
		return ResponseEntity.ok().body(itemJsons);
	}
//	
//	@GetMapping("/list/{type}")
//	public ResponseEntity<List<Item>> getItemsByType(@PathVariable(value="type") String type) {
//		List<Item> listByType = itemService.getItemsByType(type);
//		return ResponseEntity.ok().body(listByType);
//	}
//	
//	@GetMapping("/list/{grape}")
//	public ResponseEntity<List<Item>> getItemsByGrape(@PathVariable(value="grape") String grape) {
//		List<Item> listByGrape = itemService.getItemsByGrape(grape);
//		return ResponseEntity.ok().body(listByGrape);
//	}
//	
//	@GetMapping("/list/{year}")
//	public ResponseEntity<List<Item>> getItemsByYear(@PathVariable(value="year") int year) {
//		List<Item> listByYear = itemService.getItemsByYear(year);
//		return ResponseEntity.ok().body(listByYear);
//	}
//	
//	@GetMapping("/list/{winery}")
//	public ResponseEntity<List<Item>> getItemsByWinery(@PathVariable(value="winery") String winery) {
//		List<Item> listByWinery = itemService.getItemsByWinery(winery);
//		return ResponseEntity.ok().body(listByWinery);
//	}
//	

}
