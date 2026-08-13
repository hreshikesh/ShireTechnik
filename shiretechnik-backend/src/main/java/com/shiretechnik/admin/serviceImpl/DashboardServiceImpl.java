package com.shiretechnik.admin.serviceImpl;

import com.shiretechnik.admin.dto.DashboardResponse;
import com.shiretechnik.admin.service.DashboardService;
import com.shiretechnik.contact.entity.ContactStatus;
import com.shiretechnik.contact.repository.ContactRepository;
import com.shiretechnik.meeting.entity.MeetingStatus;
import com.shiretechnik.meeting.repository.MeetingRepository;
import com.shiretechnik.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DashboardServiceImpl implements DashboardService {

    private final UserRepository userRepository;

    private final MeetingRepository meetingRepository;

    private final ContactRepository contactRepository;

    @Override
    public DashboardResponse getDashboard() {

        return DashboardResponse.builder()

                .totalUsers(
                        userRepository.count()
                )

                .totalMeetings(
                        meetingRepository.count()
                )

                .pendingMeetings(
                        meetingRepository.countByStatus(
                                MeetingStatus.PENDING
                        )
                )

                .totalContacts(
                        contactRepository.count()
                )

                .newContacts(
                        contactRepository.countByStatus(
                                ContactStatus.NEW
                        )
                )

                .build();

    }

}