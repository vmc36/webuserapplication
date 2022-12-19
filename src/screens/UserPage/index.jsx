import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { CommitButton } from "../../components/button.jsx";
import { LabelForm } from "../../components/label.jsx";
import { validationSchema } from "../../validators/index.jsx";

import { useNavigate, useLocation } from "react-router-dom";

export default function UserPage() {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(validationSchema) });

  const { state } = useLocation();

  const onSubmit = (data) => {
    const userCollection = JSON.parse(localStorage.getItem("userList") || "[]");
    userCollection[state.index] = data;
    localStorage.setItem("userList", JSON.stringify(userCollection));
    window.alert("Informações alteradas com Sucesso!");
  };

  const deleteUser = () => {
    if (window.confirm("Você realmente deseja excluir suas informações?")) {
      const userCollection = JSON.parse(
        localStorage.getItem("userList") || "[]"
      );
      userCollection.splice(state.index, 1);
      localStorage.setItem("userList", JSON.stringify(userCollection));
      navigate("/");
    }
  };

  return (
    <>
      <div className="w-full h-full items-center flex justify-center bg-primaryColor ">
        <div className="w-4/5 h-full flex justify-center items-center flex-col rounded-xl bg-white my-6 ">
          <h1 className="text-3xl font-bold mb-5 p-3 text-center sm:text-xl sm:w-9/12 sm:mb-0">
            Olá {state.name}!
          </h1>
          <div className="h-8 flex flex-col justify-between">
            <a href="/" className="flex justify-end exitPosition">
              <img src="/exit.svg" alt="exit icon" />
            </a>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full h-full items-center flex flex-col"
          >
            <LabelForm label="Nome:" />
            <input
              className="styleInput"
              placeholder="Seu Nome"
              defaultValue={state.name}
              type="text"
              {...register("name", { required: true })}
            />
            <span className="text-red-600">{errors.name?.message}</span>
            <LabelForm label="Email:" />
            <input
              className="styleInput"
              placeholder="exemple@email.com"
              defaultValue={state.email}
              type="email"
              {...register("email", { required: true })}
            />
            <span className="text-red-600">{errors.email?.message}</span>
            <LabelForm label="País:" />
            <input
              className="styleInput"
              placeholder="Seu País"
              defaultValue={state.country}
              type="text"
              {...register("country")}
            />
            <LabelForm label="Estado:" />
            <input
              className="styleInput"
              defaultValue={state.state}
              placeholder="Seu Estado"
              type="text"
              {...register("state")}
            />
            <LabelForm label="Cidade:" />
            <input
              className="styleInput"
              defaultValue={state.city}
              placeholder="Sua cidade:"
              type="text"
              {...register("city", { required: true })}
            />
            <span className="text-red-600">{errors.city?.message}</span>
            <LabelForm label="CEP:" />
            <input
              defaultValue={state.cep}
              className="styleInput"
              placeholder="Cep"
              type="text"
              {...register("cep", { required: true })}
            />
            <span className="text-red-600">{errors.cep?.message}</span>
            <LabelForm label="Rua:" />
            <input
              className="styleInput"
              defaultValue={state.street}
              placeholder="Rua:"
              type="text"
              {...register("street", { required: true })}
            />
            <span className="text-red-600">{errors.street?.message}</span>
            <LabelForm label="Complemento:" />
            <input
              className="styleInput"
              defaultValue={state.complement}
              placeholder="Complemento:"
              type="text"
              {...register("complement")}
            />
            <LabelForm label="CPF:" />
            <input
              className="styleInput"
              defaultValue={state.cpf}
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
              defaultValue={state.pis}
              placeholder="Seu numero PIS"
              type="text"
              {...register("pis", { required: true })}
            />
            <span className="text-red-600">{errors.pis?.message}</span>
            <LabelForm label="Senha:" />
            <input
              className="styleInput"
              defaultValue={state.password}
              placeholder="Sua Senha"
              type="password"
              {...register("password", { required: true })}
            />
            <span className="text-red-600">{errors.password?.message}</span>
            <CommitButton text="Atualizar Cadastro" type="submit" />
          </form>
          <a onClick={deleteUser} className="flex cursor-pointer justify-end">
            <img
              src="/delete.svg"
              className="deletePosition"
              alt="delete icon"
            />
          </a>
        </div>
      </div>
    </>
  );
}
