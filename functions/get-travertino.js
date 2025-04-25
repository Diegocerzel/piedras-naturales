exports.handler = async function () {
  const data = [
    {
      sku: "trav001",
      name: "Corte Fiorito",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/travertino/fiorito.jpg",
      color: "Puebla",
      categories: [
        {
          id: "loseta",
          grosor: [
            {
              value: "1 cm",
              sizes: [
                "30 x 30",
                "30 x 60",
                "40 x 40",
                "40 x 60",
                "30 x Tira LL",
                "40 x Tira LL",
              ],
            },
            {
              value: "2 cm",
              sizes: [
                "30 x 30",
                "30 x 60",
                "40 x 40",
                "40 x 60",
                "60 x 60",
                "60 x 120",
                "30 x Tira LL",
                "40 x Tira LL",
              ],
            },
          ],
        },
        { id: "lamina", grosor: "2 cm" },
      ],
      legend: ["LL = Largo Libre", "Medidas en cm"],
      acabados: [
        "Pulido y Brillado",
        "Pulido Mate",
        "Cepillado",
        "Sandblast",
        "Martelinado",
      ],
    },
    {
      sku: "trav002",
      name: "Corte Veteado",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/travertino/puebla-veteado.jpg",
      categories: [
        {
          id: "loseta",
          grosor: [
            {
              value: "1 cm",
              sizes: [
                "30 x 30",
                "30 x 60",
                "40 x 40",
                "40 x 60",
                "30 x Tira LL",
                "40 x Tira LL",
              ],
            },
            {
              value: "2 cm",
              sizes: [
                "30 x 30",
                "30 x 60",
                "40 x 40",
                "40 x 60",
                "60 x 60",
                "60 x 120",
                "30 x Tira LL",
                "40 x Tira LL",
              ],
            },
          ],
        },
        { id: "lamina", grosor: "2 cm" },
      ],
      legend: ["LL = Largo Libre", "Medidas en cm"],
      acabados: [
        "Pulido y Brillado",
        "Pulido Mate",
        "Cepillado",
        "Sandblast",
        "Martelinado",
      ],
    },
    {
      sku: "trav003",
      name: "Corte Fiorito",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/travertino/veracruz-fiorito.jpg",
      color: "Veracruz",
      categories: [
        {
          id: "loseta",
          grosor: [
            {
              value: "1 cm",
              sizes: [
                "30 x 30",
                "30 x 60",
                "40 x 40",
                "40 x 60",
                "30 x Tira LL",
                "40 x Tira LL",
              ],
            },
            {
              value: "2 cm",
              sizes: [
                "30 x 30",
                "30 x 60",
                "40 x 40",
                "40 x 60",
                "60 x 60",
                "60 x 120",
                "30 x Tira LL",
                "40 x Tira LL",
              ],
            },
          ],
        },
        { id: "lamina", grosor: "2 cm" },
      ],
      legend: ["LL = Largo Libre", "Medidas en cm"],
      acabados: [
        "Pulido y Brillado",
        "Pulido Mate",
        "Cepillado",
        "Sandblast",
        "Martelinado",
      ],
    },
    {
      sku: "trav004",
      name: "Corte Veteado",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/travertino/veracruz-veteado.jpg",
      categories: [
        {
          id: "loseta",
          grosor: [
            {
              value: "1 cm",
              sizes: [
                "30 x 30",
                "30 x 60",
                "40 x 40",
                "40 x 60",
                "30 x Tira LL",
                "40 x Tira LL",
              ],
            },
            {
              value: "2 cm",
              sizes: [
                "30 x 30",
                "30 x 60",
                "40 x 40",
                "40 x 60",
                "60 x 60",
                "60 x 120",
                "30 x Tira LL",
                "40 x Tira LL",
              ],
            },
          ],
        },
        { id: "lamina", grosor: "2 cm" },
      ],
      legend: ["LL = Largo Libre", "Medidas en cm"],
      acabados: [
        "Pulido y Brillado",
        "Pulido Mate",
        "Cepillado",
        "Sandblast",
        "Martelinado",
      ],
    },
    {
      sku: "trav005",
      name: "Corte Fiorito",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/travertino/rojo.jpg",
      color: "Travertino Rojo",
      categories: [
        {
          id: "loseta",
          grosor: [
            {
              value: "1 cm",
              sizes: [
                "30 x 30",
                "30 x 60",
                "40 x 40",
                "40 x 60",
                "30 x Tira LL",
                "40 x Tira LL",
              ],
            },
            {
              value: "2 cm",
              sizes: [
                "30 x 30",
                "30 x 60",
                "40 x 40",
                "40 x 60",
                "60 x 60",
                "60 x 120",
                "30 x Tira LL",
                "40 x Tira LL",
              ],
            },
          ],
        },
        { id: "lamina", grosor: "2 cm" },
      ],
      legend: ["LL = Largo Libre", "Medidas en cm"],
      acabados: [
        "Pulido y Brillado",
        "Pulido Mate",
        "Cepillado",
        "Sandblast",
        "Martelinado",
      ],
    },
    {
      sku: "trav008",
      name: "Corte Veteado",
      src: "../css/images/jpg/rojo-veteado.jpg",
      categories: [
        {
          id: "loseta",
          grosor: [
            {
              value: "1 cm",
              sizes: [
                "30 x 30",
                "30 x 60",
                "40 x 40",
                "40 x 60",
                "30 x Tira LL",
                "40 x Tira LL",
              ],
            },
            {
              value: "2 cm",
              sizes: [
                "30 x 30",
                "30 x 60",
                "40 x 40",
                "40 x 60",
                "60 x 60",
                "60 x 120",
                "30 x Tira LL",
                "40 x Tira LL",
              ],
            },
          ],
        },
        { id: "lamina", grosor: "2 cm" },
      ],
      legend: ["LL = Largo Libre", "Medidas en cm"],
      acabados: [
        "Pulido y Brillado",
        "Pulido Mate",
        "Cepillado",
        "Sandblast",
        "Martelinado",
      ],
    },
    {
      sku: "trav006",
      name: "Corte Fiorito",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/travertino/oro-fiorito.jpg",
      color: "Travertino Oro",
      categories: [
        {
          id: "loseta",
          grosor: [
            {
              value: "1 cm",
              sizes: [
                "30 x 30",
                "30 x 60",
                "40 x 40",
                "40 x 60",
                "30 x Tira LL",
                "40 x Tira LL",
              ],
            },
            {
              value: "2 cm",
              sizes: [
                "30 x 30",
                "30 x 60",
                "40 x 40",
                "40 x 60",
                "60 x 60",
                "60 x 120",
                "30 x Tira LL",
                "40 x Tira LL",
              ],
            },
          ],
        },
        { id: "lamina", grosor: "2 cm" },
      ],
      legend: ["LL = Largo Libre", "Medidas en cm"],
      acabados: [
        "Pulido y Brillado",
        "Pulido Mate",
        "Cepillado",
        "Sandblast",
        "Martelinado",
      ],
    },
    {
      sku: "trav007",
      name: "Corte Veteado",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/travertino/oro-veteado.jpg",
      categories: [
        {
          id: "loseta",
          grosor: [
            {
              value: "1 cm",
              sizes: [
                "30 x 30",
                "30 x 60",
                "40 x 40",
                "40 x 60",
                "30 x Tira LL",
                "40 x Tira LL",
              ],
            },
            {
              value: "2 cm",
              sizes: [
                "30 x 30",
                "30 x 60",
                "40 x 40",
                "40 x 60",
                "60 x 60",
                "60 x 120",
                "30 x Tira LL",
                "40 x Tira LL",
              ],
            },
          ],
        },
        { id: "lamina", grosor: "2 cm" },
      ],
      legend: ["LL = Largo Libre", "Medidas en cm"],
      acabados: [
        "Pulido y Brillado",
        "Pulido Mate",
        "Cepillado",
        "Sandblast",
        "Martelinado",
      ],
    },
  ];

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
