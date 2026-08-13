package com.shiretechnik.email.service;


import com.shiretechnik.contact.entity.ContactMessage;
import com.shiretechnik.meeting.entity.Meeting;

public interface EmailService {

    void sendOtp(String to, String otp);

    void sendContactInquiry(ContactMessage contact);
    void sendMeetingRequest(Meeting meeting);
    void sendMeetingConfirmation(Meeting meeting);

    void sendMeetingRejected(Meeting meeting);

    void sendMeetingCancellation(Meeting meeting);

    void sendMeetingCompleted(Meeting meeting);


}
