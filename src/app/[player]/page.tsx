"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import { players } from "@/data/players";
import { notFound } from "next/navigation";

// Define the shape of params as a Promise
type Params = Promise<{ player: string }>;

export default function PlayerPage({ params }: { params: Params }) {
  // Unwrap the promise using React.use()
  const unwrappedParams = use(params);
  const playerId = unwrapPlayerId(unwrappedParams.player);
  const player = players[playerId];

  if (!player) {
    notFound();
  }

  const [views, setViews] = useState(0);
  const [opinions, setOpinions] = useState<{ text: string; date: string }[]>([]);
  const [newOpinion, setNewOpinion] = useState("");
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    // Increment Views
    const currentViews = parseInt(localStorage.getItem(`${player.id}PageViews`) || "0");
    const newViews = currentViews + 1;
    localStorage.setItem(`${player.id}PageViews`, newViews.toString());
    setViews(newViews);

    // Load Opinions
    const savedOpinions = JSON.parse(localStorage.getItem(`${player.id}Opinions`) || "[]");
    setOpinions(savedOpinions);

    // Load Optional Image
    const savedImage = localStorage.getItem(`${player.id}Image`);
    if (savedImage) setImage(savedImage);
  }, [player.id]);

  const handleOpinionSubmit = () => {
    if (!newOpinion.trim()) return;
    const opp = {
      text: newOpinion,
      date: new Date().toLocaleString(),
    };
    const updatedOpinions = [...opinions, opp];
    setOpinions(updatedOpinions);
    localStorage.setItem(`${player.id}Opinions`, JSON.stringify(updatedOpinions));
    setNewOpinion("");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageData = event.target?.result as string;
        setImage(imageData);
        localStorage.setItem(`${player.id}Image`, imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className="min-h-screen text-gray-800 p-5 pt-16 font-sans transition-colors duration-500"
      style={{
        background: `linear-gradient(135deg, ${player.theme.primary} 0%, ${player.theme.secondary} 100%)`,
      }}
    >
      <div
        className="fixed top-0 left-0 right-0 p-4 text-center font-bold text-white shadow-md z-50 transition-colors duration-500"
        style={{
          background: `linear-gradient(135deg, ${player.theme.primary} 0%, ${player.theme.secondary} 100%)`,
        }}
      >
        🔥 ADMIN PANEL - {player.name} | Views: <span>{views > 0 ? views : "..."}</span>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <header
          className="text-white p-10 text-center transition-colors duration-500"
          style={{
            background: `linear-gradient(135deg, ${player.theme.headerGrad1} 0%, ${player.theme.headerGrad2} 100%)`,
          }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2 shadow-black/50 drop-shadow-md">
            {player.firstName} {player.lastName}
          </h1>
          <p className="text-xl opacity-90">{player.subtitle}</p>
        </header>

        <div className="p-8 md:p-12">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-block mb-8 px-5 py-2 text-white rounded-lg shadow-md transition-transform hover:-translate-x-1"
            style={{ background: player.theme.primary }}
          >
            ← Back to Selection
          </Link>

          {/* User Image / Default Image Upload */}
          <div className="text-center mb-10">
            <div
              className="p-8 rounded-xl mb-5 mx-auto max-w-sm shadow-inner transition-colors duration-500"
              style={{ background: player.theme.bgHighlight }}
            >
              {image ? (
                <img src={image} alt="Uploaded" className="w-full h-auto rounded-lg shadow-lg object-cover" />
              ) : (
                <div
                  className="w-full aspect-square rounded-lg flex items-center justify-center text-white text-xl shadow-lg transition-colors duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${player.theme.primary} 0%, ${player.theme.secondary} 100%)`,
                  }}
                >
                  ⭐ {player.name}&#39;s Image
                </div>
              )}
            </div>
            <label
              className="cursor-pointer px-6 py-3 rounded-lg text-white font-bold shadow-md transition-transform hover:scale-105 inline-block"
              style={{
                background: `linear-gradient(135deg, ${player.theme.primary} 0%, ${player.theme.secondary} 100%)`,
              }}
            >
              Upload Image
              <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
            </label>
          </div>

          {/* Intro */}
          <div
            className="bg-gray-50 p-6 rounded-lg border-l-4 mb-10 text-lg text-gray-600 leading-relaxed transition-colors duration-500"
            style={{ borderLeftColor: player.theme.primary }}
          >
            <p>{player.intro}</p>
          </div>

          {/* Stats */}
          <section className="mb-10">
            <h2
              className="text-3xl font-bold mb-5 border-b-2 pb-2 transition-colors duration-500"
              style={{ color: player.theme.primary, borderBottomColor: player.theme.primary }}
            >
              📊 Career Statistics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {player.stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-white p-5 rounded-xl text-center shadow-lg transition-transform hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(135deg, ${player.theme.primary} 0%, ${player.theme.secondary} 100%)`,
                  }}
                >
                  <h3 className="text-3xl font-black mb-1">{stat.value}</h3>
                  <p className="text-sm opacity-90">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section className="mb-10">
            <h2
              className="text-3xl font-bold mb-5 border-b-2 pb-2 transition-colors duration-500"
              style={{ color: player.theme.primary, borderBottomColor: player.theme.primary }}
            >
              🏆 Major Achievements
            </h2>
            <div
              className="p-6 rounded-xl transition-colors duration-500"
              style={{ background: player.theme.accentBg }}
            >
              <ul className="space-y-3">
                {player.achievements.map((ach, i) => (
                  <li
                    key={i}
                    className="pb-3 border-b border-opacity-50 text-lg text-gray-700 last:border-b-0 last:pb-0"
                    style={{ borderColor: player.theme.accentBorder }}
                  >
                    • {ach}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Current Era / Phase */}
          <section className="mb-10">
            <div
              className="p-6 rounded-xl border-l-4 transition-colors duration-500"
              style={{ background: player.theme.bgHighlight2, borderLeftColor: player.theme.primary }}
            >
              <h3
                className="text-2xl font-bold mb-3 transition-colors duration-500"
                style={{ color: player.theme.primary }}
              >
                {player.careerPhase.title}
              </h3>
              <p className="text-lg text-gray-700 mb-4">{player.careerPhase.subtitle}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                {player.careerPhase.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Videos */}
          <section className="mb-10">
            <h2
              className="text-3xl font-bold mb-5 border-b-2 pb-2 transition-colors duration-500"
              style={{ color: player.theme.primary, borderBottomColor: player.theme.primary }}
            >
              📺 Highlights
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {player.videos.map((vid, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-xl text-center shadow-sm">
                  <h3 className="mb-3 font-semibold text-gray-700">{vid.title}</h3>
                  <iframe
                    src={vid.url}
                    className="w-full h-48 rounded-lg"
                    allowFullScreen
                    title={vid.title}
                  ></iframe>
                </div>
              ))}
            </div>
          </section>

          {/* Fan Opinions */}
          <section className="mb-10">
            <h2
              className="text-3xl font-bold mb-5 border-b-2 pb-2 transition-colors duration-500"
              style={{ color: player.theme.primary, borderBottomColor: player.theme.primary }}
            >
              💬 Fan Opinions
            </h2>
            <div className="bg-gray-50 p-6 rounded-xl mb-6 shadow-inner">
              <textarea
                value={newOpinion}
                onChange={(e) => setNewOpinion(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && e.ctrlKey && handleOpinionSubmit()}
                placeholder={`Share your opinion about ${player.name}...`}
                className="w-full p-3 border-2 rounded-lg mb-3 resize-y min-h-[100px] focus:outline-none focus:ring-2 transition-colors duration-300"
                style={{ borderColor: player.theme.primary, outlineColor: player.theme.primary }}
              ></textarea>
              <button
                onClick={handleOpinionSubmit}
                className="px-6 py-3 text-white rounded-lg font-bold shadow-md transition-transform hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${player.theme.primary} 0%, ${player.theme.secondary} 100%)`,
                }}
              >
                Post Opinion
              </button>
            </div>

            <div
              className="p-6 rounded-xl border-l-4 min-h-[100px] transition-colors duration-500"
              style={{ background: player.theme.accentBg, borderLeftColor: player.theme.primary }}
            >
              {opinions.length === 0 ? (
                <p className="text-gray-400 italic">No opinions yet. Be the first to share!</p>
              ) : (
                <>
                  <h3 className="font-bold text-gray-800 mb-4">Opinions from Fans:</h3>
                  <div className="space-y-3">
                    {[...opinions].reverse().map((op, i) => (
                      <div
                        key={i}
                        className="bg-white p-3 rounded-md shadow-sm border-l-4 transition-colors duration-500"
                        style={{ borderLeftColor: player.theme.primary }}
                      >
                        <p className="text-gray-800 mb-1">💬 {op.text}</p>
                        <p className="text-xs text-gray-400">{op.date}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>
        </div>

        <footer className="bg-gray-50 p-6 text-center text-gray-500 border-t border-gray-200">
          <p>© 2026 Football Legends | {player.name} Profile</p>
        </footer>
      </div>
    </div>
  );
}

function unwrapPlayerId(playerRaw: string) {
  // Ensure lowercase and string.
  return (playerRaw || "").toLowerCase();
}
