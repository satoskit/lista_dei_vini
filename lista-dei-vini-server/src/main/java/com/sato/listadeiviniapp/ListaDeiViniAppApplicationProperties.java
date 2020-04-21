package com.sato.listadeiviniapp;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties("app.systembolaget")
public class ListaDeiViniAppApplicationProperties {
	
	private final Api api = new Api();
	
	public Api getApi() {
		return this.api;
	}
	
	public static class Api {
//		@NotNull
		private String apiKey;
		
		public String getApiKey() {
			return this.apiKey;
		}
		public void setApiKey(String apiKey) {
			this.apiKey = apiKey;
		}
	}

}
