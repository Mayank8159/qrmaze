"use client";
import { MCQQuestion, OptionKey } from "@/data/questions";
import { useState } from "react";

interface Props {
  question: MCQQuestion;
  onCorrect: () => void; // New prop to notify parent
}

export default function QuestionCard({ question, onCorrect }: Props) {
  const [selected, setSelected] = useState<OptionKey | null>(null);

  const handleSelect = (key: OptionKey) => {
    setSelected(key);
    if (key === question.correctOption) {
      onCorrect();
    }
  };

  return (
    <div className="p-8 bg-[#3c413e] border-4 border-[#2a2e2c] shadow-[8px_8px_0px_#000] relative mb-10">
      <h3 className="text-2xl font-bold mb-6 text-[#ffd700] uppercase tracking-widest italic">
        {question.question}
      </h3>

      <div className="grid gap-4">
        {Object.entries(question.options).map(([key, text]) => {
          const isCorrect = key === question.correctOption;
          const isSelected = key === selected;
          
          let stateStyles = "bg-[#4a4e4d] border-[#5d6361] text-[#e0d7c6]";
          if (selected) {
            if (isCorrect) stateStyles = "bg-green-800 border-green-400 text-white shadow-[0_0_15px_rgba(34,197,94,0.5)]";
            else if (isSelected) stateStyles = "bg-red-900 border-red-500 text-white";
            else stateStyles = "bg-[#2a2e2c] opacity-40";
          }

          return (
            <button
              key={key}
              disabled={!!selected}
              onClick={() => handleSelect(key as OptionKey)}
              className={`p-4 border-2 text-left transition-all shadow-[4px_4px_0px_#000] font-bold uppercase ${stateStyles}`}
            >
              {key}. {text}
            </button>
          );
        })}
      </div>
    </div>
  );
}