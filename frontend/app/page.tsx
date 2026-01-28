import Link from "next/link";
import { questionSets } from "@/data/questions";

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-6xl font-black mb-12 text-center text-[#ffd700] drop-shadow-[0_5px_5px_rgba(0,0,0,1)] italic uppercase tracking-tighter">
        Temple Quiz Run
      </h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        {questionSets.map((set) => (
          <Link 
            key={set.setId} 
            href={`/set/${set.setId}`}
            className="group relative p-1 bg-[#ffd700] hover:bg-white transition-colors"
          >
            <div className="bg-[#1a2421] p-6 border-2 border-[#ffd700]/30 group-hover:border-white">
              <h2 className="text-2xl font-bold text-[#ffd700] mb-2 uppercase tracking-widest">
                {set.title}
              </h2>
              <p className="text-green-500 font-bold text-sm">
                GO THE DISTANCE: {set.questions.length} STEPS
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}