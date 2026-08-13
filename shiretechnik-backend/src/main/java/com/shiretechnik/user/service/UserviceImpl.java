package com.shiretechnik.user.service;

import com.shiretechnik.exception.ResourceNotFoundException;
import com.shiretechnik.user.entity.User;
import com.shiretechnik.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserviceImpl implements UserService{
    private final UserRepository userRepository;
    @Override
    public User getCurrentUser() {
        Authentication authentication =
                SecurityContextHolder.getContext().getAuthentication();

        String email = authentication.getName();

        return userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new ResourceNotFoundException("User not found."));
    }
}
