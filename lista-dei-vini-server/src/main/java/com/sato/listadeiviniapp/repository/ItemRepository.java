package com.sato.listadeiviniapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sato.listadeiviniapp.model.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {
	
	List<Item> findAllByGrade(int grade);
	List<Item> findAllByCountry(String country);
	List<Item> findAllByType(String type);
	List<Item> findAllByGrape(String type);
	List<Item> findAllByYear(int year);
	List<Item> findAllByWinery(String winery);
	
}
