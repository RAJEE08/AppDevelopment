package com.example.organify_backend.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.organify_backend.model.Donor;
import com.example.organify_backend.model.Recipient;
import com.example.organify_backend.repository.DonorRepository;
import com.example.organify_backend.repository.RecipientRepository;

@Service
public class RecipientService {

	@Autowired
	  RecipientRepository rr;

	  public Recipient insertRecipient(Recipient recipient) {
	        return rr.save(recipient);
	  }

	  public Iterable<Recipient> getAllRecipients() {
	        return rr.findAll();
	  }

	  public Recipient updateRecipients(Recipient r) {
		  
	   Recipient re=rr.findById(r.getRecipientId()).orElse(null);
	   re.setRecipientName(r.getRecipientName());
	   re.setOrganType(r.getOrganType());
	   re.setContactInfo(r.getContactInfo());
	   re.setEmailId(r.getEmailId());
	   re.setBloodType(r.getBloodType());
		 	 
	   return rr.save(re);
	       
	  }

	  public void deleteRecipientById(long recipientId) {
	        rr.deleteById(recipientId);
	  }
}
