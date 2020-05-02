package com.sato.listadeiviniapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Item extends DateAudit {
	/**
	 * 
	 */
	private static final long serialVersionUID = 6339678913347836248L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String name;
	@Column
	private Integer grade;
	@Column
	private String type;
	@Column
	private Integer year;
	@Column
	private String country;
	@Column
	private String winery;
	@Column
	private String grape;
	@Column
	private byte[] imageByte;
	@Column
	private String imageType;
	
	public Item() {
		
	}
	
	// for JUnit test
	public Item(String name) {
		this.name = name;	
	}
	public Item(String name, String country) {
		this(name);
		this.country = country;
	}
	public Item(String name, Integer grade) {
		this(name);
		this.grade = grade;
	}
	
	public Item(String name, Integer grade, String type, Integer year, String country, String winery, String grape) {
		this.name = name;
		this.grade = grade;
		this.type = type;
		this.year = year;
		this.country = country;
		this.winery = winery;
		this.grape = grape;
	}
	
	public Item(Integer year) {
		super();
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getGrade() {
		return grade;
	}
	public void setGrade(Integer grade) {
		this.grade = grade;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Integer getYear() {
		return year;
	}
	public void setYear(Integer year) {
		this.year = year;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getWinery() {
		return winery;
	}
	public void setWinery(String winery) {
		this.winery = winery;
	}
	public String getGrape() {
		return grape;
	}
	public void setGrape(String grape) {
		this.grape = grape;
	}

	public byte[] getImageByte() {
		return imageByte;
	}
	public void setImageByte(byte[] imageByte) {
		this.imageByte = imageByte;
	}

	public String getImageType() {
		return imageType;
	}
	public void setImageType(String imageType) {
		this.imageType = imageType;
	}

	@Override
	public String toString() {
		return "Grade: " + grade + " || " + name + " | " + type + " | " + country; 
	}

}
