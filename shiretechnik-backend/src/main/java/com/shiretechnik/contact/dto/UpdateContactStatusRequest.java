package com.shiretechnik.contact.dto;


import com.shiretechnik.contact.entity.ContactStatus;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateContactStatusRequest {

    @NotNull
    private ContactStatus status;

}