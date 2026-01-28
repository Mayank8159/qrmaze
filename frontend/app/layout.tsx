import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden">
        <nav className="border-b-4 border-[#ffd700] bg-black/50 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-4xl mx-auto py-4 px-6 flex justify-between items-center">
            <span className="text-2xl font-black text-[#ffd700] italic">RUNNER_01</span>
            <div className="h-4 w-48 bg-gray-800 border border-gray-600 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 w-3/4 shadow-[0_0_10px_#22c55e]"></div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}