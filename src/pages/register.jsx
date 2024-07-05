import FormRegister from "../components/Fragments/FormRegister"
import AuthLayout from "../components/Layouts/AuthLayout"

const RegisterPage = () => {
  return (
    <AuthLayout title="Register" type="register">
         <FormRegister />
         {/* <p className="text-sm font-inter text-slate-400 mt-5 text-center">Sudah punya akun?{" "}
           <Link className="text-blue-500" to="/login">Masuk</Link>
         </p> */}
    </AuthLayout>
  )
}

export default RegisterPage