type CriteriaValue = {
  AOC: number | "N" | { I: number; C: number };
  IM: number | "N" | { I: number; C: number };
  AVC: number | "N" | { I: number; C: number };
  PSP: number | "N" | { I: number; C: number };
  ISP: number | "N" | { I: number; C: number };
  IMP: number | "N" | { I: number; C: number };
};
type CriteriaNode = {
  label: string;
  open?: boolean;
  check?: boolean;
  values?: CriteriaValue;
  children?: CriteriaNode[];
};

export const criterios: CriteriaNode[] = [
  {
    label: "Características personales y antecedentes reproductivos",
    open: false,
    children: [
      {
        label: "Edad",
        open: false,
        children: [
          {
            label: "De la menarquia a <40 años",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: "N", ISP: "N", IMP: "N" },
          },
          {
            label: "De la menarquia a <18 años",
            values: { AOC: "N", IM: "N", AVC: "N", PSP: 1, ISP: 2, IMP: 1 },
          },
          {
            label: "≥40 años",
            values: { AOC: 2, IM: 2, AVC: 2, PSP: "N", ISP: "N", IMP: "N" },
          },
          {
            label: "18 a 45 años",
            values: { AOC: "N", IM: "N", AVC: "N", PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label: ">45 años",
            values: { AOC: "N", IM: "N", AVC: "N", PSP: 1, ISP: 2, IMP: 1 },
          },
        ],
      },
      {
        label: "Número de partos",
        open: false,
        children: [
          {
            label: "No ha tenido partos (nulípara)",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label: "Ha tenido uno o más partos",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
        ],
      },
      {
        label: "Lactancia materna",
        open: false,
        children: [
          {
            label: "<6 semanas después del parto",
            values: { AOC: 4, IM: 4, AVC: 4, PSP: 2, ISP: 3, IMP: 2 },
          },
          {
            label:
              "≥6 semanas a <6 meses después del parto (básicamente amamantando)",
            values: { AOC: 3, IM: 3, AVC: 3, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label: "≥≥6 meses después del parto",
            values: { AOC: 2, IM: 2, AVC: 2, PSP: 1, ISP: 1, IMP: 1 },
          },
        ],
      },
      {
        label: "Posparto (mujeres que no amamantan)",
        open: false,
        children: [
          {
            label: "<21 días",
            values: { AOC: 3, IM: 3, AVC: 3, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label:
              "<21 dias Con otros factores adicionales de riesgo de tromboembolia venosa",
            values: { AOC: 4, IM: 4, AVC: 4, PSP: "N", ISP: "N", IMP: "N" },
          },
          {
            label: "21 a 42 días",
            values: { AOC: 2, IM: 2, AVC: 2, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label:
              "21 a 42 días Con otros factores adicionales de riesgo de tromboembolia venosa",
            values: { AOC: 3, IM: 3, AVC: 3, PSP: "N", ISP: "N", IMP: "N" },
          },
          {
            label: ">42 días",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
        ],
      },
      {
        label: "Después de un aborto",
        open: false,
        children: [
          {
            label: "En el primer trimestre",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label: "En el segundo trimestre",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label: "inmediatamente después de un aborto séptico",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
        ],
      },
      {
        label: "Afección o circunstancia",
        open: false,
        children: [
          {
            label: "Antecedentes de embarazo ectópico",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 2, ISP: 1, IMP: 1 },
          },
          {
            label: "Antecedentes de cirugía pélvica",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
        ],
      },
      {
        label: "Tabaquismo",
        open: false,
        children: [
          {
            label: "Edad <35 años",
            values: { AOC: 2, IM: 2, AVC: 2, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label: "Edad ≥35 años",
            open: false,
            children: [
              {
                label: "<15 cigarrillos al día",
                values: { AOC: 3, IM: 2, AVC: 3, PSP: 1, ISP: 1, IMP: 1 },
              },
              {
                label: "≥15 cigarrillos al día",
                values: { AOC: 4, IM: 3, AVC: 4, PSP: 1, ISP: 1, IMP: 1 },
              },
            ],
          },
        ],
      },
      {
        label: "Obesidad",
        open: false,
        children: [
          {
            label: "Índice de masa corporal ≥30 kg/m2",
            values: { AOC: 2, IM: 2, AVC: 2, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label: "Índice de masa corporal <30 kg/m2",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
        ],
      },
    ],
  },
  {
    label: "TRASTORNOS CARDIOVASCULARES",
    open: false,
    children: [
      {
        label:
          "Múltiples factores de riesgo de enfermedad cardivascular arterial (mayor edad, tabaquismo, diabetes e hipertensión)",
        values: { AOC: 4, IM: 4, AVC: 4, PSP: 2, ISP: 3, IMP: 2 },
      },
      {
        label: "Hipertensión",
        open: false,
        children: [
          {
            label:
              "Antecedentes de hipertensión, cuando NO se puede evaluar la tensión arterial (incluida la hipertensión en el embarazo)",
            values: { AOC: 3, IM: 3, AVC: 3, PSP: 2, ISP: 2, IMP: 2 },
          },
          {
            label:
              "Hipertensión adecuadamente controlada, cuando SE PUEDE evaluar la tensión arterial",
            values: { AOC: 3, IM: 3, AVC: 3, PSP: 1, ISP: 2, IMP: 1 },
          },
          {
            label: "Tensión arterial elevada (medida de la manera adecuada)",
            open: false,
            children: [
              {
                label: "Sistólica 140-159 mm Hg o diastólica 90-99 mm Hg",
                values: { AOC: 3, IM: 3, AVC: 3, PSP: 1, ISP: 2, IMP: 1 },
              },
              {
                label: "Sistólica >=160 mm Hg o diastólica >=100 mm Hg",
                values: { AOC: 4, IM: 4, AVC: 4, PSP: 2, ISP: 3, IMP: 2 },
              },
            ],
          },
          {
            label: "Enfermedad vascular",
            values: { AOC: 4, IM: 4, AVC: 4, PSP: 2, ISP: 3, IMP: 2 },
          }
        ],
      },
      {
        label:
          "Antecedentes de hipertensión en el embarazo (cuando la tensión arterial actual puede medirse y es normal)",
        values: { AOC: 2, IM: 2, AVC: 2, PSP: 1, ISP: 1, IMP: 1 },
      },
      {
        label: "Trombosis venosa profunda (TVP)/ Embolia pulmonar (EP)",
        open: false,
        children: [
          {
            label: "Antecedentes de TVP/EP",
            values: { AOC: 4, IM: 4, AVC: 4, PSP: 2, ISP: 2, IMP: 2 },
          },
          {
            label: "TVP/EP aguda",
            values: { AOC: 4, IM: 4, AVC: 4, PSP: 3, ISP: 3, IMP: 3 },
          },
          {
            label: "TVP/EP y con tratamiento anticoagulante",
            values: { AOC: 4, IM: 4, AVC: 4, PSP: 2, ISP: 2, IMP: 2 },
          },
          {
            label:
              "Antecedentes familiares de TVP/EP (parientes de primer grado)",
            values: { AOC: 2, IM: 2, AVC: 2, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label: "Cirugía mayor",
            open: false,
            children: [
              {
                label: "Con inmovilización prolongada",
                values: { AOC: 4, IM: 4, AVC: 4, PSP: 2, ISP: 2, IMP: 2 },
              },
              {
                label: "Sin inmovilización prolongada",
                values: { AOC: 2, IM: 2, AVC: 2, PSP: 1, ISP: 1, IMP: 1 },
              },
            ],
          },
          {
            label: "Cirugía menor sin inmovilización prolongada",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
        ],
      },
      {
        label:
          "Mutaciones trombogénicas conocidas (p. ej., factor V de Leiden, mutación de la protrombina; deficiencias de proteína S, proteína C y antitrombina)",
        values: { AOC: 4, IM: 4, AVC: 4, PSP: 2, ISP: 2, IMP: 2 },
      },
      {
        label: "Trombosis venosa superficial",
        open: false,
        children: [
          {
            label: "Venas varicosas (várices)",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label: "Trombosis venosa superficial",
            values: { AOC: 2, IM: 2, AVC: 2, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label: "Cardiopatía isquémica",
            open: false,
            children: [
              {
                label: "En curso",
                values: {
                  AOC: 4,
                  IM: 4,
                  AVC: 4,
                  PSP: { I: 2, C: 3 },
                  ISP: 3,
                  IMP: { I: 2, C: 3 },
                },
              },
              {
                label: "Antecedentes",
                values: {
                  AOC: 4,
                  IM: 4,
                  AVC: 4,
                  PSP: { I: 2, C: 3 },
                  ISP: 3,
                  IMP: { I: 2, C: 3 },
                },
              },
            ],
          },
        ],
      },
      {
        label:
          "Accidente cerebrovascular (antecedentes de accidente cerebrovascular)",
        values: { AOC: 2, IM: 2, AVC: 2, PSP: 2, ISP: 2, IMP: 2 },
      },
      
    ],
  },
];
