// src/app/components/Stopwatch.tsx
"use client";

import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0); // Holds elapsed time in ms
  const [running, setRunning] = useState(false); // Indicates if stopwatch is active

  useEffect(() => {
    if (running) {
      const timer = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
      return () => clearInterval(timer);
    }
  }, [running]);

  // Toggles stopwatch between running and paused
  const toggleRunning = () => setRunning((prevRunning) => !prevRunning);

  // Resets the stopwatch to zero and pauses it
  const resetTime = () => {
    setTime(0);
    setRunning(false);
  };

  // Converts time to "MM:SS:MS" format
  const formatTime = (time: number) => {
    const milliseconds = `0${Math.floor((time % 1000) / 10)}`.slice(-2);
    const seconds = `0${Math.floor(time / 1000) % 60}`.slice(-2);
    const minutes = `0${Math.floor(time / 60000)}`.slice(-2);
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div className="flex flex-col items-center p-10 bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg shadow-lg">
      <h1 className="text-4xl text-emerald-200 mb-6 font-semibold">Stopwatch</h1>
      <p className="text-7xl text-lime-100 mx-10 mb-6 w-[300px] text-center">{formatTime(time)}</p>
      <div className="flex space-x-4">
        <button
          onClick={toggleRunning}
          className={`px-6 py-2 text-white font-semibold rounded-lg transition transform hover:scale-105 ${
            running ? "bg-rose-600" : "bg-emerald-500"
          }`}
        >
          {running ? "Stop" : "Start"}
        </button>
        <button
          onClick={resetTime}
          className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-lg transition transform hover:scale-105"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
