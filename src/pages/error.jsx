import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <h1 className="font-bold text-5xl">Oops!</h1>
      <p className="my-5 text-xl">Woiiiii, Error Kocakkk</p>
      <p className="text-lg">{error.statusText || error.message}</p>
    </div>
  )
}

export default ErrorPage