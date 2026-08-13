package com.shiretechnik.chatbot.controller;

import com.shiretechnik.chatbot.dto.ChatRequest;
import com.shiretechnik.chatbot.dto.ChatResponse;
import com.shiretechnik.chatbot.service.KnowledgeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/chatbot")
@RequiredArgsConstructor
public class ChatbotController {

    private final KnowledgeService knowledgeService;

    @PostMapping
    public ChatResponse chat(@RequestBody ChatRequest request) {

        return knowledgeService.ask(request.getMessage());

    }

}