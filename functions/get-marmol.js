exports.handler = async function () {
  const data = [
    {
      sku: "marm001",
      name: "Santo Tomás",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/marmol/sto-tomas.jpg",
      color: "Gris",
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
      sku: "marm002",
      name: "Gris Jaspe",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/marmol/gris-jaspe.jpg",
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
      sku: "marm003",
      name: "Bellagio",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/marmol/bellagio.jpg",
      color: "Beige",
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
      sku: "marm004",
      name: "Beige Maya",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/marmol/beige-maya.jpg",
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
      sku: "marm006",
      name: "Arena",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/marmol/arena-mate.jpg",
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
      sku: "marm007",
      name: "Córdoba",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/marmol/cordoba-mate.jpg",
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
      sku: "marm008",
      name: "Dorado Tepexi",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/marmol/dorado-tepexi.jpg",
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
      sku: "marm009",
      name: "Negro Querétaro",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/marmol/negro-queretaro.jpg",
      color: "Negro",
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
      sku: "marm010",
      name: "Blanco Bego",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/marmol/blanco-bego.jpg",
      color: "Blanco",
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
      sku: "marm011",
      name: "Blanco Veneciano",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/marmol/blanco-veneciano.jpg",
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
