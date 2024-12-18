"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "./Button";
import va from "@vercel/analytics";

const CompletionModal = ({ score, totalQuestions, onClose, isTimeout }) => {
  const router = useRouter();

  useEffect(() => {
    if (isTimeout) {
      va.track("Quiz Timeout", { score, totalQuestions });
    } else {
      va.track("Quiz Completed", { score, totalQuestions });
    }
  }, [isTimeout, score, totalQuestions]);

  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div className="bg-neutral-600 p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">
          {isTimeout ? "⏱️ Time's Up!" : "👏 Well done!"}
        </h2>
        <p className="text-xl mb-6 text-white">
          {isTimeout ? "You've run out of time!" : "You've completed the quiz!"}
        </p>
        <p className="text-lg mb-8 text-white">
          Your score: <span className="font-bold">{score}</span> /{" "}
          <span className="font-bold">{totalQuestions}</span>{" "}
          <span className="font-bold">({percentage}%)</span>
        </p>
        <Button
          onClick={() => {
            onClose();
            router.push("/");
          }}
          colour="gray"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Close
        </Button>
      </div>
    </div>
  );
};

export default CompletionModal;
