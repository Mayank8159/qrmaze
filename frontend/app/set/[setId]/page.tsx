"use client";
import { useState, use, useEffect } from "react";
import { questionSets } from "@/data/questions";
import QuestionCard from "@/components/QuestionCard";
import axios from "axios";

export default function SetPage({ params }: { params: any }) {
  const unwrappedParams: any = use(params);
  const set = questionSets.find((s) => s.setId === parseInt(unwrappedParams.setId));
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTime] = useState(Date.now()); // Record when the user starts
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!set) return <div className="text-white p-10 font-black text-center">SET NOT FOUND</div>;

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === set.questions.length - 1;

  const handleFinish = async () => {
    setIsSubmitting(true);
    const endTime = Date.now();
    const timeTakenSeconds = Math.floor((endTime - startTime) / 1000);

    const payload = {
      setId: set.setId,
      title: set.title,
      timeTaken: timeTakenSeconds,
      completedAt: new Date().toISOString(),
      // You can add logic here to pass actual scores from QuestionCard if needed
    };

    try {
      // Replace with your actual backend endpoint
      await axios.post("http://localhost:5000/api/quiz-results", payload);
      alert(`Run Complete! Time: ${timeTakenSeconds}s. Results sent to the temple elders.`);
      window.location.href = "/"; // Redirect home after success
    } catch (error) {
      console.error("Failed to send results:", error);
      alert("The monkeys blocked your transmission! (Backend error)");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 min-h-screen bg-[#1a2421] text-[#e0d7c6] flex flex-col justify-center">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-black text-[#ffd700] italic uppercase drop-shadow-[4px_4px_0px_#000]">
          {set.title}
        </h1>
        
        {/* Progress Bar */}
        <div className="mt-6 h-4 w-full bg-[#2a2e2c] border-2 border-black rounded-none overflow-hidden">
            <div 
              className="h-full bg-[#ffd700] transition-all duration-500 shadow-[0_0_15px_#ffd700]"
              style={{ width: `${((currentIndex + 1) / set.questions.length) * 100}%` }}
            ></div>
        </div>
        <p className="text-[#ffd700] font-bold mt-2 tracking-widest text-sm">
            STAGE {currentIndex + 1} / {set.questions.length}
        </p>
      </header>

      <QuestionCard key={set.questions[currentIndex].id} question={set.questions[currentIndex]} />

      <div className="flex justify-between mt-10">
        <button
          onClick={() => setCurrentIndex(prev => prev - 1)}
          disabled={isFirst || isSubmitting}
          className={`px-8 py-3 font-bold border-2 border-black shadow-[4px_4px_0px_#000] uppercase transition-all ${
            isFirst || isSubmitting ? 'opacity-20 cursor-not-allowed' : 'bg-[#4a4e4d] hover:bg-[#5d6361] active:translate-y-1 active:shadow-none text-white'
          }`}
        >
          Prev
        </button>

        <button
          onClick={() => isLast ? handleFinish() : setCurrentIndex(prev => prev + 1)}
          disabled={isSubmitting}
          className={`px-8 py-3 bg-[#ffd700] text-black font-extrabold border-2 border-black shadow-[4px_4px_0px_#000] uppercase transition-all ${
            isSubmitting ? 'opacity-50 animate-pulse' : 'hover:bg-white active:translate-y-1 active:shadow-none'
          }`}
        >
          {isSubmitting ? "Sending..." : isLast ? "Claim Idol" : "Next"}
        </button>
      </div>
    </div>
  );
}