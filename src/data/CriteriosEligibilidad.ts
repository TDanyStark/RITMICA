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
  values?: CriteriaValue;
  children?: CriteriaNode[];
};

export const criterios: CriteriaNode[] = [
  {
    label: "CARACTERÍSTICAS PERSONALES Y ANTECEDENTES REPRODUCTIVOS",
    children: [
      {
        label: "Edad",
        children: [
          {
            label: "De la menarquia a <40 años",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 2, IMP: 1 },
          },
          {
            label: "De la menarquia a <18 años",
            values: { AOC: "N", IM: "N", AVC: "N", PSP: 1, ISP: 2, IMP: 1 },
          },
          {
            label: "≥40 años",
            values: { AOC: 2, IM: 2, AVC: 2, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label: ">45 años",
            values: { AOC: "N", IM: "N", AVC: "N", PSP: 1, ISP: 2, IMP: 1 },
          },
        ],
      },
      {
        label: "Número de partos",
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
        children: [
          {
            label: "Edad <35 años",
            values: { AOC: 2, IM: 2, AVC: 2, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label: "Edad ≥35 años",
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
          {
            label: "No fumadora",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          }
        ],
      },
      {
        label: "Obesidad",
        children: [
          {
            label: "Índice de masa corporal ≥30 kg/m2",
            values: { AOC: 2, IM: 2, AVC: 2, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label: "Índice de masa corporal <30 kg/m2",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          }
        ],
      },
    ],
  },
  {
    label: "TRASTORNOS CARDIOVASCULARES",
    children: [
      {
        label:
          "Múltiples factores de riesgo de enfermedad cardivascular arterial (mayor edad, tabaquismo, diabetes e hipertensión)",
        values: { AOC: 4, IM: 4, AVC: 4, PSP: 2, ISP: 3, IMP: 2 },
      },
      {
        label: "Hipertensión",
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
          },
        ],
      },
      {
        label:
          "Antecedentes de hipertensión en el embarazo (cuando la tensión arterial actual puede medirse y es normal)",
        values: { AOC: 2, IM: 2, AVC: 2, PSP: 1, ISP: 1, IMP: 1 },
      },
      {
        label: "Trombosis venosa profunda (TVP)/ Embolia pulmonar (EP)",
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
            children: [
              {
                label: "En curso",
                values: {
                  AOC: 4,
                  IM: 4,
                  AVC: 4,
                  PSP: 2,
                  ISP: 3,
                  IMP: 2,
                },
              },
              {
                label: "Antecedentes",
                values: {
                  AOC: 4,
                  IM: 4,
                  AVC: 4,
                  PSP: 2,
                  ISP: 3,
                  IMP: 2,
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
      {
        label:
          "Dislipidemias conocidas sin otros factores de riesgo cardiovascular",
        children: [
          {
            label: "Sin complicaciones",
            values: { AOC: 2, IM: 2, AVC: 2, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label: "Complicada",
            values: { AOC: 4, IM: 4, AVC: 4, PSP: 1, ISP: 1, IMP: 1 },
          },
        ],
      },
      {
        label: "Lupus eritematoso sistémico",
        children: [
          {
            label:
              "Presencia de anticuerpos antifosfolipídicos positivos (o se desconoce si los presenta)",
            values: { AOC: 4, IM: 4, AVC: 4, PSP: 3, ISP: 3, IMP: 3 },
          },
          {
            label: "Trombocitopenia grave",
            values: { AOC: 2, IM: 2, AVC: 2, PSP: 2, ISP: 3, IMP: 2 },
          },
          {
            label: "Tratamiento inmunodepresor",
            values: { AOC: 2, IM: 2, AVC: 2, PSP: 2, ISP: 2, IMP: 2 },
          },
          {
            label: "Ninguna de las anteriores",
            values: { AOC: 2, IM: 2, AVC: 2, PSP: 1, ISP: 2, IMP: 2 },
          },
        ],
      },
    ],
  },
  {
    label: "TRASTORNOS NEUROLÓGICOS",
    children: [
      {
        label: "Cefaleas",
        children: [
          {
            label: "No migrañosas (leves o intensas)",
            values: {
              AOC: { I: 1, C: 2 },
              IM: { I: 1, C: 2 },
              AVC: { I: 1, C: 2 },
              PSP: { I: 1, C: 1 },
              ISP: { I: 1, C: 1 },
              IMP: { I: 1, C: 1 },
            },
          },
          {
            label: "Migraña",
            children: [
              {
                label: "Sin aura - Edad <35 años",
                values: {
                  AOC: { I: 2, C: 3 },
                  IM: { I: 2, C: 3 },
                  AVC: { I: 2, C: 3 },
                  PSP: { I: 1, C: 2 },
                  ISP: { I: 2, C: 2 },
                  IMP: { I: 2, C: 2 },
                },
              },
              {
                label: "Sin aura - Edad >=35 años",
                values: {
                  AOC: { I: 3, C: 4 },
                  IM: { I: 3, C: 4 },
                  AVC: { I: 3, C: 4 },
                  PSP: { I: 1, C: 2 },
                  ISP: { I: 2, C: 2 },
                  IMP: { I: 2, C: 2 },
                },
              },
              {
                label: "Con aura, a cualquier edad",
                values: {
                  AOC: { I: 4, C: 4 },
                  IM: { I: 4, C: 4 },
                  AVC: { I: 4, C: 4 },
                  PSP: { I: 2, C: 3 },
                  ISP: { I: 2, C: 3 },
                  IMP: { I: 2, C: 3 },
                },
              },
            ],
          },
          {
            label: "No presenta",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label: "Epilepsia",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
          
        ],
      },
    ],
  },
  {
    label: "TRASTORNOS DEPRESIVOS",
    children: [
      {
        label: "Trastornos depresivos",
        values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
      },
    ],
  },
  {
    label: "INFECCIONES Y TRASTORNOS DEL APARATO REPRODUCTOR",
    children: [
      {
        label: "Patrones de sangrado vaginal",
        children: [
          {
            label: "Patrón irregular sin sangrado profuso",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 2, ISP: 2, IMP: 2 },
          },
          {
            label:
              "Sangrado profuso o prolongado (incluidos los patrones regulares e irregulares)",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 2, ISP: 2, IMP: 2 },
          },
          {
            label:
              "Sangrado vaginal sin causa aparente (sospecha de una afección grave), antes de la evaluación",
            values: { AOC: 2, IM: 2, AVC: 2, PSP: 2, ISP: 3, IMP: 3 },
          },
        ],
      },
      {
        label: "Endometriosis",
        values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
      },
      {
        label: "Tumores benignos de ovario (incluidos los quistes)",
        values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
      },
      {
        label: "Dismenorrea grave",
        values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
      },
      {
        label: "Enfermedad trofoblástica gestacional",
        children: [
          {
            label: "Concentraciones de ß-hCG bajos o no detectables",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label:
              "Concentraciones de ß-hCG persistentemente elevadas o enfermedad maligna",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
        ],
      },
      {
        label: "Ectropión del cuello uterino",
        values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
      },
      {
        label: "Neoplasia intraepitelial cervicouterina (NIC)",
        values: { AOC: 2, IM: 2, AVC: 2, PSP: 1, ISP: 2, IMP: 2 },
      },
      {
        label: "Cáncer cervicouterino",
        values: { AOC: 2, IM: 2, AVC: 2, PSP: 1, ISP: 2, IMP: 2 },
      },
      {
        label: "Enfermedad mamaria",
        children: [
          {
            label: "Tumoración no diagnosticada",
            values: { AOC: 2, IM: 2, AVC: 2, PSP: 2, ISP: 2, IMP: 2 },
          },
          {
            label: "Enfermedad mamaria benigna",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label: "Antecedentes familiares de cáncer",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
        ],
      },
      {
        label: "Cáncer de mama",
        children: [
          {
            label: "En curso",
            values: { AOC: 4, IM: 4, AVC: 4, PSP: 4, ISP: 4, IMP: 4 },
          },
          {
            label:
              "En el pasado, sin evidencia de enfermedad durante un mínimo de 5 años",
            values: { AOC: 3, IM: 3, AVC: 3, PSP: 3, ISP: 3, IMP: 3 },
          },
        ],
      },
      {
        label: "Cáncer endometrial",
        values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
      },
      {
        label: "Cáncer de ovario",
        values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
      },
      {
        label: "Miomas uterinos",
        children: [
          {
            label: "Sin distorsión de la cavidad uterina",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label: "Con distorsión de la cavidad uterina",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
        ],
      },
      {
        label: "Enfermedad pélvica inflamatoria (EPI)",
        children: [
          {
            label: "Con embarazo ulterior",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label: "Sin embarazo ulterior",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label: "EPI actual",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
        ],
      },
      {
        label: "Infecciones de transmisión sexual (ITS)",
        children: [
          {
            label: "Cervicitis purulenta, clamidiasis o gonorrea actual",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label: "Otras ITS (salvo la infección por el VIH y la hepatitis)",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label:
              "Vaginitis (incluidas la infección por Trichomonas vaginalis y la vaginosis bacteriana)",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label: "Aumento del riesgo de ITS",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
        ],
      },
    ],
  },
  {
    label: "INFECCIÓN POR EL VIH/SIDA",
    children: [
      {
        label: "Riesgo alto de infección por el VIH",
        values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 2, IMP: 1 },
      },
      {
        label:
          "Enfermedad clínica por el VIH asintomática o leve (estadio 1 o 2 de la OMS)",
        values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
      },
      {
        label:
          "Enfermedad clínica por el VIH grave o avanzada (estadio 3 o 4 de la OMS)",
        values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
      },
      {
        label: "Tratamiento antirretroviral",
        children: [
          {
            label:
              "Tratamiento con inhibidores nucleósidos de la transcriptasa inversa (INTI)**",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label: "Efavirenz (EFV) o nevirapina (NVP)",
            values: { AOC: 2, IM: 2, AVC: 2, PSP: 2, ISP: 1, IMP: 2 },
          },
          {
            label: "Etravirina (ETR) o rilpivirina (RPV)",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label: "Tratamiento con inhibidores de la proteasa (IP)",
            values: { AOC: 2, IM: 2, AVC: 2, PSP: 2, ISP: 1, IMP: 2 },
          },
          {
            label:
              "Tratamiento con inhibidores de la integrasa (raltegravir [RAL])",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
        ],
      },
    ],
  },
  {
    label: "OTRAS INFECCIONES",
    children: [
      {
        label: "Esquistosomiasis",
        children: [
          {
            label: "Sin complicaciones",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label:
              "Fibrosis hepática (si es grave, véase cirrosis, en la página siguiente)",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
        ],
      },
      {
        label: "Tuberculosis",
        children: [
          {
            label: "No pélvica",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label: "Pélvica conocida",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
        ],
      },
      {
        label: "Malaria",
        values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
      },
    ],
  },
  {
    label: "TRASTORNOS ENDOCRINOS",
    children: [
      {
        label: "Diabetes",
        children: [
          {
            label: "Antecedentes de diabetes gestacional",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label: "Diabetes no vascular",
            children: [
              {
                label: "No insulinodependiente",
                values: { AOC: 2, IM: 2, AVC: 2, PSP: 2, ISP: 2, IMP: 2 },
              },
              {
                label: "Insulinodependiente",
                values: { AOC: 2, IM: 2, AVC: 2, PSP: 2, ISP: 2, IMP: 2 },
              },
            ],
          },
          {
            label: "Con daño en riñones, ojos o nervios",
            values: { AOC: 4, IM: 4, AVC: 4, PSP: 2, ISP: 3, IMP: 2 },
          },
          {
            label: "Otro trastorno vascular o diabetes de >20 años de duración",
            values: { AOC: 4, IM: 4, AVC: 4, PSP: 2, ISP: 3, IMP: 2 },
          },
        ],
      },
      {
        label: "Trastornos tiroideos",
        children: [
          {
            label: "Bocio simple",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label: "Hipertiroidismo",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label: "Hipotiroidismo",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
        ],
      },
    ],
  },
  {
    label: "TRASTORNOS GASTROINTESTINALES",
    children: [
      {
        label: "Enfermedad de la vesícula biliar",
        children: [
          {
            label: "Sintomática",
            children: [
              {
                label: "Tratada con colecistectomía",
                values: { AOC: 2, IM: 2, AVC: 2, PSP: 2, ISP: 2, IMP: 2 },
              },
              {
                label: "Tratamiento médico",
                values: { AOC: 3, IM: 2, AVC: 3, PSP: 2, ISP: 2, IMP: 2 },
              },
              {
                label: "Actual",
                values: { AOC: 3, IM: 2, AVC: 3, PSP: 2, ISP: 2, IMP: 2 },
              },
            ],
          },
          {
            label: "Asintomática",
            values: { AOC: 2, IM: 2, AVC: 2, PSP: 2, ISP: 2, IMP: 2 },
          },
        ],
      },
      {
        label: "Antecedentes de colestasis",
        children: [
          {
            label: "Relacionada con el embarazo",
            values: { AOC: 2, IM: 2, AVC: 2, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label: "Relacionada con la toma de anticonceptivos hormonales",
            values: { AOC: 3, IM: 2, AVC: 3, PSP: 2, ISP: 2, IMP: 2 },
          },
        ],
      },
      {
        label: "Hepatitis viral",
        children: [
          {
            label: "Aguda o activa",
            values: {
              AOC: { I: 4, C: 2 },
              IM: { I: 3, C: 2 },
              AVC: { I: 4, C: 2 },
              PSP: 1,
              ISP: 1,
              IMP: 1,
            },
          },
          {
            label: "Estado de portador",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label: "Crónica",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
        ],
      },
      {
        label: "Cirrósis",
        children: [
          {
            label: "Leve (compensada)",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label: "Grave (descompensada)",
            values: { AOC: 4, IM: 3, AVC: 4, PSP: 3, ISP: 3, IMP: 3 },
          },
        ],
      },
      {
        label: "Tumores hepáticos",
        children: [
          {
            label: "Hiperplasia nodular focal",
            values: { AOC: 2, IM: 2, AVC: 2, PSP: 2, ISP: 2, IMP: 2 },
          },
          {
            label: "Adenoma hepatocelular",
            values: { AOC: 4, IM: 3, AVC: 4, PSP: 3, ISP: 3, IMP: 3 },
          },
          {
            label: "Maligno (hepatoma)",
            values: { AOC: 4, IM: 4, AVC: 4, PSP: 3, ISP: 3, IMP: 3 },
          },
        ],
      },
    ],
  },
  {
    label: "ANEMIAS",
    children: [
      {
        label: "Talassemia",
        values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
      },
      {
        label: "Anemia drepanocítica",
        values: { AOC: 2, IM: 2, AVC: 2, PSP: 1, ISP: 1, IMP: 1 },
      },
      {
        label: "Anemia ferropénica",
        values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
      },
    ],
  },
  {
    label: "INTERACCIONES MEDICAMENTOSAS",
    children: [
      {
        label: "Tratamiento anticonvulsivante",
        children: [
          {
            label:
              "Algunos anticonvulsivantes (barbitúricos, carbamazepina, oxcarbazepina, fenitoína, primidona, topiramato)",
            values: { AOC: 3, IM: 2, AVC: 3, PSP: 3, ISP: 1, IMP: 2 },
          },
          {
            label: "Lamotrigina",
            values: { AOC: 3, IM: 3, AVC: 3, PSP: 1, ISP: 1, IMP: 1 },
          },
        ],
      },
      {
        label: "Tratamiento antimicrobiano",
        children: [
          {
            label: "Antibióticos de amplio espectro",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label: "Antimicóticos y antiparasitarios",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 },
          },
          {
            label: "Tratamiento con rifampicina y rifabutina",
            values: { AOC: 3, IM: 2, AVC: 3, PSP: 3, ISP: 1, IMP: 2 },
          },
        ],
      },
    ],
  },
];
