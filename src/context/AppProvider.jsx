/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { appContext } from "./appContext";
import { createVideoRequest, getVideosRequest } from "../api/videosRequests";
import {
  createCategoriaRequest,
  deleteCategoriaRequest,
  getCategoriaRequest,
  getCategoriasRequest,
  updateCategoriaRequest,
} from "../api/categoriasRequests";
import { useNavigate } from "react-router-dom";

function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const navigate = useNavigate();

  const getVideos = async () => {
    try {
      const { status, data } = await getVideosRequest();
      if (status === 200) setVideos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategorias = async () => {
    try {
      const { status, data } = await getCategoriasRequest();
      if (status === 200) setCategorias(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    await getVideos();
    await getCategorias();
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const createVideo = async (video) => {
    try {
      const { status, data } = await createVideoRequest(video);
      if (status === 201) {
        setVideos([...videos, data]);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createCategoria = async (categoria) => {
    try {
      const { status, data } = await createCategoriaRequest(categoria);
      if (status === 201) {
        setCategorias([...categorias, data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCategoria = async (id) => {
    try {
      const { status, data } = await getCategoriaRequest(id);
      if (status === 200) return data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateCategoria = async (id, categoria) => {
    try {
      const { status, data } = await updateCategoriaRequest(id, categoria);
      if (status === 200) {
        setCategorias(categorias.map((c) => (c.id === id ? data : c)));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCategoria = async (id) => {
    try {
      const { status } = await deleteCategoriaRequest(id);
      if (status === 200) {
        setCategorias(categorias.filter((c) => c.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <appContext.Provider
      value={{
        isLoading,
        videos,
        categorias,
        createVideo,
        createCategoria,
        getCategoria,
        updateCategoria,
        deleteCategoria,
      }}
    >
      {children}
    </appContext.Provider>
  );
}

export default AppProvider;
