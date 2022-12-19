import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { CommitButton } from "../../components/button.jsx";
import { LabelForm } from "../../components/label.jsx";
import { validationSchema } from "../../validators/index.jsx";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(validationSchema) });

  const handleReset = () => {
    {
      Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
      );
    }
  };

  const onSubmit = (data) => {
    const userCollection = JSON.parse(localStorage.getItem("userList") || "[]");
    userCollection.push(data);
    localStorage.setItem("userList", JSON.stringify(userCollection));
    window.alert("Usuário cadastrado com sucesso, verifique o localstorage.");
    navigate("/");
  };

  return (
    <>
      <div className="w-full h-full items-center flex justify-center bg-primaryColor ">
        <div className="w-4/5 h-full flex justify-center items-center flex-col rounded-xl bg-white my-6 ">
          <h1 className="text-3xl font-bold mb-5 p-3 text-center">Cadastro</h1>
          <a href="/" className="flex justify-end exitPosition">
            <img src="/exit.svg" alt="exit icon" />
          </a>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full h-full items-center flex flex-col"
          >
            <LabelForm label="Nome:" />
            <input
              className="styleInput"
              placeholder="Seu Nome"
              type="text"
              {...register("name", { required: true })}
            />
            <span className="text-red-600">{errors.name?.message}</span>
            <LabelForm label="Email:" />
            <input
              className="styleInput"
              placeholder="exemple@email.com"
              type="email"
              {...register("email", { required: true })}
            />
            <span className="text-red-600">{errors.email?.message}</span>
            <LabelForm label="País:" />
            <input
              className="styleInput"
              placeholder="Seu País"
              type="text"
              {...register("country")}
            />
            <LabelForm label="Estado:" />
            <input
              className="styleInput"
              placeholder="Seu Estado"
              type="text"
              {...register("state")}
            />
            <LabelForm label="Cidade:" />
            <input
              className="styleInput"
              placeholder="Sua cidade:"
              type="text"
              {...register("city", { required: true })}
            />
            <span className="text-red-600">{errors.city?.message}</span>
            <LabelForm label="CEP:" />
            <input
              className="styleInput"
              placeholder="Cep:"
              type="text"
              {...register("cep", { required: true })}
            />
            <span className="text-red-600">{errors.cep?.message}</span>
            <LabelForm label="Rua:" />
            <input
              className="styleInput"
              placeholder="Rua:"
              type="text"
              {...register("street", { required: true })}
            />
            <span className="text-red-600">{errors.street?.message}</span>
            <LabelForm label="Complemento:" />
            <input
              className="styleInput"
              placeholder="Complemento:"
              type="text"
              {...register("complement")}
            />
            <LabelForm label="CPF:" />
            <input
              className="styleInput"
              placeholder="Seu CPF:"
              type="text"
              {...register("cpf", {
                required: true,
              })}
            />
            <span className="text-red-600">{errors.cpf?.message}</span>
            <LabelForm label="PIS:" />
            <input
              className="styleInput"
              placeholder="Seu numero PIS"
              type="text"
              {...register("pis", { required: true })}
            />
            <span className="text-red-600">{errors.pis?.message}</span>
            <LabelForm label="Senha:" />
            <input
              className="styleInput"
              placeholder="Sua Senha"
              type="password"
              {...register("password", { required: true })}
            />
            <span className="text-red-600">{errors.password?.message}</span>
            <CommitButton
              onClick={Object.keys(errors).length === 0 ? handleReset : null}
              text="Finalizar Cadastro"
              type="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
}
