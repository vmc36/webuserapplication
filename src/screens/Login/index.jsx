import { CommitButton } from "../../components/button.jsx";
import React, { useState } from "react";
import "../../global.css";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [allValues, setAllValues] = useState({
    userId: "",
    userPassword: "",
  });

  const handleAllValues = (event) => {
    setAllValues({ ...allValues, [event.target.name]: event.target.value });
  };

  const loginWithLocalStorage = () => {
    const userData = JSON.parse(localStorage.getItem("userList"));

    for (var i = 0; i < userData.length; i++) {
      if (
        (allValues.userId === userData[i].cpf ||
          allValues.userId === userData[i].pis) &&
        allValues.userPassword === userData[i].password
      ) {
        navigate(`/userpage`);
        break;
      } else {
        window.alert("Dados Inválidos");
        break;
      }
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="w-full h-screen items-center flex justify-center bg-primaryColor ">
        <div className="w-1/2 h-3/4 rounded-xl bg-white sm:h-3/4 sm:w-11/12 ">
          <form
            onSubmit={handleSubmit}
            className="flex h-full justify-center items-center flex-col gap-4 rounded-xl"
          >
            <h1 className="text-3xl font-bold mb-5 text-center">
              Olá Visitante
            </h1>

            <div className="w-full flex justify-center ">
              <label className="rounded" name="cpfis" id="cpfis">
                {" "}
              </label>
              <input
                className="styleInput"
                type="text"
                placeholder="Insira seu CPF ou PIS"
                onChange={handleAllValues}
                name="userId"
              />
            </div>
            <div className="w-full flex justify-center ">
              <label className="rounded" name="password" id="password">
                {" "}
              </label>
              <input
                className="styleInput"
                type="password"
                placeholder="Insira sua senha"
                onChange={handleAllValues}
                name="userPassword"
              />
            </div>

            <CommitButton
              text="Login"
              type="submit"
              onClick={loginWithLocalStorage}
            />
            <p className="text-center">
              Não possui uma conta? <br />{" "}
              <a href="/signup" className="text-center block">
                <strong>Clique Aqui</strong> para criar uma.
              </a>{" "}
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
