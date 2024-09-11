import { useApp } from "../../context/appContext";
import Categoria from "./Categoria";

function Carrusel() {
  const { categorias } = useApp();

  return (
    <section className="p-5">
      <div className="container flex flex-col gap-10 mx-auto">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </div>
    </section>
  );
}

export default Carrusel;
