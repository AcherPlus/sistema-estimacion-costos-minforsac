import React, { useState } from 'react';
import { List, Triangle, X, MoreHorizontal } from 'lucide-react';
import SideBarComponent from '../components/SideBar';
import CardItem from '../components/CardItem';

interface CotizacionItem {
  id: number;
  nombre: string;
  tipo: string;
  cantidad: number;
  total: number;
}

export const CotizacionesScreen: React.FC = () => {

  // Estado de ejemplo para los ítems agregados de la derecha
  const [items, setItems] = useState<CotizacionItem[]>([
    { id: 1, nombre: 'Nombre del ítem', tipo: 'Producto', cantidad: 2, total: 250.00 },
    { id: 2, nombre: 'Nombre del ítem', tipo: 'Producto', cantidad: 2, total: 250.00 },
    { id: 3, nombre: 'Nombre del ítem', tipo: 'Producto', cantidad: 2, total: 250.00 },
  ]);

  return (
    <div className="flex min-h-screen bg-[#DCE4F3] font-sans antialiased text-white select-none">

      {/* 1. SIDEBAR (Menú Lateral) */}
      <SideBarComponent />

      {/* 2. AREA DE CONTENIDO PRINCIPAL */}
      <main className="flex-1 p-8 md:p-12 overflow-y-auto flex flex-col">

        {/* Cabecera: Título y Nueva Entrada */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-black tracking-tight">Cotizaciones</h1>
          <button className="px-5 py-2 bg-[#2A317A] text-white text-sm font-medium rounded-full hover:bg-[#1C2257] transition-all shadow-sm">
            + Nueva cotización
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
                <label className="text-s font-normal text-white">Tipo de ítem</label>
                <div className="w-44">
                  <select
                    className="w-full appearance-none bg-white rounded-full px-4 py-2 pr-10 text-sm text-black shadow-sm cursor-pointer focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Seleccionar
                    </option>
                    <option value="producto">Producto</option>
                    <option value="servicio">Servicio</option>
                  </select>
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
                      <label className="text-s text-white">Cantidad:</label>
                      <input
                        type="text"
                        placeholder='0'
                        className="w-full bg-white rounded-full px-4 py-1.5 text-black text-center text-sm outline-none shadow-sm"
                      />
                    </div>
                    {/* Precio Unitario */}
                    <div className="flex-1 space-y-1">
                      <label className="text-s text-white">Precio unitario:</label>
                      <input
                        type="text"
                        placeholder='0.00'
                        className="w-full bg-white rounded-full px-4 py-1.5 text-black text-center text-sm outline-none shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Total del ítem actual */}
                  <div className="space-y-1">
                    <label className="text-s text-white">Total:</label>
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
                  <CardItem key={item.id} id_item={item.id} nombre={item.nombre} tipo={item.tipo} cantidad={item.cantidad} total={item.total} />
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