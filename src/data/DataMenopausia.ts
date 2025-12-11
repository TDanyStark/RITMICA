import type { CondicionesMenopausia } from "./types";

export const condicionesMenopausia: CondicionesMenopausia = [
  {
    label: "EDAD Y DURACION",
    children: [
      {
        label: "<40 años",
        isgroup: true,
        children: [
          {
            label: "<5 años",
            values: {
              "THM combinada oral": 1,
              "THM combinada trans": 1,
              "THM solo estrógeno oral": 1,
              "THM solo estrógeno trans": 1,
              Tibolona: "NA",
              "THM local": 1,
            },
          },
          {
            label: ">5 años",
            values: {
              "THM combinada oral": 1,
              "THM combinada trans": 1,
              "THM solo estrógeno oral": 1,
              "THM solo estrógeno trans": 1,
              Tibolona: "NA",
              "THM local": 1,
            },
          },
        ],
      },
      {
        label: "40-44",
        isgroup: true,
        children: [
          {
            label: "<5 años",
            values: {
              "THM combinada oral": 2,
              "THM combinada trans": 1,
              "THM solo estrógeno oral": 2,
              "THM solo estrógeno trans": 1,
              Tibolona: 2,
              "THM local": 1,
            },
          },
          {
            label: ">5 años",
            values: {
              "THM combinada oral": 2,
              "THM combinada trans": 2,
              "THM solo estrógeno oral": 2,
              "THM solo estrógeno trans": 2,
              Tibolona: 2,
              "THM local": 1,
            },
          },
        ],
      },
      {
        label: "45-49",
        isgroup: true,
        children: [
          {
            label: "<5 años",
            values: {
              "THM combinada oral": 2,
              "THM combinada trans": 2,
              "THM solo estrógeno oral": 2,
              "THM solo estrógeno trans": 1,
              Tibolona: 2,
              "THM local": 1,
            },
          },
          {
            label: ">5 años",
            values: {
              "THM combinada oral": 2,
              "THM combinada trans": 2,
              "THM solo estrógeno oral": 2,
              "THM solo estrógeno trans": 2,
              Tibolona: 2,
              "THM local": 1,
            },
          },
        ],
      },
      {
        label: "50-59",
        isgroup: true,
        children: [
          {
            label: "<5 años",
            values: {
              "THM combinada oral": 2,
              "THM combinada trans": 2,
              "THM solo estrógeno oral": 2,
              "THM solo estrógeno trans": 2,
              Tibolona: {
                C: {
                  val: 2,
                  condition: "<55",
                },
                I: {
                  val: 1,
                  condition: ">55",
                },
              },
              "THM local": 1,
            },
          },
          {
            label: ">5 años",
            values: {
              "THM combinada oral": 2,
              "THM combinada trans": 2,
              "THM solo estrógeno oral": 2,
              "THM solo estrógeno trans": 2,
              Tibolona: {
                C: {
                  val: 2,
                  condition: "<55",
                },
                I: {
                  val: 1,
                  condition: ">55",
                },
              },
              "THM local": 1,
            },
          },
        ],
      },
      {
        label: "60-69",
        isgroup: true,
        children: [
          {
            label: "<5 años",
            values: {
              "THM combinada oral": {
                C: {
                  val: 2,
                  condition: "(continuación de la THM)",
                },
                I: {
                  val: 3,
                  condition: "(inicio de la THM y >10 años de menopausia)",
                },
              },
              "THM combinada trans": {
                C: {
                  val: 2,
                  condition: "(continuación de la THM)",
                },
                I: {
                  val: 3,
                  condition: "(inicio de la THM y >10 años de menopausia)",
                },
              },
              "THM solo estrógeno oral": {
                C: {
                  val: 2,
                  condition: "(continuación de la THM)",
                },
                I: {
                  val: 3,
                  condition: "(inicio de la THM y >10 años de menopausia)",
                },
              },
              "THM solo estrógeno trans": {
                C: {
                  val: 2,
                  condition: "(continuación de la THM)",
                },
                I: {
                  val: 3,
                  condition: "(inicio de la THM y >10 años de menopausia)",
                },
              },
              Tibolona: 2,
              "THM local": 1,
            },
          },
          {
            label: ">5 años",
            values: {
              "THM combinada oral": {
                C: {
                  val: 2,
                  condition: "(continuación de la THM)",
                },
                I: {
                  val: 3,
                  condition: "(inicio de la THM y >10 años de menopausia)",
                },
              },
              "THM combinada trans": {
                C: {
                  val: 2,
                  condition: "(continuación de la THM)",
                },
                I: {
                  val: 3,
                  condition: "(inicio de la THM y >10 años de menopausia)",
                },
              },
              "THM solo estrógeno oral": {
                C: {
                  val: 2,
                  condition: "(continuación de la THM)",
                },
                I: {
                  val: 3,
                  condition: "(inicio de la THM y >10 años de menopausia)",
                },
              },
              "THM solo estrógeno trans": {
                C: {
                  val: 2,
                  condition: "(continuación de la THM)",
                },
                I: {
                  val: 3,
                  condition: "(inicio de la THM y >10 años de menopausia)",
                },
              },
              Tibolona: 2,
              "THM local": 1,
            },
          },
        ],
      },
      {
        label: ">70",
        isgroup: true,
        children: [
          {
            label: "<5 años",
            values: {
              "THM combinada oral": 3,
              "THM combinada trans": 3,
              "THM solo estrógeno oral": 3,
              "THM solo estrógeno trans": 3,
              Tibolona: 2,
              "THM local": 1,
            },
          },
          {
            label: ">5 años",
            values: {
              "THM combinada oral": 3,
              "THM combinada trans": 3,
              "THM solo estrógeno oral": 3,
              "THM solo estrógeno trans": 3,
              Tibolona: 3,
              "THM local": 1,
            },
          },
        ],
      },
    ],
  },
  {
    label: "RIESGO TROMBÓTICO",
    children: [
      {
        label: "TVP/EP sin anticoagulación",
        values: {
          "THM combinada oral": 4,
          "THM combinada trans": 3,
          "THM solo estrógeno oral": 4,
          "THM solo estrógeno trans": 3,
          Tibolona: "NA",
          "THM local": 1,
        },
      },
      {
        label: "TVP/EP con anticoagulación de acción directa",
        values: {
          "THM combinada oral": {
            val: "NA",
            condition:
              "Si fuese necesaria la THM, utilizar la vía transdérmica",
          },
          "THM combinada trans": 3,
          "THM solo estrógeno oral": {
            val: "NA",
            condition:
              "Si fuese necesaria la THM, utilizar la vía transdérmica",
          },
          "THM solo estrógeno trans": 3,
          Tibolona: {
            val: "NA",
            condition:
              "Si fuese necesaria la THM, utilizar la vía transdérmica",
          },
          "THM local": 1,
        },
      },
      {
        label: "Trombofilia asintomática",
        values: {
          "THM combinada oral": 4,
          "THM combinada trans": 2,
          "THM solo estrógeno oral": 3,
          "THM solo estrógeno trans": 2,
          Tibolona: "NA",
          "THM local": 1,
        },
      },
    ],
  },
  {
    label: "TRANSTORNOS NEUROLÓGICOS",
    children: [
      {
        label: "Migraña",
        isgroup: true,
        children: [
          {
            label: "Sin aura",
            values: {
              "THM combinada oral": 2,
              "THM combinada trans": 2,
              "THM solo estrógeno oral": 2,
              "THM solo estrógeno trans": 2,
              Tibolona: "NA",
              "THM local": 1,
            },
          },
          {
            label: "Con aura",
            values: {
              "THM combinada oral": {
                val: 3,
                condition:
                  "Puede considerarse la administración de un antiagregante",
              },
              "THM combinada trans": {
                I: {
                  val: 2,
                  condition: "inicio – la migraña aparece antes de la THM",
                },
                C: {
                  val: 3,
                  condition:
                    "continuación – la migraña aparece después de la THM",
                },
              },
              "THM solo estrógeno oral": {
                val: 3,
                condition:
                  "Puede considerarse la administración de un antiagregante",
              },
              "THM solo estrógeno trans": {
                I: {
                  val: 2,
                  condition: "inicio – la migraña aparece antes de la THM",
                },
                C: {
                  val: 3,
                  condition:
                    "continuación – la migraña aparece después de la THM",
                },
              },
              Tibolona: {
                I: {
                  val: 2,
                  condition: "inicio – la migraña aparece antes de la THM",
                },
                C: {
                  val: 3,
                  condition:
                    "continuación – la migraña aparece después de la THM",
                },
              },
              "THM local": 1,
            },
          },
        ],
      },
      {
        label: "Cefalea tensional",
        values: {
          "THM combinada oral": 1,
          "THM combinada trans": 1,
          "THM solo estrógeno oral": "NA",
          "THM solo estrógeno trans": "NA",
          Tibolona: 1,
          "THM local": 1,
        },
      },
    ],
  },
  {
    label: "ENFERMEDAD CARDIOVASCULAR",
    children: [
      {
        label: "Ictus",
        values: {
          "THM combinada oral": 3,
          "THM combinada trans": {
            condicion1: {
              val: 3,
              condition: "",
            },
            condicion2: {
              val: 2,
              condition:
                "Paciente que por edad sea tributaria de THM y que su ictus no sea 2º a arterioesclerosis, o bien el ictus sea hemorrágico y su estudio coronario / troncos supraaórticos sean normales y presente otros FR (diabetes mal controlada, tabaquismo, HTA mal controlada, trombofilia, insuficiencia cardiaca)",
            },
          },
          "THM solo estrógeno oral": 3,
          "THM solo estrógeno trans": {
            condicion1: {
              val: 3,
              condition: "",
            },
            condicion2: {
              val: 2,
              condition:
                "Paciente que por edad sea tributaria de THM y que su ictus no sea 2º a arterioesclerosis, o bien el ictus sea hemorrágico y su estudio coronario / troncos supraaórticos sean normales y presente otros FR (diabetes mal controlada, tabaquismo, HTA mal controlada, trombofilia, insuficiencia cardiaca)",
            },
          },
          Tibolona: "NA",
          "THM local": 1,
        },
      },
      {
        label: "Infarto agudo de miocardio",
        values: {
          "THM combinada oral": {
            condicion1: { val: 3, condition: "" },
            condicion2: {
              val: 2,
              condition: "sin causa isquémica del IAM ni otros FR",
            },
          },
          "THM combinada trans": {
            condicion1: { val: 3, condition: "" },
            condicion2: {
              val: 2,
              condition: "sin causa isquémica del IAM ni otros FR",
            },
          },
          "THM solo estrógeno oral": {
            condicion1: { val: 3, condition: "" },
            condicion2: {
              val: 2,
              condition: "sin causa isquémica del IAM ni otros FR",
            },
          },
          "THM solo estrógeno trans": {
            condicion1: { val: 3, condition: "" },
            condicion2: {
              val: 2,
              condition: "sin causa isquémica del IAM ni otros FR",
            },
          },
          Tibolona: "NA",
          "THM local": 1,
        },
      },
      {
        label: "Angina",
        values: {
          "THM combinada oral": {
            condicion1: { val: 2, condition: "" },
            condicion2: { val: 3, condition: "causa isquémica o con otros FR" },
          },
          "THM combinada trans": {
            condicion1: { val: 2, condition: "" },
            condicion2: { val: 3, condition: "causa isquémica o con otros FR" },
          },
          "THM solo estrógeno oral": {
            condicion1: { val: 2, condition: "" },
            condicion2: { val: 3, condition: "causa isquémica o con otros FR" },
          },
          "THM solo estrógeno trans": {
            condicion1: { val: 2, condition: "" },
            condicion2: { val: 3, condition: "causa isquémica o con otros FR" },
          },
          Tibolona: "NA",
          "THM local": 1,
        },
      },
      {
        label: "Hipertensión",
        values: {
          "THM combinada oral": {
            condicion1: { val: 2, condition: "" },
            condicion2: {
              val: 1,
              condition: "combinación de estradiol + drospirenona",
            },
          },
          "THM combinada trans": 2,
          "THM solo estrógeno oral": {
            condicion1: { val: 2, condition: "" },
            condicion2: {
              val: 1,
              condition: "combinación de estradiol + + noretisterona",
            },
          },
          "THM solo estrógeno trans": 2,
          Tibolona: 2,
          "THM local": 1,
        },
      },
    ],
  },
  {
    label: "FUMA",
    children: [
      {
        label: "Si",
        values: {
          "THM combinada oral": 3,
          "THM combinada trans": 2,
          "THM solo estrógeno oral": 3,
          "THM solo estrógeno trans": 2,
          Tibolona: "NA",
          "THM local": 1,
        },
      },
    ],
  },
  {
    label: "ALTERACIONES METABÓLICAS RELACIONADAS CON EL SÍNDROME METABÓLICO",
    children: [
      {
        label: "Diabetes mellitus",
        values: {
          "THM combinada oral": 1,
          "THM combinada trans": { val: 1, condition: "evidencia limitada" },
          "THM solo estrógeno oral": {
            val: 1,
            condition: "evidencia limitada",
          },
          "THM solo estrógeno trans": {
            val: 1,
            condition: "evidencia limitada",
          },
          Tibolona: "NA",
          "THM local": 1,
        },
      },
      {
        label: "Hipercolesterolemia",
        values: {
          "THM combinada oral": 1,
          "THM combinada trans": 1,
          "THM solo estrógeno oral": 1,
          "THM solo estrógeno trans": 1,
          Tibolona: "NA",
          "THM local": 1,
        },
      },
      {
        label: "Hipercolesterolemia y diabetes",
        values: {
          "THM combinada oral": { val: 1, condition: "evidencia limitada" },
          "THM combinada trans": { val: 1, condition: "evidencia limitada" },
          "THM solo estrógeno oral": {
            val: 1,
            condition: "evidencia limitada",
          },
          "THM solo estrógeno trans": {
            val: 1,
            condition: "evidencia limitada",
          },
          Tibolona: "NA",
          "THM local": 1,
        },
      },
      {
        label: "IMC entre 25-30 kg/m2",
        values: {
          "THM combinada oral": 2,
          "THM combinada trans": 1,
          "THM solo estrógeno oral": 2,
          "THM solo estrógeno trans": 1,
          Tibolona: "NA",
          "THM local": 1,
        },
      },
      {
        label: "IMC >30 kg/m2",
        values: {
          "THM combinada oral": 3,
          "THM combinada trans": 2,
          "THM solo estrógeno oral": 3,
          "THM solo estrógeno trans": 2,
          Tibolona: "NA",
          "THM local": 1,
        },
      },
    ],
  },
  {
    label: "ENFERMEDADES DIGESTIVAS",
    children: [
      {
        label: "Enfermedad inflamatoria intestinal",
        values: {
          "THM combinada oral": 2,
          "THM combinada trans": 1,
          "THM solo estrógeno oral": 2,
          "THM solo estrógeno trans": 1,
          Tibolona: "NA",
          "THM local": 1,
        },
      },
      {
        label: "Antecedentes de hepatitis C",
        values: {
          "THM combinada oral": 2,
          "THM combinada trans": 2,
          "THM solo estrógeno oral": 2,
          "THM solo estrógeno trans": 2,
          Tibolona: "NA",
          "THM local": 1,
        },
      },
      {
        label: "Hepatitis aguda",
        children: [
          {
            label: "Grave",
            values: {
              "THM combinada oral": 4,
              "THM combinada trans": 4,
              "THM solo estrógeno oral": 4,
              "THM solo estrógeno trans": 4,
              Tibolona: "NA",
              "THM local": 1,
            },
          },
          {
            label: "Leve",
            values: {
              "THM combinada oral": 3,
              "THM combinada trans": 3,
              "THM solo estrógeno oral": 2,
              "THM solo estrógeno trans": 2,
              Tibolona: "NA",
              "THM local": 1,
            },
          },
        ],
      },
      {
        label: "Cirrosis",
        values: {
          "THM combinada oral": 4,
          "THM combinada trans": 4,
          "THM solo estrógeno oral": 4,
          "THM solo estrógeno trans": 4,
          Tibolona: 4,
          "THM local": 1,
        },
      },
    ],
  },
  {
    label: "CÁNCER DE MAMA",
    children: [
      {
        label: "Receptores hormonales negativos",
        values: {
          "THM combinada oral": 2,
          "THM combinada trans": 2,
          "THM solo estrógeno oral": 2,
          "THM solo estrógeno trans": 2,
          Tibolona: 3,
          "THM local": 2,
        },
      },
      {
        label: "Receptores hormonales positivos",
        values: {
          "THM combinada oral": 3,
          "THM combinada trans": 3,
          "THM solo estrógeno oral": 3,
          "THM solo estrógeno trans": 3,
          Tibolona: 4,
          "THM local": 2,
        },
      },
      {
        label: "Portadora BRCA1",
        values: {
          "THM combinada oral": 2,
          "THM combinada trans": 2,
          "THM solo estrógeno oral": 2,
          "THM solo estrógeno trans": 2,
          Tibolona: "NA",
          "THM local": 1,
        },
      },
      {
        label: "Portadora BRCA2",
        values: {
          "THM combinada oral": 2,
          "THM combinada trans": 2,
          "THM solo estrógeno oral": 2,
          "THM solo estrógeno trans": 2,
          Tibolona: "NA",
          "THM local": 1,
        },
      },
    ],
  },
  {
    label: "OTROS CÁNCERES",
    children: [
      {
        label: "Cáncer de ovario",
        values: {
          "THM combinada oral": 1,
          "THM combinada trans": 1,
          "THM solo estrógeno oral": 1,
          "THM solo estrógeno trans": 1,
          Tibolona: 1,
          "THM local": 1,
        },
      },
      {
        label: "Cáncer de endometrio",
        values: {
          "THM combinada oral": {
            val: 2,
            condition:
              "menor recurrencia con THM combinada que con THM solo estrógenos",
          },
          "THM combinada trans": {
            val: 2,
            condition:
              "menor recurrencia con THM combinada que con THM solo estrógenos",
          },
          "THM solo estrógeno oral": {
            val: 2,
            condition:
              "menor recurrencia con THM combinada que con THM solo estrógenos",
          },
          "THM solo estrógeno trans": {
            val: 2,
            condition:
              "menor recurrencia con THM combinada que con THM solo estrógenos",
          },
          Tibolona: 2,
          "THM local": 1,
        },
      },
      {
        label: "Cáncer de cérvix",
        values: {
          "THM combinada oral": 2,
          "THM combinada trans": 2,
          "THM solo estrógeno oral": 2,
          "THM solo estrógeno trans": 2,
          Tibolona: 2,
          "THM local": 1,
        },
      },
      {
        label: "Cáncer de colon",
        values: {
          "THM combinada oral": 1,
          "THM combinada trans": 1,
          "THM solo estrógeno oral": {
            val: 1,
            condition:
              "parece evidenciarse mejor resultado con solo estrógenos",
          },
          "THM solo estrógeno trans": {
            val: 1,
            condition:
              "parece evidenciarse mejor resultado con solo estrógenos",
          },
          Tibolona: "NA",
          "THM local": 1,
        },
      },
      {
        label: "Cáncer de pulmón",
        values: {
          "THM combinada oral": 2,
          "THM combinada trans": 2,
          "THM solo estrógeno oral": "NA",
          "THM solo estrógeno trans": "NA",
          Tibolona: "NA",
          "THM local": 1,
        },
      },
      {
        label: "Melanoma",
        values: {
          "THM combinada oral": 2,
          "THM combinada trans": 2,
          "THM solo estrógeno oral": 2,
          "THM solo estrógeno trans": 2,
          Tibolona: "NA",
          "THM local": 1,
        },
      },
    ],
  },
  {
    label: "MEDICAMENTOS / INTERACCIONES MEDICAMENTOSAS",
    children: [
      {
        label: "Antihipertensivos",
        values: {
          "THM combinada oral": {
            condicion1: { val: 1, condition: "Con drospirenona" },
            condicion2: {
              val: 2,
              condition:
                "Puede alterar el control de la TA y requerirse ajuste de dosis",
            },
          },
          "THM combinada trans": 1,
          "THM solo estrógeno oral": {
            val: 2,
            condition:
              "Puede alterar el control de la TA y requerirse ajuste de dosis",
          },
          "THM solo estrógeno trans": 1,
          Tibolona: {
            val: 2,
            condition:
              "Puede alterar el control de la TA y requerirse ajuste de dosis",
          },
          "THM local": 1,
        },
      },
      {
        label: "Estatinas",
        values: {
          "THM combinada oral": {
            condicion1: { val: 1, condition: "" },
            condicion2: {
              val: 2,
              condition: "tiende a aumentar los TG, LDL y CT",
            },
          },
          "THM combinada trans": {
            val: 1,
            condition: "modifica menos el perfil lipídico",
          },
          "THM solo estrógeno oral": {
            condicion1: { val: 1, condition: "" },
            condicion2: {
              val: 2,
              condition: "tiende a aumentar los TG, LDL y CT",
            },
          },
          "THM solo estrógeno trans": {
            val: 1,
            condition: "modifica menos el perfil lipídico",
          },
          Tibolona: {
            condicion1: { val: 1, condition: "" },
            condicion2: {
              val: 2,
              condition: "tiende a aumentar los TG, LDL y CT",
            },
          },
          "THM local": 1,
        },
      },
      {
        label: "Ansiolíticos / hipnóticos",
        values: {
          "THM combinada oral": 1,
          "THM combinada trans": 1,
          "THM solo estrógeno oral": 1,
          "THM solo estrógeno trans": 1,
          Tibolona: {
            condicion1: { val: 1, condition: "" },
            condicion2: {
              val: 2,
              condition: "2 (con midazolam)",
            },
          },
          "THM local": 1,
        },
      },
      {
        label: "Analgésicos / antiinflamatorios",
        values: {
          "THM combinada oral": 1,
          "THM combinada trans": 1,
          "THM solo estrógeno oral": 1,
          "THM solo estrógeno trans": 1,
          Tibolona: 1,
          "THM local": 1,
        },
      },
      {
        label: "Antidepresivos",
        values: {
          "THM combinada oral": 1,
          "THM combinada trans": 1,
          "THM solo estrógeno oral": 1,
          "THM solo estrógeno trans": 1,
          Tibolona: 1,
          "THM local": 1,
        },
      },
      {
        label: "Inhibidores de la aromatasa",
        values: {
          "THM combinada oral": 4,
          "THM combinada trans": 4,
          "THM solo estrógeno oral": 4,
          "THM solo estrógeno trans": 4,
          Tibolona: 4,
          "THM local": 1,
        },
      },
      {
        label: "Antidiabéticos orales",
        values: {
          "THM combinada oral": 1,
          "THM combinada trans": 1,
          "THM solo estrógeno oral": 1,
          "THM solo estrógeno trans": 1,
          Tibolona: 1,
          "THM local": 1,
        },
      },
      {
        label: "Insulina",
        values: {
          "THM combinada oral": 1,
          "THM combinada trans": 1,
          "THM solo estrógeno oral": 1,
          "THM solo estrógeno trans": 1,
          Tibolona: 1,
          "THM local": 1,
        },
      },
      {
        label: "Hormonas tiroideas",
        values: {
          "THM combinada oral": 1,
          "THM combinada trans": 1,
          "THM solo estrógeno oral": 1,
          "THM solo estrógeno trans": 1,
          Tibolona: 1,
          "THM local": 1,
        },
      },
      {
        label: "Broncodilatadores",
        values: {
          "THM combinada oral": {
            val: 1,
            condition: "con teofilina oral ajustar dosis",
          },
          "THM combinada trans": 1,
          "THM solo estrógeno oral": {
            val: 1,
            condition: "con teofilina oral ajustar dosis",
          },
          "THM solo estrógeno trans": 1,
          Tibolona: {
            val: 1,
            condition: "con teofilina oral ajustar dosis",
          },
          "THM local": 1,
        },
      },
      {
        label: "Anticoagulantes",
        values: {
          "THM combinada oral": {
            condicion1: { val: 1, condition: "" },
            condicion2: {
              val: 2,
              condition: "se puede requerir ajustar la dosis de Warfarina",
            },
          },
          "THM combinada trans": 1,
          "THM solo estrógeno oral": {
            condicion1: { val: 1, condition: "" },
            condicion2: {
              val: 2,
              condition: "se puede requerir ajustar la dosis de Warfarina",
            },
          },
          "THM solo estrógeno trans": 1,
          Tibolona: {
            val: 2,
            condition: "se puede requerir ajustar la dosis de Warfarina",
          },
          "THM local": 1,
        },
      },
      {
        label: "SERMs",
        values: {
          "THM combinada oral": 4,
          "THM combinada trans": 4,
          "THM solo estrógeno oral": 4,
          "THM solo estrógeno trans": 4,
          Tibolona: 4,
          "THM local": 1,
        },
      },
      {
        label: "Corticoides",
        values: {
          "THM combinada oral": 2,
          "THM combinada trans": 2,
          "THM solo estrógeno oral": 2,
          "THM solo estrógeno trans": 2,
          Tibolona: 2,
          "THM local": 2,
        },
      },
      {
        label: "Antiepilépticos",
        values: {
          "THM combinada oral": 4,
          "THM combinada trans": 3,
          "THM solo estrógeno oral": 4,
          "THM solo estrógeno trans": 3,
          Tibolona: 4,
          "THM local": 1,
        },
      },
      {
        label: "Antibióticos inhibidores enzimáticos (rifampicina / rifabutina)",
        values: {
          "THM combinada oral": 2,
          "THM combinada trans": 2,
          "THM solo estrógeno oral": 2,
          "THM solo estrógeno trans": 2,
          Tibolona: 2,
          "THM local": 1,
        },
      },
      {
        label: "Antineoplásicos",
        values: {
          "THM combinada oral": 4,
          "THM combinada trans": 4,
          "THM solo estrógeno oral": 4,
          "THM solo estrógeno trans": 4,
          Tibolona: 4,
          "THM local": 1,
        },
      },
      {
        label: "Inmunosupresores",
        values: {
          "THM combinada oral": 3,
          "THM combinada trans": 3,
          "THM solo estrógeno oral": 3,
          "THM solo estrógeno trans": 3,
          Tibolona: 3,
          "THM local": 1,
        },
      },
      {
        label: "Antifúngicos orales",
        values: {
          "THM combinada oral":{
            condicion1: { val: 1, condition: "" },
            condicion2: {
              val: 2,
              condition:
                "en tratamientos crónicos",
            },
          },
          "THM combinada trans": 1,
          "THM solo estrógeno oral": {
            condicion1: { val: 1, condition: "" },
            condicion2: {
              val: 2,
              condition:
                "en tratamientos crónicos",
            },
          },
          "THM solo estrógeno trans": 1,
          Tibolona: {
            condicion1: { val: 1, condition: "" },
            condicion2: {
              val: 2,
              condition:
                "en tratamientos crónicos",
            },
          },
          "THM local": 1,
        },
      },
      {
        label: "Antirretrovirales",
        values: {
          "THM combinada oral": {
            condicion1: { val: 1, condition: "" },
            condicion2: {
              val: 2,
              condition:
                "Los inhibidores de la proteasa (Ritonavir, Saquinavir, Atazanavir, Tipranavir) son inductores enzimáticos y reducen el efecto estrogénico; los inhibidores no nucleósidos de la transcriptasa reversa (Efavirenz, Nivirapina) son inductores enzimáticos que no lo reducen",
            },
          },
          "THM combinada trans": {
            val: 2,
            condition:
              "Los inhibidores de la proteasa (Ritonavir, Saquinavir, Atazanavir, Tipranavir) son inductores enzimáticos y reducen el efecto estrogénico; los inhibidores no nucleósidos de la transcriptasa reversa (Efavirenz, Nivirapina) son inductores enzimáticos que no lo reducen",
          },
          "THM solo estrógeno oral": {
            condicion1: { val: 1, condition: "" },
            condicion2: {
              val: 2,
              condition:
                "Los inhibidores de la proteasa (Ritonavir, Saquinavir, Atazanavir, Tipranavir) son inductores enzimáticos y reducen el efecto estrogénico; los inhibidores no nucleósidos de la transcriptasa reversa (Efavirenz, Nivirapina) son inductores enzimáticos que no lo reducen",
            },
          },
          "THM solo estrógeno trans": {
            condicion1: { val: 1, condition: "" },
            condicion2: {
              val: 2,
              condition:
                "Los inhibidores de la proteasa (Ritonavir, Saquinavir, Atazanavir, Tipranavir) son inductores enzimáticos y reducen el efecto estrogénico; los inhibidores no nucleósidos de la transcriptasa reversa (Efavirenz, Nivirapina) son inductores enzimáticos que no lo reducen",
            },
          },
          Tibolona: {
            condicion1: { val: 1, condition: "" },
            condicion2: {
              val: 2,
              condition:
                "Los inhibidores de la proteasa (Ritonavir, Saquinavir, Atazanavir, Tipranavir) son inductores enzimáticos y reducen el efecto estrogénico; los inhibidores no nucleósidos de la transcriptasa reversa (Efavirenz, Nivirapina) son inductores enzimáticos que no lo reducen",
            },
          },
          "THM local": 1,
        },
      },
      {
        label: "Dopaminérgicos",
        values: {
          "THM combinada oral": 2,
          "THM combinada trans": 2,
          "THM solo estrógeno oral": 2,
          "THM solo estrógeno trans": 2,
          Tibolona: 2,
          "THM local": 1,
        },
      },
      {
        label: "Litolíticos",
        values: {
          "THM combinada oral": 3,
          "THM combinada trans": 2,
          "THM solo estrógeno oral": 3,
          "THM solo estrógeno trans": 2,
          Tibolona: 3,
          "THM local": 1,
        },
      },
      {
        label: "Neuroestimulantes",
        values: {
          "THM combinada oral": 2,
          "THM combinada trans": 2,
          "THM solo estrógeno oral": 2,
          "THM solo estrógeno trans": 2,
          Tibolona: 2,
          "THM local": 1,
        },
      },
      {
        label: "Antitiroideos",
        values: {
          "THM combinada oral": 2,
          "THM combinada trans": 2,
          "THM solo estrógeno oral": 2,
          "THM solo estrógeno trans": 2,
          Tibolona: 2,
          "THM local": 1,
        },
      },
      {
        label: "Antipsicóticos",
        values: {
          "THM combinada oral": {
            condicion1: { val: 2, condition: "" },
            condicion2: {
              val: 3,
              condition:
                "Algunos estudios han comunicado interacción con el gestágeno para aripiprazol y pimozida",
            },  
          },
          "THM combinada trans": {
            condicion1: { val: 2, condition: "" },
            condicion2: {
              val: 3,
              condition:
                "Algunos estudios han comunicado interacción con el gestágeno para aripiprazol y pimozida",
            },  
          },
          "THM solo estrógeno oral": 1,
          "THM solo estrógeno trans": 1,
          Tibolona: 1,
          "THM local": 1,
        },
      }
    ],
  },
];
