package com.aurotech.common.model;

/**
 * 
 * @author TRIPATIKUMAR
 * This class is used during login and sign up. 
 *
 */
public class MemberVO extends AbstractDTO {
	
	private String username;
	private String password;
	private String emailId;
	private Employee employee;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public Employee getEmployee() {
		return employee;
	}
	public void setEmployee(Employee employee) {
		this.employee = employee;
	}
	
	
	

}
