package com.example.organifyBackend.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.organifyBackend.model.*;

public interface DonorRepository extends JpaRepository<Donor, Long>{

}
