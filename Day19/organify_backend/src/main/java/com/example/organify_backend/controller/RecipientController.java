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
public class RecipientController {
	@Autowired
    private RecipientService service;

	@PostMapping("/addrecipientdetails")
    public String insertRecipients(@RequestBody Recipient recipient) {
        service.insertRecipient(recipient);
        return "Your records have been added";
    }

	@GetMapping("/getrecipientDetails")
    public List<Recipient> getAllRecipients() {
        return (List<Recipient>) service.getAllRecipients();
    }

	 @PutMapping("/addrecipientDetails/{id}")
	 public Recipient updateRecipientDetails(@RequestBody Recipient r, @PathVariable("id") long id) {
	        r.setRecipientId(id); // Assuming you want to update by ID
	        return service.updateRecipients(r);
	 }

	 @DeleteMapping("/deletebyrecipientId/{id}")
	 public String recipientDeletebyId(@PathVariable("id") long recipientId) {
	        service.deleteRecipientById(recipientId);
	        return "Your records have been deleted for the recipient id:" + recipientId + ".";
	 }

}
