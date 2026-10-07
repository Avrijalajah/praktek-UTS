import React from "react";
import { useParams, Link } from "react-router"; // Gunakan 'react-router-dom' jika versi v6 biasa

function DetailHome() {
  const { id } = useParams();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 text-[#9a9a9a]">
      <Link
        to="/"
        className="inline-flex items-center text-xs font-semibold text-gray-500 hover:text-black transition-colors mb-6"
      >
        <span className="mr-1">←</span> Kembali ke HOME
      </Link>

      <div className="rounded-xl border border-zinc-200 bg-[#3a3a3a]/5 p-8 shadow-sm">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4a4a4a]/20 text-xs font-bold text-black">
          {id}
        </div>

        <span className="block mt-6 text-xs font-semibold tracking-wider text-gray-500">
          Detail Pertanyaan
        </span>
        <h2 className="mt-1 text-2xl font-bold text-black">
          Detail HOME - ID: {id}
        </h2>

        <p className="mt-4 text-sm text-gray-500">
          ID:{" "}
          <span className="font-bold">{id}</span>.
        </p>

        <hr className="my-8 border-t border-zinc-300/60" />

        <p className="text-xs text-gray-400">
          Informasi lengkap mengenai pertanyaan ini dapat ditampilkan pada
          halaman detail.
        </p>

        <div className="mt-8">
          <Link
            to="/"
            className="inline-block rounded-md bg-black px-4 py-2 text-xs font-semibold text-white hover:bg-zinc-900 transition-colors"
          >
            Kembali ke HOME
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailHome;
