package com.shiretechnik.meeting.dto;


import com.shiretechnik.meeting.entity.MeetingStatus;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateMeetingStatusRequest {

    @NotNull
    private MeetingStatus status;

    private String adminRemarks;

}