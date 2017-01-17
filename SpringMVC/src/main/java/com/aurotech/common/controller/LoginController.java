package com.aurotech.common.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.aurotech.common.model.MemberVO;
import com.aurotech.common.model.ModuleObejct;

@Controller
@RequestMapping
public class LoginController {
	@RequestMapping(value="/validate", method = RequestMethod.POST)
	public @ResponseBody ModuleObejct validateMember( @RequestBody MemberVO member ) {
		
	// Call the Dao Method and validate 
	//On success return ModuleObejct with MemberVO containing Employee object 
	//On Failure  return ModuleObejct with ErrorVO
	return null;
	}
	
	
	@RequestMapping(value="/create", method = RequestMethod.POST)
	public @ResponseBody ModuleObejct createMember( @RequestBody MemberVO member ) {
		
	// Call the persit Method to store the Record // Use JPA annotations to persist 
	//On success return ModuleObejct with MemberVO 
	//On Failure  return ModuleObejct with ErrorVO
	return null;
	}

}
