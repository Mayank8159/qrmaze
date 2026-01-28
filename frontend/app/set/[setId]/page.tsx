"use client";
import { useState, use } from "react";
import { questionSets } from "@/data/questions";
import QuestionCard from "@/components/QuestionCard";
import axios from "axios";

export default function SetPage({ params }: { params: any }) {
  const unwrappedParams: any = use(params);
  const set = questionSets.find((s) => s.setId === parseInt(unwrappedParams.setId));

  // Game State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!set) return <div className="text-white p-10 font-black text-center">SET NOT FOUND</div>;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "temple123") { // Local password check
      setIsLoggedIn(true);
      setStartTime(Date.now());
    } else {
      alert("Wrong Incantation (Password)!");
    }
  };

  const handleFinish = async () => {
    setIsSubmitting(true);
    const timeTakenSeconds = Math.floor((Date.now() - startTime) / 1000);

    const payload = {
      name: userName,
      timeTaken: timeTakenSeconds,
      correctAnswers: score,
      setNumber: set.setId,
      title: set.title
    };

    try {
      await axios.post("http://localhost:5000/api/quiz-results", payload);
      alert(`Idol Secured! ${userName}, Score: ${score}/7, Time: ${timeTakenSeconds}s`);
      window.location.href = "/";
    } catch (error) {
      alert("Submission failed. The monkeys cut the wires!");
    } finally {
      setIsSubmitting(false);
    }
  };

  // 1. LOGIN SCREEN
  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#1a2421]">
        <form onSubmit={handleLogin} className="bg-[#3c413e] p-8 border-4 border-[#ffd700] shadow-[10px_10px_0px_#000] w-full max-w-md">
          <h2 className="text-[#ffd700] text-3xl font-black italic uppercase mb-6 text-center">Enter the Temple</h2>
          <div className="space-y-4">
            <input 
              required
              placeholder="YOUR NAME"
              className="w-full p-3 bg-[#1a2421] border-2 border-[#5d6361] text-[#ffd700] placeholder-gray-600 outline-none"
              onChange={(e) => setUserName(e.target.value)}
            />
            <input 
              required
              type="password"
              placeholder="PASSWORD"
              className="w-full p-3 bg-[#1a2421] border-2 border-[#5d6361] text-[#ffd700] placeholder-gray-600 outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-full py-4 bg-[#ffd700] text-black font-black uppercase shadow-[4px_4px_0px_#000] active:translate-y-1 active:shadow-none">
              Begin Run
            </button>
          </div>
        </form>
      </div>
    );
  }

  // 2. QUIZ SCREEN
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === set.questions.length - 1;

  return (
    <div className="max-w-3xl mx-auto p-6 min-h-screen bg-[#1a2421] text-[#e0d7c6] flex flex-col justify-center">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-black text-[#ffd700] italic uppercase drop-shadow-[4px_4px_0px_#000]">{set.title}</h1>
        <div className="mt-6 h-4 w-full bg-[#2a2e2c] border-2 border-black">
          <div className="h-full bg-[#ffd700] transition-all" style={{ width: `${((currentIndex + 1) / set.questions.length) * 100}%` }} />
        </div>
        <p className="text-[#ffd700] font-bold mt-2 uppercase tracking-tighter">Runner: {userName} | Stage {currentIndex + 1} / 7</p>
      </header>

      <QuestionCard 
        key={set.questions[currentIndex].id} 
        question={set.questions[currentIndex]} 
        onCorrect={() => setScore(prev => prev + 1)}
      />

      <div className="flex justify-between mt-10">
        <button
          disabled={isFirst || isSubmitting}
          onClick={() => setCurrentIndex(prev => prev - 1)}
          className={`px-8 py-3 font-bold border-2 border-black shadow-[4px_4px_0px_#000] uppercase ${isFirst ? 'opacity-20' : 'bg-[#4a4e4d] text-white active:translate-y-1'}`}
        >
          Prev
        </button>

        <button
          disabled={isSubmitting}
          onClick={() => isLast ? handleFinish() : setCurrentIndex(prev => prev + 1)}
          className="px-8 py-3 bg-[#ffd700] text-black font-extrabold border-2 border-black shadow-[4px_4px_0px_#000] uppercase active:translate-y-1"
        >
          {isSubmitting ? "Saving..." : isLast ? "Claim Idol" : "Next"}
        </button>
      </div>
    </div>
  );
}