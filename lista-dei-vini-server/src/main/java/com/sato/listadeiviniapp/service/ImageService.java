package com.sato.listadeiviniapp.service;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.util.Base64;
import java.util.List;

import javax.imageio.ImageIO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sato.listadeiviniapp.model.TempImage;
import com.sato.listadeiviniapp.repository.ImageRepository;

@Service
public class ImageService {

	@Autowired ImageRepository imageRepo;
	
	public void createImage(String imageString) {
		byte[] imageBytes = Base64.getDecoder().decode(imageString);
		TempImage image = new TempImage();
		image.setImage(imageBytes);
//		image.setImageString(imageString);
		if(imageString.startsWith("/9j")) {
			image.setType("jpeg");
		} else if(imageString.startsWith("/9g")) {
			image.setType("jpg");
		} else if(imageString.startsWith("iVBORw0KGgo")) {
			image.setType("png");
		}
		imageRepo.save(image);
	}
	
	public void deleteImage() {
		imageRepo.deleteAll();
	}
	
	public TempImage getImage() {
		List<TempImage> list = imageRepo.findAll();
		
		if(list.isEmpty()) { // to prevent exception
			return null;
		}
		return list.get(0);//.getImageString();
	}
	
	public byte[] getImageByte() {
		List<TempImage> list = imageRepo.findAll();
		
		if(list.isEmpty()) { // to prevent exception
			return null;
		}
		TempImage image = list.get(0);
		return image.getImage();
	}
	
	public List<TempImage> getAllImage() {
		return imageRepo.findAll();
	}
	
}
