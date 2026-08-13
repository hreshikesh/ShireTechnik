package com.shiretechnik.auth.service;


import com.shiretechnik.auth.dto.AuthResponse;
import com.shiretechnik.auth.dto.LoginRequest;
import com.shiretechnik.auth.dto.RegisterRequest;
import com.shiretechnik.auth.dto.VerifyOtpRequest;
import com.shiretechnik.user.dto.UserResponse;

public interface AuthService {

    void login(LoginRequest request);

    AuthResponse verifyOtp(VerifyOtpRequest request);


    AuthResponse register(RegisterRequest request);

    UserResponse getCurrentUser();


}
