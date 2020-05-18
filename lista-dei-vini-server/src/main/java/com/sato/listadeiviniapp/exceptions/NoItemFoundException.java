package com.sato.listadeiviniapp.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND, reason="No Item Found")
public class NoItemFoundException extends RuntimeException{
	
	public NoItemFoundException() {
		super();
	}
	
	public NoItemFoundException(String message, Throwable cause) {
		super(message, cause);
	}
	
	public NoItemFoundException(String message) {
		super(message);
	}
	
	public NoItemFoundException(Throwable cause) {
		super(cause);
	}

}
