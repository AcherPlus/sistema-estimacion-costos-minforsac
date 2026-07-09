import React, { useState } from 'react';
import { ArrowRight, List, Triangle, X, MoreHorizontal } from 'lucide-react';

interface CotizacionItem {
  id: number;
  nombre: string;
  tipo: string;
  cantidad: number;
  total: number;
}

export const CotizacionesScreen: React.FC = () => {
  const menuItems = [
    { name: 'Clientes', active: false },
    { name: 'Técnicos', active: false },
    { name: 'Servicios', active: false },
    { name: 'Cotizaciones', active: true },
  ];

  // Estado de ejemplo para los ítems agregados de la derecha
  const [items, setItems] = useState<CotizacionItem[]>([
    { id: 1, nombre: 'Nombre del ítem', tipo: 'Producto', cantidad: 2, total: 250.00 },
    { id: 2, nombre: 'Nombre del ítem', tipo: 'Producto', cantidad: 2, total: 250.00 },
    { id: 3, nombre: 'Nombre del ítem', tipo: 'Producto', cantidad: 2, total: 250.00 },
  ]);

  return (
    <div className="flex min-h-screen bg-[#DCE4F3] font-sans antialiased text-white select-none">
      
      {/* 1. SIDEBAR (Menú Lateral) */}
      <aside className="w-64 bg-[#222861] flex flex-col shrink-0 shadow-xl">
        {/* Contenedor del Logo */}
        <div className="p-6 flex justify-center border-b border-white/10">
          <div className="bg-white p-3 rounded-sm w-44 h-32 flex flex-col items-center justify-center shadow-md">
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
                  className={`w-full flex items-center justify-between px-6 py-4 text-base font-medium transition-colors
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

      {/* 2. AREA DE CONTENIDO PRINCIPAL */}
      <main className="flex-1 p-8 md:p-12 overflow-y-auto flex flex-col">
        
        {/* Cabecera: Título y Nueva Entrada */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-black tracking-tight">Cotizaciones</h1>
          <button className="px-5 py-2 bg-[#2A317A] text-white text-sm font-medium rounded-full hover:bg-[#1C2257] transition-all shadow-sm">
            + Nueva entrada
          </button>
        </div>

        {/* Contenedor del Formulario Principal */}
        <div className="w-full bg-[#222861] rounded-2xl p-8 shadow-lg flex-1 flex flex-col justify-between">
          
          {/* Grid central de dos columnas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* COLUMNA IZQUIERDA: Formulario de entrada de ítem */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Tipo de Ítem */}
              <div className="space-y-2">
                <label className="text-sm font-normal text-white">Tipo de ítem</label>
                <div className="w-44 bg-white rounded-full px-4 py-2 flex items-center justify-between text-black cursor-pointer shadow-sm">
                  <span className="text-sm">Seleccionar</span>
                  <Triangle className="w-3 h-3 fill-black text-black rotate-180" />
                </div>
              </div>

              {/* Nombre del ítem */}
              <div>
                <input
                  type="text"
                  placeholder="Nombre del ítem"
                  className="w-full bg-white rounded-full px-5 py-2.5 text-black placeholder-gray-500 text-sm outline-none shadow-sm"
                />
              </div>

              {/* Fila de Descripción, Cantidad, Precio y Total */}
              <div className="grid grid-cols-12 gap-4">
                {/* Cuadro de Descripción */}
                <div className="col-span-5">
                  <textarea
                    placeholder="Descripción"
                    className="w-full h-32 bg-white rounded-2xl p-4 text-black placeholder-gray-500 text-sm outline-none resize-none shadow-sm"
                  />
                </div>

                {/* Campos numéricos al lado de descripción */}
                <div className="col-span-7 flex flex-col justify-between h-32">
                  <div className="flex gap-3">
                    {/* Cantidad */}
                    <div className="flex-1 space-y-1">
                      <label className="text-xs text-white">Cantidad:</label>
                      <input
                        type="text"
                        placeholder='0'
                        className="w-full bg-white rounded-full px-4 py-1.5 text-black text-center text-sm outline-none shadow-sm"
                      />
                    </div>
                    {/* Precio Unitario */}
                    <div className="flex-1 space-y-1">
                      <label className="text-xs text-white">Precio unitario:</label>
                      <input
                        type="text"
                        placeholder='0.00'
                        className="w-full bg-white rounded-full px-4 py-1.5 text-black text-center text-sm outline-none shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Total del ítem actual */}
                  <div className="space-y-1">
                    <label className="text-xs text-white">Total:</label>
                    <div className="w-full bg-[#8E92A7] rounded-full py-2 text-black font-medium text-center text-sm shadow-inner">
                      0.00
                    </div>
                  </div>
                </div>
              </div>

              {/* Detalles específicos del ítem */}
              <div className="w-full bg-[#E2E4E9] rounded-full px-5 py-2.5 flex items-center justify-between text-black cursor-pointer shadow-sm mt-2">
                <div className="flex items-center gap-2">
                  <List className="w-4 h-4 text-black" />
                  <span className="text-sm font-medium">Detalles específicos del ítem</span>
                </div>
                <Triangle className="w-3 h-3 fill-black text-black rotate-180" />
              </div>

            </div>

            {/* COLUMNA DERECHA: Lista de ítems añadidos */}
            <div className="lg:col-span-6 flex flex-col h-full justify-between space-y-3">
              
              {/* Contenedor de lista */}
              <div className="space-y-2.5 overflow-y-auto max-h-[290px] pr-1">
                {items.map((item) => (
                  <div key={item.id} className="bg-white rounded-xl p-3 flex items-center justify-between text-black shadow-sm">
                    {/* Letra identificadora/Avatar */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#DCE4F3] flex items-center justify-center font-bold text-gray-700 rounded-sm">
                        A
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold leading-tight">{item.nombre}</span>
                        <span className="text-[11px] text-gray-500">{item.tipo}</span>
                      </div>
                    </div>

                    {/* Datos de Cantidad y Subtotal */}
                    <div className="flex items-center gap-6">
                      <div className="flex flex-col items-start">
                        <span className="text-[10px] text-gray-400 font-medium">Cantidad:</span>
                        <span className="text-xs font-bold leading-none">{item.cantidad}</span>
                      </div>
                      <div className="flex flex-col items-start min-w-[50px]">
                        <span className="text-[10px] text-gray-400 font-medium">Total:</span>
                        <span className="text-xs font-bold leading-none">{item.total.toFixed(2)}</span>
                      </div>
                      
                      {/* Acciones de fila */}
                      <div className="flex items-center gap-2 text-gray-700 ml-2">
                        <button className="hover:text-black">
                          <MoreHorizontal className="w-5 h-5 stroke-[2.5]" />
                        </button>
                        <button className="hover:text-red-600">
                          <X className="w-5 h-5 stroke-[2.5]" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total acumulado general */}
              <div className="bg-[#8E92A7] rounded-xl p-3.5 flex items-center justify-between text-black font-bold shadow-inner mt-4">
                <span className="text-sm font-medium">Total</span>
                <span className="text-base font-bold tracking-wide">750.00</span>
              </div>

            </div>

          </div>

          {/* Botones de acción inferiores */}
          <div className="flex justify-center items-center gap-5 mt-8 pt-4">
            <button className="px-8 py-2.5 bg-[#343C8F] text-white font-medium rounded-full hover:bg-[#282E6E] transition-all shadow-md text-sm">
              Guardar cotización
            </button>
            <button className="px-8 py-2.5 bg-[#E2E4E9] text-gray-900 font-medium rounded-full hover:bg-white transition-all shadow-md text-sm border border-gray-300">
              Cancelar
            </button>
          </div>

        </div>

      </main>
    </div>
  );
};

export default CotizacionesScreen;