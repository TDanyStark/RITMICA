export type InfectionType = 'CV' | 'VB' | 'TV';

export interface Option {
  label: string;
  points: InfectionType[];
}

export interface Question {
  id: number;
  title: string;
  options: Option[];
}

export const saludIntimaQuestions: Question[] = [
  {
    id: 1,
    title: "Aspecto del flujo vaginal",
    options: [
      {
        label: "Grumoso, blanco, cremoso y espeso (similar el requesón)",
        points: ["CV"],
      },
      {
        label: "Amarillento o verdoso, con o sin aspecto espumoso",
        points: ["TV"],
      },
      {
        label: "Blanco grisáceo",
        points: ["VB"],
      },
    ],
  },
  {
    id: 2,
    title: "Olor del flujo vaginal",
    options: [
      {
        label: "Sin olor particular",
        points: ["CV"],
      },
      {
        label: "Tipo amina (pescado)",
        points: ["VB"],
      },
      {
        label: "Maloliente",
        points: ["TV"],
      },
    ],
  },
  {
    id: 3,
    title: "pH",
    options: [
      {
        label: "4.0-4.5",
        points: ["CV"],
      },
      {
        label: ">4.5",
        points: ["VB", "TV"],
      },
    ],
  },
  {
    id: 4,
    title: "Otros signos y síntomas",
    options: [
      {
        label: "Prurito",
        points: ["CV"],
      },
      {
        label: "Dispareunia",
        points: ["CV", "TV"],
      },
      {
        label: "Disuria",
        points: ["TV"],
      },
      {
        label: "Eritema vulvar",
        points: ["CV", "TV"],
      },
      {
        label: "Edema vulvar",
        points: ["CV"],
      },
      {
        label: "Sangrado poscoital",
        points: ["TV"],
      },
      {
        label: "Ninguno en particular",
        points: ["VB"],
      },
    ],
  },
  {
    id: 5,
    title: "Aspecto del cuello uterino",
    options: [
      {
        label: "Normal",
        points: ["CV", "VB"],
      },
      {
        label: "En fresa",
        points: ["TV"],
      },
    ],
  },
];

export const resultsInfo = {
  CV: {
    title: "Candidiasis vulvovaginal",
    description: "Características del flujo: grumoso, blanco, cremoso y espeso (similar el requesón)\nOlor: sin olor\npH: 4.0-4.5\nOtros signos y síntomas: prurito, dispareunia, eritema vulvar, edema vulvar\nAspecto del cuello uterino: normal",
  },
  VB: {
    title: "Vaginosis bacteriana",
    description: "Características del flujo: blanco grisáceo\nOlor: tipo amina (pescado)\npH: >4.5\nOtros signos y síntomas: ninguno\nAspecto del cuello uterino: normal",
  },
  TV: {
    title: "Tricomoniasis",
    description: "Características del flujo: amarillento o verdoso, con o sin aspecto espumoso\nOlor: maloliente\npH: >4.5\nOtros signos y síntomas: sangrado poscoital, dispareunia, eritema vulvar, disuria\nAspecto del cuello uterino: en fresa",
  },
  Mixed: {
    title: "Vaginosis mixta",
    description: "Presenta signos y síntomas variados que sugieren una infección mixta.",
  },
};
