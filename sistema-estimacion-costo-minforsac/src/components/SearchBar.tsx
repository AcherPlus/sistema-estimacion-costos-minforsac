export default function SearchBar() {
     return (
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
     )
}