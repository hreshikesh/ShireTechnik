package com.shiretechnik.meeting.service;


import com.shiretechnik.meeting.dto.AvailableSlotResponse;
import com.shiretechnik.meeting.dto.MeetingRequest;
import com.shiretechnik.meeting.dto.MeetingResponse;
import com.shiretechnik.meeting.dto.UpdateMeetingStatusRequest;
import com.shiretechnik.meeting.entity.MeetingStatus;
import org.springframework.data.domain.Page;

import java.time.LocalDate;
import java.util.List;

public interface MeetingService {

    MeetingResponse bookMeeting(
            MeetingRequest request
    );

    MeetingResponse getById(
            Long id
    );

    Page<MeetingResponse> getAll(
            int page,
            int size,
            String sortBy,
            String direction
    );

    Page<MeetingResponse> getByStatus(
            MeetingStatus status,
            int page,
            int size
    );

    MeetingResponse updateStatus(
            Long id,
            UpdateMeetingStatusRequest request
    );

    void delete(
            Long id
    );

    List<AvailableSlotResponse> getAvailableSlots(LocalDate date);

}