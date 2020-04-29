package com.sato.listadeiviniapp.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.INTERNAL_SERVER_ERROR, reason="No Such Product Found")
public class NoItemFoundException extends RuntimeException {

	public NoItemFoundException(String string) {
		super(string);
	}
}
