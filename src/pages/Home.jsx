import React from "react";
import { Link } from "react-router";

function Home() {
  const faqCards = [
    {
      id: 1,
      title: "Cara Mendaftar Akun",
      description: "Petunjuk langkah demi langkah mendaftar.",
    },
    {
      id: 2,
      title: "Metode Pembayaran",
      description: "Daftar metode pembayaran yang didukung.",
    },
    {
      id: 3,
      title: "Kebijakan Pengembalian",
      description: "Syarat dan ketentuan refund.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 text-[#9a9a9a]">
      <div className="mb-12">
        <span className="text-xs font-semibold tracking-wider uppercase text-gray-500">
          Pusat Bantuan
        </span>
        <h2 className="mt-2 text-3xl font-bold text-black">Pertanyaan Umum</h2>
        <p className="mt-2 text-sm text-gray-500">
          Temukan jawaban dari pertanyaan yang sering ditanyakan.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {faqCards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col justify-between rounded-xl border border-zinc-200 bg-[#3a3a3a]/5 p-6 shadow-sm transition-all hover:shadow-md"
          >
            <div>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4a4a4a]/20 text-xs font-bold text-black">
                {card.id}
              </div>

              <h3 className="mt-6 text-lg font-bold text-black">
                {card.title}
              </h3>
              <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                {card.description}
              </p>
            </div>

            <div className="mt-8">
              <Link
                to={`/detail/${card.id}`}
                className="inline-flex items-center text-xs font-semibold text-black hover:underline"
              >
                Lihat detail <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
