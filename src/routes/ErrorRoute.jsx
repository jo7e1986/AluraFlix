import { useRouteError } from "react-router-dom";

function ErrorRoute() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen pt-10 text-center text-white bg-gray-900">
      <h1 className="mb-1 text-xl sm:text-2xl">Oops!</h1>
      <p className="mb-2 text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-lg text-red-500">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorRoute;
