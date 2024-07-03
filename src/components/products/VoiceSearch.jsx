import React, { useState } from "react";
import { IconButton } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";

// Компонент, который ловит голос и делает поиск
const VoiceSearch = ({ onResult }) => {
  // Запоминаем, слушаем ли мы сейчас голос
  const [isListening, setIsListening] = useState(false);

  // Чё делать, когда жмём на кнопку
  const handleVoiceSearch = () => {
    setIsListening(true); // Говорим, что начали слушать
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition; // Браузер поддерживает голос? Проверь!

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition(); // Создаем штуку для распознавания речи
      recognition.lang = "en-US"; // Слушаем на английском
      recognition.start(); // Поехали!

      // Что делать, когда голос распознан
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript; // Берем то, что человек сказал
        onResult(transcript); // Передаем текст туда, где будем его использовать
        setIsListening(false); // Хватит слушать
      };

      // Если что-то пошло не так
      recognition.onerror = (event) => {
        console.error("Ошибка в распознавании", event.error); // Показываем ошибку в консоли
        setIsListening(false); // Перестаем слушать
      };

      // Когда закончили слушать
      recognition.onend = () => {
        setIsListening(false); // Заканчиваем прослушивание
      };
    } else {
      // Если браузер не может слушать
      alert("Твой браузер не шарит за распознавание речи."); // Сообщаем об этом
    }
  };

  return (
    // Кнопка с микрофоном, которая запускает прослушивание
    <IconButton
      onClick={handleVoiceSearch} // Когда жмешь на кнопку, слушаем голос
      color={isListening ? "secondary" : "default"} // Если слушаем, кнопка другого цвета
    >
      <MicIcon fontSize="small" /> {/* Иконка микрофона */}
    </IconButton>
  );
};

export default VoiceSearch;
