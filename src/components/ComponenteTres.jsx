import React from 'react';

export default function ComponenteTres({ titulo }) {
  return (
    <div className="flex flex-col w-full aspect-[3/4] rounded-3xl overflow-hidden border border-black/10 shadow-sm transition-transform hover:scale-[1.02]">
      <div className="flex-1 bg-[#EED69F] flex items-center justify-center p-4">
        <span className="text-[#4A5568] font-medium text-center tracking-widest uppercase text-sm">
          Componente Tres
        </span>
      </div>
      <div className="flex-1 bg-white flex items-center justify-center p-4">
        <h2 className="text-[#4A5568] font-medium tracking-widest uppercase">
          {titulo}
        </h2>
      </div>
    </div>
  );
}
