import type { CondicionesMenopausia } from "./types";

export const condicionesMenopausia: CondicionesMenopausia = [
  {
    label: "EDAD Y DURACION",
    children: [
      {
        label: "<40 años",
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
        children: [
          {
            label: "<5 años",
            values: {
              "THM combinada oral": 2,
              "THM combinada trans": 2,
              "THM solo estrógeno oral": 2,
              "THM solo estrógeno trans": 2,
              Tibolona: {
                C:{
                  val: 2,
                  condition: "<55"
                },
                I:{
                  val: 1,
                  condition: ">55"
                }
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
                C:{
                  val: 2,
                  condition: "<55"
                },
                I:{
                  val: 1,
                  condition: ">55"
                }
              },
              "THM local": 1,
            },
          },
        ],
      },
      {
        label: "60-69",
        children: [
          {
            label: "<5 años",
            values: {
              "THM combinada oral": {
                C:{
                  val: 2,
                  condition: "(continuación de la THM)"
                },
                I:{
                  val: 3,
                  condition: "(inicio de la THM y >10 años de menopausia)"
                }
              },
              "THM combinada trans":{
                C:{
                  val: 2,
                  condition: "(continuación de la THM)"
                },
                I:{
                  val: 3,
                  condition: "(inicio de la THM y >10 años de menopausia)"
                }
              },
              "THM solo estrógeno oral":{
                C:{
                  val: 2,
                  condition: "(continuación de la THM)"
                },
                I:{
                  val: 3,
                  condition: "(inicio de la THM y >10 años de menopausia)"
                }
              },
              "THM solo estrógeno trans":{
                C:{
                  val: 2,
                  condition: "(continuación de la THM)"
                },
                I:{
                  val: 3,
                  condition: "(inicio de la THM y >10 años de menopausia)"
                }
              },
              Tibolona: 2,
              "THM local": 1,
            },
          },
          {
            label: ">5 años",
            values: {
              "THM combinada oral": {
                C:{
                  val: 2,
                  condition: "(continuación de la THM)"
                },
                I:{
                  val: 3,
                  condition: "(inicio de la THM y >10 años de menopausia)"
                }
              },
              "THM combinada trans":{
                C:{
                  val: 2,
                  condition: "(continuación de la THM)"
                },
                I:{
                  val: 3,
                  condition: "(inicio de la THM y >10 años de menopausia)"
                }
              },
              "THM solo estrógeno oral":{
                C:{
                  val: 2,
                  condition: "(continuación de la THM)"
                },
                I:{
                  val: 3,
                  condition: "(inicio de la THM y >10 años de menopausia)"
                }
              },
              "THM solo estrógeno trans":{
                C:{
                  val: 2,
                  condition: "(continuación de la THM)"
                },
                I:{
                  val: 3,
                  condition: "(inicio de la THM y >10 años de menopausia)"
                }
              },
              Tibolona: 2,
              "THM local": 1,
            },
          },
        ],
      },
      {
        label: ">70",
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
          "THM combinada oral": "NA",
          "THM combinada trans": 3,
          "THM solo estrógeno oral": "NA",
          "THM solo estrógeno trans": 3,
          Tibolona: "NA",
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
                condition: "Puede considerarse la administración de un antiagregante",
              },
              "THM combinada trans": {
                I: { val: 2, condition: "inicio – la migraña aparece antes de la THM" },
                C: { val: 3, condition: "continuación – la migraña aparece después de la THM" },
              },
              "THM solo estrógeno oral": {
                val: 3,
                condition: "Puede considerarse la administración de un antiagregante",
              },
              "THM solo estrógeno trans": {
                I: { val: 2, condition: "inicio – la migraña aparece antes de la THM" },
                C: { val: 3, condition: "continuación – la migraña aparece después de la THM" },
              },
              Tibolona: {
                I: { val: 2, condition: "inicio – la migraña aparece antes de la THM" },
                C: { val: 3, condition: "continuación – la migraña aparece después de la THM" },
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
  }
];
