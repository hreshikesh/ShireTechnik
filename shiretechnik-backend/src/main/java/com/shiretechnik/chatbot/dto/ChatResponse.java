package com.shiretechnik.chatbot.dto;

import com.shiretechnik.chatbot.model.ActionButton;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class ChatResponse {

    private String answer;

    private ActionButton button;

}