"use client";
import { MCQQuestion, OptionKey } from "@/data/questions";
import { useState } from "react";

export default function QuestionCard({ question }: { question: MCQQuestion }) {
  const [selected, setSelected] = useState<OptionKey | null>(null);

  return (
    <div className="p-8 bg-[#3c413e] border-4 border-stone-dark shadow-[8px_8px_0px_#000] relative mb-10">
      <h3 className="text-2xl font-bold mb-6 text-idol uppercase tracking-widest italic leading-tight">
        {question.question}
      </h3>

      <div className="grid gap-4">
        {Object.entries(question.options).map(([key, text]) => {
          const isCorrect = key === question.correctOption;
          const isSelected = key === selected;
          
          let stateStyles = "bg-stone border-gray-500 text-[#e0d7c6]";
          if (selected) {
            if (isCorrect) stateStyles = "bg-green-800 border-green-400 text-white scale-[1.02] shadow-[0_0_15px_rgba(34,197,94,0.4)]";
            else if (isSelected) stateStyles = "bg-red-900 border-red-500 text-white opacity-90";
            else stateStyles = "bg-stone-dark border-transparent opacity-40";
          }

          return (
            <button
              key={key}
              disabled={!!selected}
              onClick={() => setSelected(key as OptionKey)}
              className={`p-4 border-2 text-left transition-all stone-btn shadow-[4px_4px_0px_#000] ${stateStyles}`}
            >
              <span className="inline-block w-8 text-idol">{key}.</span> {text}
            </button>
          );
        })}
      </div>

      {selected && (
        <div className="mt-6 text-center font-black text-xl uppercase animate-pulse">
          {selected === question.correctOption ? "✨ Idol Recovered ✨" : "💀 The Monkeys Gained on You 💀"}
        </div>
      )}
    </div>
  );
}