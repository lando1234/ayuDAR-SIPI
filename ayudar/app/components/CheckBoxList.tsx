import { useEffect } from "react";

const provinces = [
  "Buenos Aires",
  "Catamarca",
  "Chaco",
  "Chubut",
  "Córdoba",
  "Corrientes",
  "Entre Ríos",
  "Formosa",
  "Jujuy",
  "La Pampa",
  "La Rioja",
  "Mendoza",
  "Misiones",
  "Neuquén",
  "Río Negro",
  "Salta",
  "San Juan",
  "San Luis",
  "Santa Cruz",
  "Santa Fe",
  "Santiago del Estero",
  "Tierra del Fuego",
  "Tucumán"
] as const;

export type Province = typeof provinces[number];



interface CheckBoxListProps {
  selectedProvinces: String[];
  setSelectedProvinces: React.Dispatch<React.SetStateAction<String[]>>;
}

const CheckBoxList: React.FC<CheckBoxListProps> = ({
  selectedProvinces,
  setSelectedProvinces,
}) => {


  const handleCheckBoxChange = (province: Province) => {
    console.log(selectedProvinces)
    setSelectedProvinces((prevSelected) =>
      prevSelected.includes(province)
        ? prevSelected.filter((p) => p !== province)
        : [...prevSelected, province]
    );
  };

  useEffect(() => { 
    console.log(selectedProvinces);
  },[selectedProvinces])

  return (
    <div className="flex flex-col overflow-y-auto max-h-56">
      {provinces.map((province) => (
        <div
          className="flex mb-2 border-solid border-gray-100 border-t-2 border-b-2"
          key={province}
        >
          <input
            type="checkbox"
            value={province}
            checked={selectedProvinces.includes(province)}
            className=" w-4 h-4 border-2 rounded-sm text-black mt-1"
            onChange={() => handleCheckBoxChange(province)}
          />
          <label className="text-black text-lg ml-1" key={province}>
            {province}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckBoxList;
