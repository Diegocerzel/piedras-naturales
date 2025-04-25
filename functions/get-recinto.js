exports.handler = async function () {
  const data = [
    {
      sku: "reci001",
      name: "Negro",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/recinto/negro.jpg",
      categories: [{ id: "medidas", grosor: "2 cm" }],
      acabados: ["Laminado, Rústico"],
    },
    {
      sku: "reci002",
      name: "Gris",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/recinto/gris.jpg",
      categories: [{ id: "medidas", grosor: "2 cm" }],
      acabados: ["Laminado, Rústico"],
    },
    {
      sku: "reci003",
      name: "Uva",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/recinto/uva.jpg",
      categories: [{ id: "medidas", grosor: "2 cm" }],
      acabados: ["Laminado, Rústico"],
    },
  ];

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
