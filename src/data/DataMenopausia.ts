export const condicionesMenopausia = [
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
              "Tibolona": "NA",
              "THM local": 1,
            },
          },
          {
            label: ">=5 años",
            values: {
              "THM combinada oral": 1,
              "THM combinada trans": 1,
              "THM solo estrógeno oral": 1,
              "THM solo estrógeno trans": 1,
              "Tibolona": "NA",
              "THM local": 1,
            },
          },
        ],
      },
    ],
  },
];
