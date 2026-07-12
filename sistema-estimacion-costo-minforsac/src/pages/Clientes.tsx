import React, { useState } from 'react';
import SideBarComponent from '../components/SideBar';
import SearchBar from '../components/SearchBar';

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

  

  return (
    <div className="flex min-h-screen bg-[#DCE4F3] font-sans antialiased">
      
      <SideBarComponent />

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
        <SearchBar />

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