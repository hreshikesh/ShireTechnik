package com.shiretechnik.admin.dto;


import com.shiretechnik.user.entity.UserRole;
import jakarta.validation.constraints.NotNull;
import lombok.*;



@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UpdateUserRoleRequest {

    @NotNull
    private UserRole role;

}