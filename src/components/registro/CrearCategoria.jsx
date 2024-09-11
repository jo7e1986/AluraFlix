/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import { useApp } from "../../context/appContext";
import { useState } from "react";

const categoriaInitialValues = {
  nombre: "",
  descripcion: "",
  color: "#000000",
  codigoSeguridad: "",
};

function CrearCategoria() {
  const {
    createCategoria,
    categorias,
    getCategoria,
    updateCategoria,
    deleteCategoria,
  } = useApp();
  const [currentId, setCurrentId] = useState(null);
  const { handleSubmit, handleChange, values, resetForm, setValues } =
    useFormik({
      initialValues: categoriaInitialValues,
      onSubmit: async (values) => {
        if (currentId) {
          await updateCategoria(currentId, values);
          setCurrentId(null);
        } else {
          await createCategoria(values);
        }
        resetForm();
      },
    });

  const fetchCategoria = async (id) => {
    const data = await getCategoria(id);
    setValues(data);
    setCurrentId(id);
  };

  function TableCategoria({ categoria }) {
    const { nombre, descripcion, id } = categoria;

    return (
      <tbody>
        <tr>
          <td className="px-4 py-2 border">{nombre}</td>
          <td className="px-4 py-2 border">{descripcion}</td>
          <td
            className="px-4 py-2 transition-colors border cursor-pointer hover:text-red-500"
            onClick={() => fetchCategoria(id)}
          >
            Editar
          </td>
          <td
            className="px-4 py-2 transition-colors border cursor-pointer hover:text-blue-500"
            onClick={() => deleteCategoria(id)}
          >
            Remover
          </td>
        </tr>
      </tbody>
    );
  }

  const Table = () => (
    <table className="w-full table-auto">
      <thead>
        <tr className="font-semibold">
          <th className="px-4 py-2">Nombre</th>
          <th className="px-4 py-2">Descripcion</th>
          <th className="px-4 py-2">Editar</th>
          <th className="px-4 py-2">Remover</th>
        </tr>
      </thead>
      {categorias.map((categoria) => (
        <TableCategoria key={categoria.id} categoria={categoria} />
      ))}
    </table>
  );

  return (
    <div className="w-full mx-auto max-w-7xl">
      <h1 className="mb-5 text-xl text-center sm:text-2xl">
        {currentId ? "Actualizar" : "Nueva"} Categoria
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 mb-5 text-lg "
      >
        <input
          type="text"
          name="nombre"
          onChange={handleChange}
          value={values.nombre}
          placeholder="Nombre"
          className="w-full px-2 py-1 bg-gray-700 rounded"
        />

        <textarea
          name="descripcion"
          onChange={handleChange}
          value={values.descripcion}
          placeholder="Descripcion"
          className="w-full px-2 py-1 bg-gray-700 rounded resize-none"
        ></textarea>

        <input
          type="color"
          name="color"
          onChange={handleChange}
          value={values.color}
          placeholder="Color"
          className="w-full px-2 py-1 bg-gray-700 rounded"
        />

        <input
          type="text"
          name="codigoSeguridad"
          onChange={handleChange}
          value={values.codigoSeguridad}
          placeholder="Codigo de seguridad"
          className="w-full px-2 py-1 bg-gray-700 rounded"
        />
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
      </form>
      <Table />
    </div>
  );
}

export default CrearCategoria;
