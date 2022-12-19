import * as yup from "yup";

export const validationSchema = yup
  .object({
    name: yup.string().required("O Nome é Obrigatório"),
    email: yup
      .string()
      .email("Digite um Email Válido")
      .required("O Email é Obrigatório"),
    city: yup.string().required("A Cidade é Obrigatória"),
    cep: yup.string().required("O Cep é Obrigatório"),
    street: yup.string().required("A Rua é Obrigatória"),
    cpf: yup.string().required("O CPF é Obrigatório"),
    pis: yup.string().required("O PIS é Obrigatório"),
    password: yup
      .string()
      .min(3, "A Senha deve conter no Mínimo 3 Caracteres.")
      .required("A Senha é Obrigatória"),
  })
  .required();
