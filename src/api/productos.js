const getProductos = () => {
  const info = [
    {
      id: 1,
      nombre: "celular 1",
      descripcion: "descripcion 1",
      precio: 5000,
      stock: 10,
      enCarrito: false,
    },
    {
      id: 2,
      nombre: "celular 2",
      descripcion: "descripcion 2",
      precio: 8500,
      stock: 10,
      enCarrito: false,
    },
    {
      id: 3,
      nombre: "celular 3",
      descripcion: "descripcion 3",
      precio: 7000,
      stock: 10,
      enCarrito: false,
    },
    {
      id: 4,
      nombre: "celular 4",
      descripcion: "descripcion 4",
      precio: 6000,
      stock: 10,
      enCarrito: false,
    },
  ];
  return JSON.parse(info);
  /*,
    {
      id: 5,
      nombre: "celular 5",
      descripcion: "descripcion 5",
      precio: 10000,
      stock: 10,
    },
    {
      id: 6,
      nombre: "celular 6",
      descripcion: "descripcion 6",
      precio: 13000,
      stock: 10,
    },
    {
      id: 7,
      nombre: "celular 7",
      descripcion: "descripcion 7",
      precio: 7899,
      stock: 10,
    },
    {
      id: 8,
      nombre: "celular 8",
      descripcion: "descripcion 8",
      precio: 6700,
      stock: 10,
    },
    {
      id: 9,
      nombre: "celular 9",
      descripcion: "descripcion 9",
      precio: 11000,
      stock: 10,
    },
    {
      id: 10,
      nombre: "celular 10",
      descripcion: "descripcion 10",
      precio: 14000,
      stock: 10,
    },
    
  ,];*/
};

export default getProductos;
