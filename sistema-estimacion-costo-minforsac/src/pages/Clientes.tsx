import React, { useState } from 'react';
import { ArrowRight, Plus, Search } from 'lucide-react'; // Opcional para iconos, o puedes usar SVGs directos

// Interfaz para tipar los datos de los clientes
interface Cliente {
  id: number;
  nombre: string;
  ruc: string;
  direccion: string;
}

export const ClientesScreen: React.FC = () => {
  // Estado para simular la lista de clientes
  const [clientes] = useState<Cliente[]>([
    { id: 1, nombre: 'Cliente 1', ruc: 'RUC 1', direccion: 'Dirección 1' },
    { id: 2, nombre: 'Cliente 2', ruc: 'RUC 2', direccion: 'Dirección 2' },
    { id: 3, nombre: 'Cliente 3', ruc: 'RUC 3', direccion: 'Dirección 3' },
  ]);

  const menuItems = [
    { name: 'Clientes', active: true },
    { name: 'Técnicos', active: false },
    { name: 'Servicios', active: false },
    { name: 'Cotizaciones', active: false },
  ];

  return (
    <div className="flex min-h-screen bg-[#DCE4F3] font-sans antialiased">
      
      {/* 1. SIDEBAR (Menú Lateral) */}
      <aside className="w-64 bg-[#222861] flex flex-col shrink-0 shadow-xl">
        {/* Contenedor del Logo */}
        <div className="p-6 flex justify-center border-b border-white/10">
          <div className="bg-white p-3 rounded-sm w-44 h-32 flex flex-col items-center justify-center shadow-md">
            {/* Logo Geométrico Simulado */}
            <div className="relative w-12 h-12 mb-1">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-9 h-8 bg-gradient-to-b from-[#6BA4E8] to-[#1E56A0] clip-path-prisma"></div>
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-4 border-b border-l border-r border-[#1E56A0]/60 flex flex-col justify-between p-[2px]">
                <div className="w-full h-[1px] bg-[#1E56A0]/40"></div>
              </div>
            </div>
            <div className="text-xl font-bold tracking-tight text-black">
              <span className="text-[#6BA4E8]">m</span>
              <span>inforsac</span>
            </div>
          </div>
        </div>

        {/* Opciones del Menú */}
        <nav className="flex-1 mt-6">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  className={`w-full flex items-center justify-between px-6 py-4 text-base font-medium transition-colors text-white
                    ${item.active ? 'bg-[#2E3577] border-l-4 border-[#6BA4E8]' : 'hover:bg-[#2E3577]/50'}`}
                >
                  <span>{item.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-80" />
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* 2. CONTENIDO PRINCIPAL */}
      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        
        {/* Cabecera: Título y Botón Agregar */}
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-4xl font-bold text-black tracking-tight">Clientes</h1>
          <button className="px-5 py-1.5 bg-[#2A317A] text-white text-sm font-medium rounded-full hover:bg-[#1C2257] transition-all flex items-center gap-1 shadow-sm">
            Agregar
          </button>
        </div>

        {/* Barra de Búsqueda y Filtros */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 max-w-4xl">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Buscar por nombre o razón social"
              className="w-full bg-white px-5 py-3 rounded-2xl text-gray-800 placeholder-gray-500 shadow-sm outline-none focus:ring-2 focus:ring-[#222861]/30 transition-all text-sm"
            />
          </div>
          <div className="w-full sm:w-64">
            <input
              type="text"
              placeholder="RUC (00000000000)"
              className="w-full bg-white px-5 py-3 rounded-2xl text-gray-800 placeholder-gray-500 shadow-sm outline-none focus:ring-2 focus:ring-[#222861]/30 transition-all text-sm"
            />
          </div>
        </div>

        {/* Grid de Tarjetas de Clientes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {clientes.map((cliente) => (
            <div key={cliente.id} className="flex flex-col gap-3">
              
              {/* Tarjeta Azul Superior */}
              <div className="bg-[#222861] rounded-2xl p-4 h-28 relative shadow-md flex items-start justify-end gap-2">
                <button className="bg-[#E2E4E9] text-gray-800 text-xs font-medium px-3 py-1 rounded-full hover:bg-white transition-colors">
                  Editar
                </button>
                <button className="bg-[#E2E4E9] text-gray-800 text-xs font-medium px-3 py-1 rounded-full hover:bg-white transition-colors">
                  Eliminar
                </button>
              </div>

              {/* Información del Cliente */}
              <div className="px-1 space-y-0.5 text-black">
                <p className="font-bold text-lg">{cliente.nombre}</p>
                <p className="font-bold text-base">{cliente.ruc}</p>
                <p className="font-bold text-base">{cliente.direccion}</p>
              </div>

              {/* Botón Agregar Solicitud */}
              <button className="w-full bg-[#343C8F] text-white py-3 rounded-2xl font-medium hover:bg-[#222861] transition-all shadow-sm text-sm mt-1">
                Agregar solicitud
              </button>
              
            </div>
          ))}
        </div>

      </main>
    </div>
  );
};

export default ClientesScreen;