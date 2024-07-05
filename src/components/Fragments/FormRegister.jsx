import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="First Name"
        name="firstName"
        type="text"
        placeholder="Nama Depan"
      />
      <InputForm
        label="Last Name"
        name="lastName"
        type="text"
        placeholder="Nama Belakang"
      />
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="Masukkan Email"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="Masukkan Password"
      />
      <Button classname="bg-blue-700 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
