exports.handler = async function () {
  const data = [
    {
      sku: "cant001",
      name: "Blanca Galarza",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/canteras/galarza.jpg",
      categories: [
        {
          id: "laja",
          sizes: [
            "40 x 60",
            "40 x 40",
            "30 x 30",
            "20 x 40",
            "20 x 30",
            "20 x 20",
            "20 x LL",
            "10 x LL",
            "5 x LL",
          ],
        },
      ],
      legend: ["LL = Largo Libre", "Medidas en cm"],
      acabados: ["Rústico", "Laminado"],
    },
    {
      sku: "cant002",
      name: "Riviera Beige",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/canteras/riviera-beige.jpg",
      categories: [
        {
          id: "laja",
          sizes: [
            "40 x 60",
            "40 x 40",
            "30 x 30",
            "20 x 40",
            "20 x 30",
            "30 x 30",
            "20 x LL",
            "10 x LL",
            "5 x LL",
          ],
        },
      ],
      legend: ["LL = Largo Libre", "Medidas en cm"],
      acabados: ["Rústico", "Laminado"],
    },
    {
      sku: "cant003",
      name: "Blanca Cancún",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/canteras/blanca-cancun.jpg",
      categories: [{ id: "medidas", sizes: ["30 x 30", "40 x 40", "40 x 60"] }],
      legend: ["Medidas en cm"],
      acabados: ["Laminado"],
    },
    {
      sku: "cant004",
      name: "Rosa Huichapan",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/canteras/rosa.jpg",
      categories: [{ id: "medidas", sizes: ["30 x 30", "40 x 40", "40 x 60"] }],
      legend: ["Medidas en cm"],
      acabados: ["Laminado"],
    },
    {
      sku: "cant005",
      name: "Naranja Huichapan",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/canteras/naranja.jpg",
      categories: [{ id: "medidas", sizes: ["30 x 30", "40 x 40", "40 x 60"] }],
      legend: ["Medidas en cm"],
      acabados: ["Laminado"],
    },
    {
      sku: "cant006",
      name: "Café Huichapan",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/canteras/cafe.jpg",
      categories: [{ id: "medidas", sizes: ["30 x 30", "40 x 40", "40 x 60"] }],
      legend: ["Medidas en cm"],
      acabados: ["Laminado"],
    },
    {
      sku: "cant007",
      name: "Negra Huichapan",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/canteras/Negra.jpg",
      categories: [{ id: "medidas", sizes: ["30 x 30", "40 x 40", "40 x 60"] }],
      legend: ["Medidas en cm"],
      acabados: ["Laminado"],
    },
  ];

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
