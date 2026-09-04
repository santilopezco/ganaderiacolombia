import { useMemo, useState } from "react";

const PRECIO_MIN = 12000; // juego DIN de referencia: visual + botón RFID
const PRECIO_MAX = 18000;
const WHATSAPP = "573001112233"; // TODO: reemplazar por el número real

const cop = (n: number) => "$" + n.toLocaleString("es-CO");

interface Categoria {
  id: string;
  etiqueta: string;
  nota: string;
  valorInicial: number;
}

const CATEGORIAS: Categoria[] = [
  { id: "crias", etiqueta: "Crías", nota: "4 a 12 meses", valorInicial: 18 },
  { id: "hembras1a5", etiqueta: "Hembras", nota: "1 a 5 años", valorInicial: 46 },
  { id: "machos", etiqueta: "Machos", nota: "mayores de 1 año", valorInicial: 24 },
  { id: "hembras5mas", etiqueta: "Hembras", nota: "mayores de 5 años", valorInicial: 12 },
];

export default function CalculadoraDIN() {
  const [valores, setValores] = useState<Record<string, number>>(
    Object.fromEntries(CATEGORIAS.map((c) => [c.id, c.valorInicial]))
  );

  const total = useMemo(
    () => Object.values(valores).reduce((suma, v) => suma + (Number.isFinite(v) ? v : 0), 0),
    [valores]
  );

  const mensaje = useMemo(() => {
    const detalle = CATEGORIAS.map((c) => `${c.etiqueta.toLowerCase()} ${c.nota}: ${valores[c.id]}`).join(", ");
    return `Hola, tengo ${total} animales por identificar según la Resolución 219 (${detalle}). Quiero una cotización.`;
  }, [valores, total]);

  const actualizar = (id: string, valor: string) => {
    const n = parseInt(valor, 10);
    setValores((prev) => ({ ...prev, [id]: Number.isNaN(n) ? 0 : n }));
  };

  return (
    <div className="calc">
      <div className="calc-head">
        <b>¿Cuántas orejeras necesita?</b>
        <span>Calculadora de cumplimiento · DIN</span>
      </div>
      <div className="calc-body">
        {CATEGORIAS.map((c) => (
          <div className="fila" key={c.id}>
            <label htmlFor={c.id}>
              {c.etiqueta}
              <small>{c.nota}</small>
            </label>
            <input
              id={c.id}
              type="number"
              min={0}
              inputMode="numeric"
              value={valores[c.id]}
              onChange={(e) => actualizar(c.id, e.target.value)}
            />
          </div>
        ))}

        <div className="calc-total">
          <div className="kpi">
            <span>Animales por identificar</span>
            <b>{total.toLocaleString("es-CO")}</b>
          </div>
          <div className="kpi">
            <span>Juegos DIN (visual + RFID)</span>
            <b>{total.toLocaleString("es-CO")}</b>
          </div>
          <div className="kpi">
            <span>Inversión estimada</span>
            <b className="chico">
              {cop(total * PRECIO_MIN)} – {cop(total * PRECIO_MAX)}
            </b>
          </div>
        </div>

        <p className="nota">
          <strong>Estimación de referencia.</strong> Cada DIN son dos piezas: orejera visual tipo
          paleta y orejera electrónica tipo botón con certificación Full ICAR. Se compran a
          proveedores autorizados por el ICA y los paga el responsable de los animales. La
          identificación es gradual por categoría etaria: confirme su cronograma en el ICA.
        </p>

        <button
          className="wa"
          onClick={() =>
            window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`, "_blank", "noopener")
          }
        >
          <svg viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2" />
          </svg>
          Pedir cotización con estos números
        </button>
      </div>
    </div>
  );
}
