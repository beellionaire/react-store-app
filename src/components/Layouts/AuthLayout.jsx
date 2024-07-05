import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  {
    console.log(isDarkMode);
  }
  return (
    <div className={`min-h-screen flex justify-center items-center bg-slate-200 ${isDarkMode && "bg-slate-900"}`}>
      <div className="max-w-xs w-full ">
        <button className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? "Light" : "Dark"}</button>
        <h1 className="text-slate-700 font-bold text-3xl mb-2 font-inter">
          {title}
        </h1>
        <p className="text-sm font-inter text-slate-400 mb-8">
          Masukkan Email dan Password anda
        </p>
        {children}
        <Navigation type={type} />

        {/* kalau kondisi hanya 2, lebih baik gunakan ternary
       <p className="text-sm font-inter text-slate-400 mt-5 text-center">
       {type === "login" ? "Belum punya akun? " : "Sudah punya akun? "} */}
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm font-inter text-slate-400 mt-5 text-center">
        Belum punya akun?{" "}
        <Link className="text-blue-500" to="/register">
          Daftar
        </Link>
      </p>
    );
  } else if (type === "register") {
    return (
      <p className="text-sm font-inter text-slate-400 mt-5 text-center">
        Sudah punya akun?{" "}
        <Link className="text-blue-500" to="/login">
          Masuk
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
