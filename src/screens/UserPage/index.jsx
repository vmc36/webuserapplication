import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from "react";

import { CommitButton } from "../../components/button.jsx";
import { LabelForm } from "../../components/label.jsx";
import { validationSchema } from "../../validators/index.jsx";

export default function UserPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(validationSchema) });

  const [getUserInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const getUserInfo = JSON.parse(localStorage.getItem("userList"));
    console.log(getUserInfo);
    if (getUserInfo) {
      setUserInfo(getUserInfo);
    }
  }, []);

  return (
    <>
      <div className="w-full h-full items-center flex justify-center bg-primaryColor ">
        <div className="w-4/5 h-full flex justify-center items-center flex-col rounded-xl bg-white my-6 ">
          <h1 className="text-3xl font-bold mb-5 p-3 text-center">
            Olá {getUserInfo.name}!
          </h1>
          <a href="/" className="flex justify-end exitPosition">
            <img src="/src/assets/exit.svg" alt="exit icon" />
          </a>

          <form
            onSubmit={handleSubmit()}
            className="w-full h-full items-center flex flex-col"
          >
            <LabelForm label="Nome:" />
            <input
              className="styleInput"
              placeholder="Seu Nome"
              value={getUserInfo.name}
              type="text"
              {...register("name", { required: true })}
            />
            <span className="text-red-600">{errors.name?.message}</span>
            <LabelForm label="Email:" />
            <input
              className="styleInput"
              placeholder="exemple@email.com"
              value={getUserInfo.email}
              type="email"
              {...register("email", { required: true })}
            />
            <span className="text-red-600">{errors.email?.message}</span>
            <LabelForm label="País:" />
            <input
              className="styleInput"
              placeholder="Seu País"
              value={getUserInfo.country}
              type="text"
              {...register("country")}
            />
            <LabelForm label="Estado:" />
            <input
              className="styleInput"
              placeholder="Seu Estado"
              value={getUserInfo.state}
              type="text"
              {...register("state")}
            />
            <LabelForm label="Cidade:" />
            <input
              className="styleInput"
              placeholder="Sua cidade:"
              value={getUserInfo.city}
              type="text"
              {...register("city", { required: true })}
            />
            <span className="text-red-600">{errors.city?.message}</span>
            <LabelForm label="CEP:" />
            <input
              mask={"00000-000"}
              className="styleInput"
              placeholder="Cep"
              value={getUserInfo.cep}
              type="text"
              {...register("cep", { required: true })}
            />
            <span className="text-red-600">{errors.cep?.message}</span>
            <LabelForm label="Rua:" />
            <input
              className="styleInput"
              placeholder="Rua:"
              value={getUserInfo.street}
              type="text"
              {...register("street", { required: true })}
            />
            <span className="text-red-600">{errors.street?.message}</span>
            <LabelForm label="Complemento:" />
            <input
              className="styleInput"
              placeholder="Complemento:"
              value={getUserInfo.complement}
              type="text"
              {...register("complement")}
            />
            <LabelForm label="CPF:" />
            <input
              mask={"000.000.000-00"}
              className="styleInput"
              placeholder="Seu CPF:"
              value={getUserInfo.cpf}
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
              value={getUserInfo.pis}
              type="text"
              {...register("pis", { required: true })}
            />
            <span className="text-red-600">{errors.pis?.message}</span>
            <LabelForm label="Senha:" />
            <input
              className="styleInput"
              placeholder="Sua Senha"
              value={getUserInfo.password}
              type="password"
              {...register("password", { required: true })}
            />
            <span className="text-red-600">{errors.password?.message}</span>
            <CommitButton
              //   onClick={Object.keys(errors).length === 0 ?  : ""}
              text="Finalizar Cadastro"
              type="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
}
