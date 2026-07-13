import { useLocation } from "react-router-dom";
import { PDFViewer } from "@react-pdf/renderer";
import CotizacionDocument from "../components/CotizacionReporte";

export default function CotizacionPdfScreen() {
     const { state } = useLocation();

     return (
          <PDFViewer style={{ width: "100%", height: "100vh" }}>
               <CotizacionDocument data={state.data} />
          </PDFViewer>
     );
}