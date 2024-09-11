/* eslint-disable react/prop-types */
import { useApp } from "../../context/appContext";
import SimpleSlider from "./SimpleSlider";

function Categoria({ categoria }) {
  const { nombre, descripcion, color } = categoria;
  const { videos } = useApp();
  const filterVideos = videos.filter((v) => v.categoria === nombre);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <h4
          style={{ backgroundColor: color }}
          className="inline-block px-4 py-2 mb-2 text-xl text-white bg-blue-500 rounded sm:text-2xl"
        >
          {nombre}
        </h4>
        <p className="text-lg sm:text-xl">{descripcion}</p>
      </div>
      <SimpleSlider videos={filterVideos} color={color} />
    </div>
  );
}

export default Categoria;
