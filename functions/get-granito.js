exports.handler = async function () {
  const data = [
    {
      sku: "grani001",
      name: "Xiamen",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/granito/xiamen.jpg",
      categories: [{ id: "lamina", grosor: "2 cm" }],
      acabados: ["Pulido", "Brillado"],
    },
    {
      sku: "grani002",
      name: "Blanco Acapulco",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/granito/acapulco.jpg",
      categories: [{ id: "lamina", grosor: "2 cm" }],
      acabados: ["Pulido", "Brillado"],
    },
    {
      sku: "grani003",
      name: "Blanco Siena",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/granito/blanco-siena-abastel.jpg",
      categories: [{ id: "lamina", grosor: "2 cm" }],
      acabados: ["Pulido", "Brillado"],
    },
    {
      sku: "grani004",
      name: "Blanco Dallas",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/granito/blanco-dallas.jpg",
      categories: [{ id: "lamina", grosor: "2 cm" }],
      acabados: ["Pulido", "Brillado"],
    },
    {
      sku: "grani005",
      name: "Ornamental",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/granito/ornamental.jpg",
      categories: [{ id: "lamina", grosor: "2 cm" }],
      acabados: ["Pulido", "Brillado"],
    },
    {
      sku: "grani006",
      name: "Maracuya",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/granito/maracuya.jpg",
      categories: [{ id: "lamina", grosor: "2 cm" }],
      acabados: ["Pulido", "Brillado"],
    },
    {
      sku: "grani007",
      name: "Gris Oxford",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/granito/gris-oxford.jpg",
      categories: [{ id: "lamina", grosor: "2 cm" }],
      acabados: ["Pulido", "Brillado"],
    },
    {
      sku: "grani008",
      name: "Negro San Gabriel",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/granito/negro-san-gabriel.jpg",
      categories: [{ id: "lamina", grosor: "2 cm" }],
      acabados: ["Pulido", "Brillado"],
    },
    {
      sku: "grani009",
      name: "Santa Cecilia",
      src: "https://raw.githubusercontent.com/smoothdev35/oliman-pics/master/granito/sta-cecilia.jpg",
      categories: [{ id: "lamina", grosor: "2 cm" }],
      acabados: ["Pulido", "Brillado"],
    },
  ];

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
