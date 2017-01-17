package com.aurotech.common.model;

/**
 * 
 * @author TRIPATIKUMAR
 * This Class is used as a response object for any Request. 
 */
public class ModuleObejct extends AbstractDTO {

	
	private MemberVO member;
	private ErrorVO error;
	
	
	public MemberVO getMember() {
		return member;
	}
	public void setMember(MemberVO member) {
		this.member = member;
	}
	public ErrorVO getError() {
		return error;
	}
	public void setError(ErrorVO error) {
		this.error = error;
	}
	
	

	
}
