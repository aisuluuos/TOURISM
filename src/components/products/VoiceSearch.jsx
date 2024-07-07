import React, { useState } from "react";
import { IconButton } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";

const VoiceSearch = ({ onResult }) => {
  // слушает ли сейчас голос
  const [isListening, setIsListening] = useState(false);

  const handleVoiceSearch = () => {
    setIsListening(true); // начал слушать
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition; // проверка на то что работает

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition(); // распознавания речи
      recognition.lang = "en-US";
      recognition.start();

      // когда голос распознан
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript; // то что сказал
        onResult(transcript); // передаёт текст в поиск.
        setIsListening(false); // прекращает слушать
      };

      // если всё пошло неправильно
      recognition.onerror = (event) => {
        console.error("Ошибка в распознавании", event.error); // показ ошибки
        setIsListening(false); // прекращает слушать
      };

      // когда закончил слушать
      recognition.onend = () => {
        setIsListening(false); // прекращает слушать
      };
    } else {
      alert("Твой браузер не шарит за распознавание речи.");
    }
  };

  return (
    <IconButton
      onClick={handleVoiceSearch}
      color={isListening ? "secondary" : "default"}
    >
      <MicIcon fontSize="small" />
    </IconButton>
  );
};

export default VoiceSearch;
