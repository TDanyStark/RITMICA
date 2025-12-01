export const testScenarios = [
  {
    id: 1,
    name: "Adolescente (<18 años)",
    description: "Debería mostrar restricciones (N) para AOC, IM, AVC.",
    state: {
      "group-0-0": {
        path: "0-0-1",
        values: { AOC: "N", IM: "N", AVC: "N", PSP: 1, ISP: 2, IMP: 1 },
        type: "radio",
      },
    },
  },
  {
    id: 2,
    name: "Fumadora pesada (>35 años, ≥15 cigarrillos)",
    description: "Alto riesgo (4) para AOC y AVC.",
    state: {
      "group-0-6-1": {
        path: "0-6-1-1",
        values: { AOC: 4, IM: 3, AVC: 4, PSP: 1, ISP: 1, IMP: 1 },
        type: "radio",
      },
    },
  },
  {
    id: 3,
    name: "Lactancia <6 semanas",
    description: "Contraindicado (4) para métodos combinados.",
    state: {
      "group-0-2": {
        path: "0-2-0",
        values: { AOC: 4, IM: 4, AVC: 4, PSP: 2, ISP: 3, IMP: 2 },
        type: "radio",
      },
    },
  },
  {
    id: 4,
    name: "Posparto <21 días con riesgo de TVP",
    description: "Contraindicado (4) para combinados, N para progestágenos (según datos).",
    state: {
      "group-0-3": {
        path: "0-3-1",
        values: { AOC: 4, IM: 4, AVC: 4, PSP: "N", ISP: "N", IMP: "N" },
        type: "radio",
      },
    },
  },
  {
    id: 5,
    name: "Hipertensión Severa (≥160/100)",
    description: "Contraindicado (4) para combinados.",
    state: {
      "group-1-1-2": {
        path: "1-1-2-1",
        values: { AOC: 4, IM: 4, AVC: 4, PSP: 2, ISP: 3, IMP: 2 },
        type: "radio",
      },
    },
  },
  {
    id: 6,
    name: "Antecedentes de TVP/EP",
    description: "Contraindicado (4) para combinados.",
    state: {
      "group-1-3": {
        path: "1-3-0",
        values: { AOC: 4, IM: 4, AVC: 4, PSP: 2, ISP: 2, IMP: 2 },
        type: "radio",
      },
    },
  },
  {
    id: 7,
    name: "Obesidad (IMC ≥30)",
    description: "Categoría 2 para combinados.",
    state: {
      "group-0-7": {
        path: "0-7-0",
        values: { AOC: 2, IM: 2, AVC: 2, PSP: 1, ISP: 1, IMP: 1 },
        type: "radio",
      },
    },
  },
  {
    id: 8,
    name: "Múltiples factores de riesgo CV",
    description: "Contraindicado (4) para combinados.",
    state: {
      "1-0": {
        values: { AOC: 4, IM: 4, AVC: 4, PSP: 2, ISP: 3, IMP: 2 },
        type: "checkbox",
      },
    },
  },
  {
    id: 9,
    name: "Combinado: Fumadora (>35, <15 cig) + Obesidad",
    description: "Debería tomar el valor más alto (3 de fumadora vs 2 de obesidad para AOC).",
    state: {
      "group-0-6-1": {
        path: "0-6-1-0",
        values: { AOC: 3, IM: 2, AVC: 3, PSP: 1, ISP: 1, IMP: 1 },
        type: "radio",
      },
      "group-0-7": {
        path: "0-7-0",
        values: { AOC: 2, IM: 2, AVC: 2, PSP: 1, ISP: 1, IMP: 1 },
        type: "radio",
      },
    },
  },
  {
    id: 10,
    name: "Combinado: Hipertensión controlada + Obesidad",
    description: "AOC debería ser 3 (por HTA) aunque Obesidad sea 2.",
    state: {
      "1-1-1": {
        values: { AOC: 3, IM: 3, AVC: 3, PSP: 1, ISP: 2, IMP: 1 },
        type: "checkbox",
      },
      "group-0-7": {
        path: "0-7-0",
        values: { AOC: 2, IM: 2, AVC: 2, PSP: 1, ISP: 1, IMP: 1 },
        type: "radio",
      },
    },
  },
  {
    id: 11,
    name: "Migraña compleja + Múltiples factores",
    description: "Prueba con 5 selecciones incluyendo valores I/C (Migraña).",
    state: {
      "group-2-0-1": {
        path: "2-0-1-0", // Migraña sin aura < 35 (I/C values)
        values: {
          AOC: { I: 2, C: 3 },
          IM: { I: 2, C: 3 },
          AVC: { I: 2, C: 3 },
          PSP: { I: 1, C: 2 },
          ISP: { I: 2, C: 2 },
          IMP: { I: 2, C: 2 },
        },
        type: "radio",
      },
      "group-0-7": {
        path: "0-7-1", // Obesidad < 30
        values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
        type: "radio",
      },
      "group-0-6-1": {
        path: "0-6-1-0", // Fumadora < 15 cig
        values: { AOC: 3, IM: 2, AVC: 3, PSP: 1, ISP: 1, IMP: 1 },
        type: "radio",
      },
      "group-0-5": {
        path: "0-5-1", // Cirugía pélvica
        values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
        type: "radio",
      },
      "group-1-5": {
        path: "1-5-0", // Venas varicosas
        values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
        type: "radio",
      },
    },
  },
  {
    id: 12,
    name: "Cefaleas no migrañosas + Antecedentes variados",
    description: "Prueba con 5 selecciones incluyendo valores I/C (Cefaleas).",
    state: {
      "2-0-0": { // Cefaleas no migrañosas (Checkbox because sibling Migraña has children)
        values: {
          AOC: { I: 1, C: 2 },
          IM: { I: 1, C: 2 },
          AVC: { I: 1, C: 2 },
          PSP: { I: 1, C: 1 },
          ISP: { I: 1, C: 1 },
          IMP: { I: 1, C: 1 },
        },
        type: "checkbox",
      },
      "group-0-1": {
        path: "0-1-0", // Nulípara
        values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
        type: "radio",
      },
      "group-0-3": {
        path: "0-3-4", // Postparto > 42 días
        values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
        type: "radio",
      },
      "1-1-1": { // Hipertensión controlada (Checkbox)
        values: { AOC: 3, IM: 3, AVC: 3, PSP: 1, ISP: 2, IMP: 1 },
        type: "checkbox",
      },
      "2-0-2": { // Epilepsia (Checkbox)
        values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
        type: "checkbox",
      }
    },
  },
];
