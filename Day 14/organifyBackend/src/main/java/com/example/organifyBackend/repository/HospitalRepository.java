package com.example.organifyBackend.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.example.organifyBackend.model.Hospital;

public interface HospitalRepository  extends JpaRepository<Hospital, Long>{

}
