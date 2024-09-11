import { useFormik } from "formik";
import { useApp } from "../../context/appContext";
import { Link } from "react-router-dom";

const videoInitialValues = {
  titulo: "",
  urlVideo: "",
  urlImagen: "",
  categoria: "",
  descripcion: "",
  codigoSeguridad: "",
};

function CrearVideo() {
  const { createVideo } = useApp();
  const { handleSubmit, handleChange, values, resetForm } = useFormik({
    initialValues: videoInitialValues,
    onSubmit: async (values) => {
      await createVideo(values);
    },
  });

  return (
    <div>
      <h1 className="mb-5 text-xl text-center sm:text-2xl">Nuevo Video</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full gap-5 mx-auto text-lg max-w-7xl"
      >
        <input
          type="text"
          name="titulo"
          placeholder="Titulo"
          onChange={handleChange}
          value={values.titulo}
          className="w-full px-2 py-1 bg-gray-700 rounded"
        />

        <input
          type="url"
          name="urlVideo"
          placeholder="Link del video"
          onChange={handleChange}
          value={values.urlVideo}
          className="w-full px-2 py-1 bg-gray-700 rounded"
        />

        <input
          type="url"
          name="urlImagen"
          placeholder="Link imagen del video"
          onChange={handleChange}
          value={values.urlImagen}
          className="w-full px-2 py-1 bg-gray-700 rounded"
        />

        <input
          type="text"
          name="categoria"
          placeholder="Escoja una categoria"
          onChange={handleChange}
          value={values.categoria}
          className="w-full px-2 py-1 bg-gray-700 rounded"
        />

        <textarea
          name="descripcion"
          placeholder="Descripcion"
          onChange={handleChange}
          value={values.descripcion}
          className="w-full px-2 py-1 bg-gray-700 rounded resize-none"
        ></textarea>

        <input
          type="text"
          name="codigoSeguridad"
          placeholder="Codigo de seguridad"
          onChange={handleChange}
          value={values.codigoSeguridad}
          className="w-full px-2 py-1 bg-gray-700 rounded"
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <button
              type="submit"
              className="px-4 py-2 text-lg text-white transition-colors bg-blue-500 rounded hover:bg-blue-700 sm:text-xl"
            >
              Guardar
            </button>
            <button
              type="button"
              onClick={() => resetForm()}
              className="px-4 py-2 text-lg text-white transition-colors bg-gray-500 rounded hover:bg-gray-700 sm:text-xl"
            >
              Limpiar
            </button>
          </div>
          <Link
            to="/nueva-categoria"
            className="px-4 py-2 text-lg text-white transition-colors bg-blue-500 rounded hover:bg-blue-700 sm:text-xl"
          >
            Nueva Categoria
          </Link>
        </div>
      </form>
    </div>
  );
}

export default CrearVideo;
