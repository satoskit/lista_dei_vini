package com.sato.listadeiviniapp.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;
import org.springframework.core.io.FileSystemResource;

@ConfigurationProperties(prefix="app")
public class DataSourceConfig {

	@Value("${postgresUrl}")
	private String url;
	@Value("${postgresUsername}")
	private String username;
	@Value("${postgresPassword}")
	private String password;
	
	public String getDataSourceUrl() {
		return url;
	}
	public void setDataSourceUrl(String dataSourceUrl) {
		this.url = dataSourceUrl;
	}
	public String getDataSourceUsername() {
		return username;
	}
	public void setDataSourceUsername(String dataSourceUsername) {
		this.username = dataSourceUsername;
	}
	public String getDataSourcePassword() {
		return password;
	}
	public void setDataSourcePassword(String dataSourcePassword) {
		this.password = dataSourcePassword;
	}

}
