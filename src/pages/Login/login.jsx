import "./login.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const Login = ({ setMensagem }) => {
  const formSchema = yup.object().shape({
    email: yup.string().required("Esqueceu do usuário!"),
    password: yup.string().required("Esqueceu da senha"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmitFunction = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => setMensagem("Completa"))
      .catch((error) => setMensagem("Falhou"));
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <input placeholder="Usuário" {...register("email")} />
        {errors.email?.message && (
          <span className="error">{errors.email.message}</span>
        )}

        <input placeholder="Senha" {...register("password")} type="password" />
        {errors.password?.message && (
          <span className="error">{errors.password.message}</span>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Login;
