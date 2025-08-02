"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import posthog from "posthog-js";

function Pixel() {
  const colors = [
    { name: "Red", class: "bg-red-600" },
    { name: "Blue", class: "bg-blue-600" },
    { name: "Green", class: "bg-green-600" },
    { name: "Yellow", class: "bg-yellow-400" },
    { name: "White", class: "bg-white" },
    { name: "Black", class: "bg-black" },
  ];

  const [currentColorIndex, setCurrentColorIndex] = useState(-1);
  const [previousColorIndex, setPreviousColorIndex] = useState(-1);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [testStarted, setTestStarted] = useState(false);

  const enterFullScreen = () => {
    const elem = document.documentElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if ((elem as any).webkitRequestFullscreen) {
      (elem as any).webkitRequestFullscreen();
    } else if ((elem as any).msRequestFullscreen) {
      (elem as any).msRequestFullscreen();
    }

    setIsFullScreen(true);
  };

  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {
        if ((document as any).webkitExitFullscreen) {
          (document as any).webkitExitFullscreen();
        } else if ((document as any).msExitFullscreen) {
          (document as any).msExitFullscreen();
        }
      });
    }

    setIsFullScreen(false);
  };

  const startTest = () => {
    setTestStarted(true);
    setCurrentColorIndex(0);
    setPreviousColorIndex(-1);
    if (!isFullScreen) {
      enterFullScreen();
    }
    posthog.capture("pixel_test_started");
  };

  const handleLeftClick = () => {
    if (!testStarted) return;

    setPreviousColorIndex(currentColorIndex);
    const nextIndex = (currentColorIndex + 1) % colors.length;
    setCurrentColorIndex(nextIndex);
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    if (!testStarted || previousColorIndex === -1) return;

    setCurrentColorIndex(previousColorIndex);
    setPreviousColorIndex(-1);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && testStarted) {
        setTestStarted(false);
        exitFullScreen();
      } else if (e.key === "f" && testStarted) {
        isFullScreen ? exitFullScreen() : enterFullScreen();
      } else if (e.key === "ArrowRight" && testStarted) {
        handleLeftClick();
      } else if (e.key === "ArrowLeft" && testStarted) {
        handleRightClick(new MouseEvent("contextmenu"));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [testStarted, isFullScreen, currentColorIndex, previousColorIndex]);

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(
        document.fullscreenElement ||
          (document as any).webkitFullscreenElement ||
          (document as any).msFullscreenElement
      );
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
    document.addEventListener("msfullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullScreenChange
      );
    };
  }, []);

  useEffect(() => {
    if (!isFullScreen && testStarted) {
      setTestStarted(false);
    }
  }, [isFullScreen]);

  return (
    <>
      {!testStarted ? (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6">
          <h1 className="text-2xl font-bold">Monitor Pixel Tester</h1>
          <p className="text-center max-w-md">
            Test your monitor by cycling through various colors to check for
            dead pixels or color issues.
          </p>
          <div className="flex gap-2">
            <Button onClick={startTest} className="px-6">
              Start Pixel Test
            </Button>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p>
              <strong>Controls:</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>Left Click: Next color</li>
              <li>Right Click: Previous color</li>
              <li>ESC: Exit test</li>
              <li>F: Toggle fullscreen</li>
            </ul>
          </div>
        </div>
      ) : (
        <div
          className={`w-full h-screen flex items-center justify-center ${
            currentColorIndex >= 0 ? colors[currentColorIndex].class : ""
          }`}
          onClick={handleLeftClick}
          onContextMenu={handleRightClick}
        >
          <div className="absolute top-4 left-4 text-lg bg-black bg-opacity-25 text-white p-2 rounded">
            {currentColorIndex >= 0 ? colors[currentColorIndex].name : ""}
          </div>
          <p className="absolute bottom-4 text-center w-full bg-black bg-opacity-25 text-white p-2">
            Left Click: Next | Right Click: Previous | ESC: Exit | F: Toggle
            Fullscreen
          </p>
        </div>
      )}
    </>
  );
}

export default Pixel;
