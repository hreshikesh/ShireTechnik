package com.shiretechnik.security;


import com.shiretechnik.user.entity.User;

public interface JwtService {

    String generateToken(User user);

    String extractEmail(String token);

    boolean isTokenValid(String token);

}