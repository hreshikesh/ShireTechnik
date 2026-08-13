package com.shiretechnik.contact.repository;

import com.shiretechnik.contact.entity.ContactMessage;
import com.shiretechnik.contact.entity.ContactStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ContactRepository
        extends JpaRepository<ContactMessage, Long> {

    List<ContactMessage> findByStatus(ContactStatus status);

    long count();

    long countByStatus(ContactStatus status);

}