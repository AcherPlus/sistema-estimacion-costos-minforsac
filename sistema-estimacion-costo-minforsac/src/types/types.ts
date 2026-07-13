export interface CotizacionItem {
  id: number;
  nombre: string;
  descripcion: string;
  tipo: string;
  cantidad: number;
  total: number;
}

export interface CotizacionData {
  cliente: string;
  ruc: string;
  direccion: string;
  fecha: string;
  solicitante: string;
  moneda: string;
  items: CotizacionItem[];
}