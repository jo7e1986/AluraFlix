/* eslint-disable react/prop-types */
import { useApp } from "../context/appContext";
import { FaSpinner } from "react-icons/fa";

function Loader({ children }) {
  const { isLoading } = useApp();

  if (isLoading)
    return (
      <div className="flex justify-center min-h-screen pt-10 bg-gray-900">
        <FaSpinner className="h-full text-blue-500 w-28 animate-spin" />
      </div>
    );

  return <>{children}</>;
}

export default Loader;
