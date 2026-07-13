import { ArrowRight } from 'lucide-react';
import Minforsac from './../assets/logo_minforsac.jpg';

export default function SideBarComponent() {

     const menuItems = [
          { name: 'Clientes', active: false },
          { name: 'Técnicos', active: false },
          { name: 'Servicios', active: false },
          { name: 'Cotizaciones', active: true },
     ];

     return (
          <>
               {/* 1. SIDEBAR (Menú Lateral) */}
               <aside className="w-64 bg-[#222861] flex flex-col shrink-0 shadow-xl">
                    {/* Contenedor del Logo */}
                    <div className="p-6 flex justify-center border-b border-white/10">
                         <img src={Minforsac} alt="Minforsac" />
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
          </>
     )
}