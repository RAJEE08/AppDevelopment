package com.example.organify_backend.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.organify_backend.repository.*;
import com.example.organify_backend.model.*;
import com.example.organify_backend.service.*;


@RestController
public class DonorController {
	@Autowired
    private DonorService service;

	@PostMapping("/adddonationdetails")
    public String insert(@RequestBody Donor donor) {
        service.insertDonor(donor);
        return "Your records have been added";
    }

	@GetMapping("/getdonationDetails")
    public List<Donor> getAllDonors() {
        return (List<Donor>) service.getAllDonors();
    }

	 @PutMapping("/adddonationDetails/{id}")
	 public Donor updateDetails(@RequestBody Donor d, @PathVariable("id") long id) {
	        d.setDonorId(id); // Assuming you want to update by ID
	        return service.updateDonors(d);
	 }

	 @DeleteMapping("/deletebydonationId/{id}")
	 public String donorDeletebyId(@PathVariable("id") long donorId) {
	        service.deleteDonorById(donorId);
	        return "Your records have been deleted for the donor id:" + donorId + ".";
	 }

}



