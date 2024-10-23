const CheckBoxList = () => {
  interface checkBoxItem {
    id: number;
    name: String;
  }

  const provinces = [
    {
        id: 1,
        name: "Buenos Aires"
      },
      {
        id: 2,
        name: "Catamarca"
      },
      {
        id: 3,
        name: "Chaco"
      },
      {
        id: 4,
        name: "Chubut"
      },
      {
        id: 5,
        name: "Córdoba"
      },
      {
        id: 6,
        name: "Corrientes"
      },
      {
        id: 7,
        name: "Entre Ríos"
      },
      {
        id: 8,
        name: "Formosa"
      },
      {
        id: 9,
        name: "Jujuy"
      },
      {
        id: 10,
        name: "La Pampa"
      },
      {
        id: 11,
        name: "La Rioja"
      },
      {
        id: 12,
        name: "Mendoza"
      },
      {
        id: 13,
        name: "Misiones"
      },
      {
        id: 14,
        name: "Neuquén"
      },
      {
        id: 15,
        name: "Río Negro"
      },
      {
        id: 16,
        name: "Salta"
      },
      {
        id: 17,
        name: "San Juan"
      },
      {
        id: 18,
        name: "San Luis"
      },
      {
        id: 19,
        name: "Santa Cruz"
      },
      {
        id: 20,
        name: "Santa Fe"
      },
      {
        id: 21,
        name: "Santiago del Estero"
      },
      {
        id: 22,
        name: "Tierra del Fuego"
      },
      {
        id: 23,
        name: "Tucumán"
      }
      ,{
        id: 24,
        name: "Capital Federal"
      }
  ];

  return (
    <div className="flex flex-col overflow-y-auto max-h-56">
      {provinces.map((item, index) => (
        <label className="text-black" key={item.id}>
          <input type="checkbox" value={item.id} />
        {" " + item.name}
        </label>
      ))}
    </div>
  );
};

export default CheckBoxList;
