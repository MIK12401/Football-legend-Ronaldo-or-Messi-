import Link from "next/link";
import { players } from "@/data/players";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e3c72] to-[#2a5298] flex items-center justify-center p-5 font-sans">
      <div className="text-center animate-[fadeIn_0.8s_ease-in]">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-5 drop-shadow-[3px_3px_6px_rgba(0,0,0,0.5)] animate-[slideDown_0.6s_ease]">
          ⚽ FOOTBALL LEGENDS ⚽
        </h1>
        <p className="text-gray-300 text-xl font-light mb-16">
          Choose Your Player to View Profile
        </p>

        <div className="flex justify-center gap-10 flex-wrap max-w-4xl mx-auto">
          {Object.values(players).map((player) => (
            <Link
              key={player.id}
              href={`/${player.id}`}
              className="w-80 h-80 rounded-3xl no-underline flex flex-col justify-center items-center text-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] relative overflow-hidden p-5 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)] group"
              style={{
                background: `linear-gradient(135deg, ${player.theme.primary} 0%, ${player.theme.secondary} 100%)`,
              }}
            >
              {/* Hover effect proxy */}
              <div className="absolute inset-0 bg-white/20 -left-full transition-all duration-500 group-hover:left-full z-0" />
              
              <div className="flex flex-col items-center gap-4 z-10">
                <img
                  src={`data:image/svg+xml;base64,${player.iconSvg}`}
                  alt={player.lastName}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white/80 shadow-lg"
                />
                <div className="text-center">
                  <div className="block text-4xl mb-1 font-bold">{player.firstName}</div>
                  <div className="text-2xl font-semibold">{player.lastName}</div>
                  <span className="text-sm opacity-90 mt-2 font-normal block">
                    Click to explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <footer className="fixed bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-sm">
        <p>🌟 Welcome to Football's Greatest Rivalry 🌟</p>
      </footer>
    </div>
  );
}
