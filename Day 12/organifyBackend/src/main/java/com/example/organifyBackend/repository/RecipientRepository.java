package com.example.organifyBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.organifyBackend.model.Recipient;

public interface RecipientRepository extends JpaRepository<Recipient, Long> {

}
