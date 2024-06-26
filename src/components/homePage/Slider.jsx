import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import videoIceland from "./assets/videoIceland.mp4";
import videoKyrgyzstan from "./assets/videoKyrgyzstan.mp4";
import videoJapan from "./assets/videoJapan.mp4";

const videos = [videoIceland, videoKyrgyzstan, videoJapan];
const countries = ["Iceland", "Kyrgyzstan", "Japan"];

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "10rem",
      fontWeight: "bold",
    },
  },
});

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef(videos.map(() => React.createRef()));

  const handleCountryChange = (index) => {
    setActiveIndex(index);
  };

  const playVideo = (index) => {
    videoRefs.current.forEach((ref, i) => {
      const video = ref.current;
      if (video) {
        i === index ? video.play() : video.pause();
        video.currentTime = i === index ? 0 : video.currentTime;
      }
    });
  };

  useEffect(() => {
    playVideo(activeIndex);
  }, [activeIndex]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        style={{
          position: "relative",
          width: "100%",
          height: "calc(100vh - 64px)",
        }}
      >
        {videos.map((video, index) => (
          <video
            key={index}
            ref={videoRefs.current[index]}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              opacity: index === activeIndex ? 1 : 0,
            }}
            src={video}
            autoPlay={false}
            loop
            muted
          />
        ))}
        <Box
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        />
        <Box
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            zIndex: 1,
          }}
        >
          <Typography variant="h1">Welcome</Typography>
        </Box>
        <Box
          style={{
            position: "absolute",
            bottom: "20px",
            left: 0,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            zIndex: 2,
          }}
        >
          {countries.map((country, index) => (
            <Button
              key={index}
              style={{
                color: "white",
                border: "none",
                padding: "8px 16px",
                cursor: "pointer",
                borderRadius: "5px",
                fontSize: "1rem",
                fontWeight: "bold",
                outline: "none",
                margin: "0 10px",
                transition: "background 0.3s ease-in-out",
              }}
              onClick={() => handleCountryChange(index)}
            >
              {country}
            </Button>
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Slider;
