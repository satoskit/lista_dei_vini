package com.sato.listadeiviniapp.model;

import java.sql.Timestamp;
import java.time.Instant;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ItemJson {
	
	@JsonProperty("id")
	private Long id;
	@JsonProperty("name")
	private String name;
	@JsonProperty("grade")
	private Integer grade;
	@JsonProperty("type")
	private String type;
	@JsonProperty("year")
	private Integer year;
	@JsonProperty("country")
	private String country;
	@JsonProperty("winery")
	private String winery;
	@JsonProperty("grape")
	private String grape;
	@JsonProperty("image")
	private String image;
	@JsonProperty("created_at")
	private Timestamp created_at;
	
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
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public Timestamp getCreated_at() {
		return created_at;
	}
	public void setCreated_at(Instant created_at) {
		this.created_at = Timestamp.from(created_at);
	}
	
}
