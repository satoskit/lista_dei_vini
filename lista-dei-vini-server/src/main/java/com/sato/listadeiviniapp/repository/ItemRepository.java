package com.sato.listadeiviniapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

import com.sato.listadeiviniapp.model.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {
	
//	@Query(value="SELECT id, name, grade, type, year, country, winery, grape, image_type, created_at" 
//			+ " FROM item WHERE id = :id", nativeQuery=true)
//	Item findByIdWithoutPicture(@Param("id") Long id);
	
	@Query(value="SELECT image_byte FROM item WHERE id = :id", nativeQuery=true)
	byte[] findImageByteById(@Param("id") Long id);
	
	@Query(value="SELECT image_type FROM item WHERE id = :id", nativeQuery=true)
	String findImageTypeById(@Param("id") Long id);
	
	List<Item> findAllByGrade(int grade);
	List<Item> findAllByCountry(String country);
	List<Item> findAllByType(String type);
	List<Item> findAllByGrape(String type);
	List<Item> findAllByYear(int year);
	List<Item> findAllByWinery(String winery);
	
}
