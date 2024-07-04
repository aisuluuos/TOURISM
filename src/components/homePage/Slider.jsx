import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import videoIceland from "./assets/videoIceland.mp4";
import videoKyrgyzstan from "./assets/videoKyrgyzstan.mp4";
import videoJapan from "./assets/videoJapan.mp4";

const videos = [videoIceland, videoKyrgyzstan, videoJapan];
const countries = ["Iceland", "Kyrgyzstan", "Japan"];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef([]);

  const handleCountryChange = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (video) {
        i === activeIndex ? video.play() : video.pause();
      }
    });
  }, [activeIndex]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "calc(100vh - 78px)",
        overflow: "hidden",
      }}
    >
      {videos.map((video, index) => (
        <video
          key={index}
          ref={(el) => (videoRefs.current[index] = el)}
          src={video}
          autoPlay={false}
          loop
          muted
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            opacity: index === activeIndex ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        />
      ))}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Circular Std, sans-serif",
            fontSize: "6rem",
            fontWeight: "bold",
            color: "white",
            textTransform: "uppercase",
            mb: 2,
            textShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
          }}
        >
          Welcome
        </Typography>
      </Box>
      <Box
        sx={{
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
            onClick={() => handleCountryChange(index)}
            sx={{
              color: "white",
              border: "none",
              padding: "8px 16px",
              cursor: "pointer",
              borderRadius: "5px",
              fontSize: "1rem",
              fontWeight: "bold",
              mx: 1,
              transition: "background 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
          >
            {country}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Slider;
