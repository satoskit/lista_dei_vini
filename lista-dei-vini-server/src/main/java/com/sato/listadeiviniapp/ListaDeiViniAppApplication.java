package com.sato.listadeiviniapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
@EnableConfigurationProperties(ListaDeiViniAppApplicationProperties.class)
public class ListaDeiViniAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(ListaDeiViniAppApplication.class, args);
	}

}
