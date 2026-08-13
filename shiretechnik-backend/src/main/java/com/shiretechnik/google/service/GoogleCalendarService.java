package com.shiretechnik.google.service;

import com.shiretechnik.meeting.entity.Meeting;



public interface GoogleCalendarService {

    Meeting createMeeting(Meeting meeting) throws Exception;

    void deleteMeeting(Meeting meeting) throws Exception;

}