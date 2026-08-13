package com.shiretechnik.google.repository;

import com.shiretechnik.google.entity.GoogleToken;
import org.springframework.data.jpa.repository.JpaRepository;


public interface GoogleTokenRepository
        extends JpaRepository<GoogleToken,Long> {


    GoogleToken findFirstByOrderByIdAsc();

}
