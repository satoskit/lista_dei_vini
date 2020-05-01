package com.sato.listadeiviniapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sato.listadeiviniapp.model.TempImage;

public interface ImageRepository extends JpaRepository<TempImage, Long>{

}
