export default function TreasureNotFoundPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#120a02] via-[#1a0f04] to-black px-4 sm:px-6 md:px-10 py-10 text-yellow-100">
      <div className="relative w-full max-w-xl sm:max-w-2xl text-center">

        {/* Golden aura */}
        <div className="absolute -inset-10 sm:-inset-16 md:-inset-24 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300 opacity-40 blur-[90px] sm:blur-[120px] md:blur-[150px] -z-10" />

        {/* Artifact glyph */}
        <div className="mb-5 sm:mb-6 text-6xl sm:text-7xl md:text-8xl drop-shadow-[0_0_25px_rgba(255,200,80,0.8)]">
          🏺
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-[0.15em] sm:tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-100 drop-shadow-[0_4px_15px_rgba(255,215,100,0.6)]">
          TREASURE NOT FOUND
        </h1>

        {/* Divider */}
        <div className="my-6 sm:my-8 flex items-center justify-center text-amber-300">
          <span className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
          <span className="mx-3 sm:mx-4 text-base sm:text-xl">✦ ✦ ✦</span>
          <span className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        </div>

        {/* Lore text */}
        <p className="mx-auto max-w-prose px-1 sm:px-0 text-base sm:text-lg leading-relaxed text-yellow-100/90">
          Beyond these gilded halls lies only silence. The gold whispers, but grants
          nothing to those who stray from the sacred path.
        </p>

        <p className="mt-3 sm:mt-4 text-xs sm:text-sm italic text-amber-200/70">
          Even the bravest explorers must sometimes turn back.
        </p>

        {/* Footer seal */}
        <div className="mt-10 sm:mt-14 text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.4em] text-amber-300/50">
          ❖ EL DORADO • CURSED & ETERNAL ❖
        </div>
      </div>
    </main>
  );
}
