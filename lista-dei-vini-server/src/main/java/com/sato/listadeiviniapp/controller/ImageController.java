package com.sato.listadeiviniapp.controller;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;

import javax.imageio.ImageIO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sato.listadeiviniapp.model.TempImage;
import com.sato.listadeiviniapp.service.ImageService;

@RestController
@RequestMapping("/temp/")
@CrossOrigin(origins= {"http://localhost:19006", "http://localhost:19000"})
public class ImageController {
	
	@Autowired
	private final ImageService imageService;
	
	public ImageController(ImageService imageService) {
		this.imageService = imageService; 
	}
	
	@PostMapping("/new-image")
	public ResponseEntity<?> postImage(@RequestBody String imageString) {
		if(!(imageService.getAllImage().isEmpty())) {
			imageService.deleteImage();
		} 
		imageService.createImage(imageString);

		return ResponseEntity.ok().body("Image saved.");
	}
	
//	@PostMapping(value="/image/{fileName}", produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)
////	public ResponseEntity<TempImage> getImage() {
//	public @ResponseBody byte[] getImageByte(@PathVariable(value="fileName") String fileName) throws IOException {
//		if(imageService.getAllImage().isEmpty()) {
////			return ResponseEntity.notFound().build();
//			return null;
//		}
////		return ResponseEntity.ok().body(imageService.getImageString());
//		return imageService.getImage();
//	}
	@GetMapping(value="/image/{random}", produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)
	public ResponseEntity<byte[]> getImage(@PathVariable(value="random") int random) {
		TempImage image = imageService.getImageString();
	    byte[] imageByte = image.getImage();
	    
	    if(image.getType() == "png") {
	    	return ResponseEntity.ok().contentType(MediaType.IMAGE_PNG).body(imageByte);
	    }
	    return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(imageByte);
	}
	
}
