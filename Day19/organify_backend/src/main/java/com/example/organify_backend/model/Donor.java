package com.example.organify_backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="donorrtable")
public class Donor {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY) 
	private long donorId;
	
	@Column(name="donor_Name")
    private String donorName;
	
	
	@Column(name="organ_Type")
    private String organType;
	
	@Column(name="contact_Info")
	private long contactInfo;	
	
	@Column(name="emailId")
    private String emailId;
	
	
	@Column(name="willingToBe_LivingDonor")
    private boolean willingToBeLivingDonor;
	
	@Column(name="health_Conditions")
    private String healthConditions;
	
	
	@Column(name="blood_Type")
    private String bloodType;
	
	@Column(name="addition_Comments")
    private String additionalComments;
	
	 
	public Donor() {
		super();
	}


	public Donor(long donorId, String donorName, String emailId, int age, String bloodGroup, long phoneNo){
	}

	

	public long getDonorId() {
		return donorId;
	}


	public void setDonorId(long donorId) {
		this.donorId = donorId;
	}


	public String getHealthConditions() {
		return healthConditions;
	}


	public void setHealthConditions(String healthConditions) {
		this.healthConditions = healthConditions;
	}


	public String getDonorName() {
		return donorName;
	}


	public void setDonorName(String donorName) {
		this.donorName = donorName;
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


	public boolean isWillingToBeLivingDonor() {
		return willingToBeLivingDonor;
	}


	public void setWillingToBeLivingDonor(boolean willingToBeLivingDonor) {
		this.willingToBeLivingDonor = willingToBeLivingDonor;
	}


	public String getBloodType() {
		return bloodType;
	}


	public void setBloodType(String bloodType) {
		this.bloodType = bloodType;
	}


	public String getAdditionalComments() {
		return additionalComments;
	}


	public void setAdditionalComments(String additionalComments) {
		this.additionalComments = additionalComments;
	}


	@Override
	public String toString() {
		return "Donor [donorName=" + donorName + ", organType=" + organType + ", contactInfo=" + contactInfo
				+ ", emailId=" + emailId + ", willingToBeLivingDonor=" + willingToBeLivingDonor + ", bloodType="
				+ bloodType + ", additionalComments=" + additionalComments + "]";
	}			
	
	

}
