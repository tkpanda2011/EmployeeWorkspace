package com.aurotech.common.model;


/**
 * 
 * @author TRIPATIKUMAR
 * This class intended to hold the error details in case of Failue . 
 */
public class ErrorVO extends AbstractDTO {
	
	public String errorCode;
	public String errorMsg;
	public String getErrorCode() {
		return errorCode;
	}
	public void setErrorCode(String errorCode) {
		this.errorCode = errorCode;
	}
	public String getErrorMsg() {
		return errorMsg;
	}
	public void setErrorMsg(String errorMsg) {
		this.errorMsg = errorMsg;
	}
	

}
