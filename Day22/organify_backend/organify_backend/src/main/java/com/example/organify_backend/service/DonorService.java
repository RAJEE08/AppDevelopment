package com.example.organify_backend.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.organify_backend.model.Donor;
import com.example.organify_backend.model.Recipient;
import com.example.organify_backend.repository.DonorRepository;
import com.example.organify_backend.repository.RecipientRepository;

@Service
public class DonorService {
	  @Autowired
	  DonorRepository dr;

	  public Donor insertDonor(Donor donor) {
	        return dr.save(donor);
	  }

	  public Iterable<Donor> getAllDonors() {
	        return dr.findAll();
	  }

	  public Donor updateDonors(Donor d) {
		  
	   Donor dd=dr.findById(d.getDonorId()).orElse(null);
	   dd.setDonorName(d.getDonorName());
	   dd.setOrganType(d.getOrganType());
	   dd.setContactInfo(d.getContactInfo());
	   dd.setEmailId(d.getEmailId());
	   dd.setWillingToBeLivingDonor(d.isWillingToBeLivingDonor());
	   dd.setHealthConditions(d.getHealthConditions());
	   dd.setBloodType(d.getBloodType());
	   dd.setAdditionalComments(d.getAdditionalComments());
		 	 
	   return dr.save(dd);
	       
	  }

	  public void deleteDonorById(long donorId) {
	        dr.deleteById(donorId);
	  }
}
