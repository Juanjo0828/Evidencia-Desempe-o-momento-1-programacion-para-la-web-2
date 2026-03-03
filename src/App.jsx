import React from 'react';
import ComponenteUno from './components/ComponenteUno';
import ComponenteDos from './components/ComponenteDos';
import ComponenteTres from './components/ComponenteTres';

export default function App() {
  return (
    <div className="h-screen bg-[#FAF7F0] flex flex-col p-4 md:p-8 gap-8 overflow-hidden">
      {/* Top Section */}
      <ComponenteUno />

      {/* Main Grid Section */}
      <main className="flex-1 flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
          <ComponenteTres titulo="Título" />
          <ComponenteTres titulo="Título" />
          <ComponenteTres titulo="Título" />
          <ComponenteTres titulo="Título" />
        </div>
      </main>

      {/* Bottom Section */}
      <ComponenteDos />
    </div>
  );
}
