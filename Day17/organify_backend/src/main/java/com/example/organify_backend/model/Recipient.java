package com.example.organify_backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="recipienttable")
public class Recipient {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY) 
	private long recipientId;
	
	@Column(name="recipient_Name")
    private String recipientName;
	
	
	@Column(name="organ_Type")
    private String organType;
	
	@Column(name="contact_Info")
	private long contactInfo;	
	
	@Column(name="emailId")
    private String emailId;
		
	
	@Column(name="blood_Type")
    private String bloodType;


	
	public Recipient() {
		super();
	}

	public Recipient(long recipientId, String recipientName, String organType, long contactInfo, String emailId,
			String bloodType) {
		super();
		this.recipientId = recipientId;
		this.recipientName = recipientName;
		this.organType = organType;
		this.contactInfo = contactInfo;
		this.emailId = emailId;
		this.bloodType = bloodType;
	}

	public long getRecipientId() {
		return recipientId;
	}

	public void setRecipientId(long recipientId) {
		this.recipientId = recipientId;
	}

	public String getRecipientName() {
		return recipientName;
	}

	public void setRecipientName(String recipientName) {
		this.recipientName = recipientName;
	}

	public String getOrganType() {
		return organType;
	}

	public void setOrganType(String organType) {
		this.organType = organType;
	}

	public long getContactInfo() {
		return contactInfo;
	}

	public void setContactInfo(long contactInfo) {
		this.contactInfo = contactInfo;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getBloodType() {
		return bloodType;
	}

	public void setBloodType(String bloodType) {
		this.bloodType = bloodType;
	}

	@Override
	public String toString() {
		return "Recipient [recipientId=" + recipientId + ", recipientName=" + recipientName + ", organType=" + organType
				+ ", contactInfo=" + contactInfo + ", emailId=" + emailId + ", bloodType=" + bloodType + "]";
	}
	
	
	
	

}
