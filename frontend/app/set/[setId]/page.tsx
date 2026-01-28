"use client";
import { useState, use, useEffect } from "react";
import { questionSets } from "@/data/questions";
import QuestionCard from "@/components/QuestionCard";
import axios from "axios";

export default function SetPage({ params }: { params: any }) {
  const unwrappedParams: any = use(params);
  const set = questionSets.find((s) => s.setId === parseInt(unwrappedParams.setId));

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoggedIn && !isSubmitting) {
      interval = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isLoggedIn, startTime, isSubmitting]);

  if (!set) return <div className="text-white p-10 text-center font-black">SET NOT FOUND</div>;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "temple123") {
      setIsLoggedIn(true);
      setStartTime(Date.now());
    } else {
      alert("Wrong Incantation!");
    }
  };

  const handleFinish = async () => {
    setIsSubmitting(true);
    const payload = {
      name: userName,
      timeTaken: elapsedTime,
      correctAnswers: score,
      setNumber: set.setId,
      title: set.title
    };
    try {
      await axios.post("http://localhost:5000/api/quiz-results", payload);
      alert(`Idol Secured! ${userName}, Score: ${score}/7, Time: ${elapsedTime}s`);
      window.location.href = "/";
    } catch (error) {
      alert("Submission failed!");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#1a2421] p-4">
        <form onSubmit={handleLogin} className="bg-[#3c413e] p-8 border-4 border-[#ffd700] shadow-[10px_10px_0px_#000] w-full max-w-md">
          <h2 className="text-[#ffd700] text-3xl font-black italic uppercase mb-6 text-center tracking-tighter">Temple Login</h2>
          <div className="space-y-4">
            <input required placeholder="RUNNER NAME" className="w-full p-4 bg-[#1a2421] border-2 border-[#5d6361] text-[#ffd700] outline-none focus:border-[#ffd700]" onChange={(e) => setUserName(e.target.value)} />
            <input required type="password" placeholder="INCANTATION" className="w-full p-4 bg-[#1a2421] border-2 border-[#5d6361] text-[#ffd700] outline-none focus:border-[#ffd700]" onChange={(e) => setPassword(e.target.value)} />
            <button className="w-full py-4 bg-[#ffd700] text-black font-black uppercase shadow-[4px_4px_0px_#000] active:translate-y-1 active:shadow-none hover:bg-white transition-colors">Start the Run</button>
          </div>
        </form>
      </div>
    );
  }

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === set.questions.length - 1;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 min-h-screen bg-[#1a2421] text-[#e0d7c6] flex flex-col">
      {/* HUD Header */}
      <header className="mb-8 w-full">
        <div className="flex justify-between items-end mb-4">
          <div className="text-left">
            <p className="text-[#ffd700] text-xs font-black uppercase tracking-widest opacity-70">Current Runner</p>
            <h2 className="text-xl font-black text-white italic leading-none uppercase">{userName}</h2>
          </div>
          
          {/* Properly Positioned Timer Widget */}
          <div className="bg-[#2a2e2c] border-2 border-[#ffd700] px-4 py-2 flex items-center gap-3 shadow-[4px_4px_0px_#000]">
            <span className="text-[#ffd700] text-xs font-bold uppercase">Time</span>
            <span className="text-2xl font-black font-mono text-white leading-none min-w-[3ch] text-center">
              {elapsedTime}s
            </span>
          </div>
        </div>

        <h1 className="text-3xl font-black text-[#ffd700] italic uppercase text-center mb-6 drop-shadow-[3px_3px_0px_#000]">
          {set.title}
        </h1>
        
        {/* Progress Bar Container */}
        <div className="relative h-6 w-full bg-[#2a2e2c] border-2 border-black p-1">
          <div 
            className="h-full bg-gradient-to-r from-[#b8860b] to-[#ffd700] transition-all duration-500 relative" 
            style={{ width: `${((currentIndex + 1) / set.questions.length) * 100}%` }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
          </div>
          <p className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-black uppercase tracking-widest">
            Stage {currentIndex + 1} / {set.questions.length}
          </p>
        </div>
      </header>

      {/* Main Game Area */}
      <main className="flex-grow flex flex-col justify-center">
        <QuestionCard 
          key={set.questions[currentIndex].id} 
          question={set.questions[currentIndex]} 
          onCorrect={() => setScore(prev => prev + 1)}
        />
      </main>

      {/* Navigation Footer */}
      <footer className="mt-8 flex justify-between items-center gap-4">
        <button
          disabled={isFirst || isSubmitting}
          onClick={() => setCurrentIndex(prev => prev - 1)}
          className={`flex-1 py-4 font-black border-2 border-black shadow-[4px_4px_0px_#000] uppercase transition-all ${
            isFirst ? 'opacity-20 cursor-not-allowed' : 'bg-[#4a4e4d] hover:bg-[#5d6361] active:translate-y-1 active:shadow-none'
          }`}
        >
          Prev
        </button>

        <button
          disabled={isSubmitting}
          onClick={() => isLast ? handleFinish() : setCurrentIndex(prev => prev + 1)}
          className="flex-[2] py-4 bg-[#ffd700] text-black font-black border-2 border-black shadow-[6px_6px_0px_#000] uppercase active:translate-y-1 active:shadow-none hover:bg-white transition-all text-xl"
        >
          {isSubmitting ? "Submitting..." : isLast ? "Claim Gold Idol" : "Next Stage ▶"}
        </button>
      </footer>
    </div>
  );
}