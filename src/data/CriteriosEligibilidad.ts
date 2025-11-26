type CriteriaValue = {
  AOC: number | "N";
  IM: number | "N";
  AVC: number | "N";
  PSP: number | "N";
  ISP: number | "N";
  IMP: number | "N";
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
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 'N', ISP: 'N', IMP: 'N' }
          },
          {
            label: "De la menarquia a <18 años",
            values: { AOC: 'N', IM: 'N', AVC: 'N', PSP: 1, ISP: 2, IMP: 1 }
          },
          {
            label: "≥40 años",
            values: { AOC: 2, IM: 2, AVC: 2, PSP: 'N', ISP: 'N', IMP: 'N' }
          },
          {
            label: "18 a 45 años",
            values: { AOC: 'N', IM: 'N', AVC: 'N', PSP: 1, ISP: 1, IMP: 1 }
          },
          {
            label: ">45 años",
            values: { AOC: 'N', IM: 'N', AVC: 'N', PSP: 1, ISP: 2, IMP: 1 }
          }
        ]
      },
      {
        label: "Número de partos",
        open: false,
        children: [
          {
            label: "No ha tenido partos (nulípara)",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 }
          },
          {
            label: "Ha tenido uno o más partos",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 }
          },
        ]
      },
      {
        label: "Lactancia materna",
        open: false,
        children: [
          {
            label: "<6 semanas después del parto",
            values: { AOC: 4, IM: 4, AVC: 4, PSP: 2, ISP: 3, IMP: 2 }
          },
          {
            label: "≥6 semanas a <6 meses después del parto (básicamente amamantando)",
            values: { AOC: 3, IM: 3, AVC: 3, PSP: 1, ISP: 1, IMP: 1 }
          },
          {
            label: "≥≥6 meses después del parto",
            values: { AOC: 2, IM: 2, AVC: 2, PSP: 1, ISP: 1, IMP: 1 }
          }
        ]
      },
      {
        label: "Posparto (mujeres que no amamantan)",
        open: false,
        children: [
          {
            label: "<21 días",
            values: { AOC: 3, IM: 3, AVC: 3, PSP: 1, ISP: 1, IMP: 1 }
          },
          {
            label: "<21 dias Con otros factores adicionales de riesgo de tromboembolia venosa",
            values: { AOC: 4, IM: 4, AVC: 4, PSP: 'N', ISP: 'N', IMP: 'N' }
          },
          {
            label: "21 a 42 días",
            values: { AOC: 2, IM: 2, AVC: 2, PSP: 1, ISP: 1, IMP: 1 }
          },
          {
            label: "21 a 42 días Con otros factores adicionales de riesgo de tromboembolia venosa",
            values: { AOC: 3, IM: 3, AVC: 3, PSP: 'N', ISP: 'N', IMP: 'N' }
          },
          {
            label: ">42 días",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 }
          }
        ]
      },
      {
        label: "Después de un aborto",
        open: false,
        children: [
          {
            label: "En el primer trimestre",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 }
          },
          {
            label: "En el segundo trimestre",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 }
          },
          {
            label: "inmediatamente después de un aborto séptico",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 }
          }
        ]
      },
      {
        label: "Afección o circunstancia",
        open: false,
        children: [
          {
            label: "Antecedentes de embarazo ectópico",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 2, ISP: 1, IMP: 1 }
          },
          {
            label: "Antecedentes de cirugía pélvica",
            values: { AOC: 1, IM: 1, AVC: 1, PSP: 1, ISP: 1, IMP: 1 }
          }
        ]
      },
      {
        label: "Tabaquismo",
        open: false,
        children: [
          {
            label: "Edad <35 años",
            values: { AOC: 2, IM: 2, AVC: 2, PSP: 1, ISP: 1, IMP: 1 }
          },
          {
            label: "Edad ≥35 años",
            open: false,
            children: [
              {
                label: "<15 cigarrillos al día",
                values: { AOC: 3, IM: 2, AVC: 3, PSP: 1, ISP: 1, IMP: 1 }
              },
              {
                label: "≥15 cigarrillos al día",
                values: { AOC: 4, IM: 3, AVC: 4, PSP: 1, ISP: 1, IMP: 1 }
              }
            ]
          }
        ]
      },
      {
        label: "Obesidad",
        open: false,
        children: [{
          label: "Índice de masa corporal ≥30 kg/m2",
          values: { AOC: 2, IM: 2, AVC: 2, PSP: 1, ISP: 1, IMP: 1 }
        }]
      }
    ]
  }
];