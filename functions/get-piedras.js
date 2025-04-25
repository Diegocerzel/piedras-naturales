exports.handler = async function () {
  const data = [
    {
      sku: "pied002",
      name: "Sto Tomás Machetado",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/piedras/sto-tomas-machetado.jpg",
      categories: [
        {
          id: "medidas",
          sizes: ["40 x 40", "40 x 20", "30 x 30", "30 x 40", "20 x 20"],
        },
      ],
      legend: ["Medidas en cm"],
      acabados: ["Rústico"],
    },
    {
      sku: "pied003",
      name: "Rojo Tlayua",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/piedras/rojo-tlayuda.jpg",
      categories: [
        { id: "rompecabezas", sizes: ["30 x 30", "40 x 40"] },
        { id: "laja", sizes: ["30 x 30", "40 x 40"] },
      ],
      legend: ["Medidas en cm"],
      acabados: ["Rústico"],
    },
    {
      sku: "pied004",
      name: "Negro Mixteca",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/piedras/negro-mixteca.jpg",
      categories: [
        { id: "rompecabezas", sizes: ["30 x 30", "40 x 40"] },
        { id: "laja", sizes: ["30 x 30", "40 x 40"] },
      ],
      legend: ["Medidas en cm"],
      acabados: ["Rústico"],
    },
    {
      sku: "pied001",
      name: "",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/piedras/arqueologica1.jpg",
      color: "Arqueológica",
      categories: [{ id: "Medidas", sizes: ["Cualquier medida"] }],
      legend: ["LL = Largo Libre", "Medidas en cm"],
      acabados: ["Rústico"],
    },
    {
      sku: "pied005",
      name: "",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/piedras/arqueologica2.jpg",
      categories: [{ id: "Medidas", sizes: ["Cualquier medida"] }],
      legend: ["LL = Largo Libre", "Medidas en cm"],
      acabados: ["Rústico"],
    },
  ];

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
