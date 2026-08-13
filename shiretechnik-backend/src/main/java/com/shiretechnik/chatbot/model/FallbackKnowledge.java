package com.shiretechnik.chatbot.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FallbackKnowledge {

    private String message;

    private ActionButton button;

}