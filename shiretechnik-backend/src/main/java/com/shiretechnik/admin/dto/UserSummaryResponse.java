package com.shiretechnik.admin.dto;

import com.shiretechnik.user.entity.UserRole;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserSummaryResponse {

    private Long id;

    private String name;

    private String email;

    private String phone;

    private String company;

    private UserRole userRole;

    private LocalDateTime createdAt;

}