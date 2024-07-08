const FormularyConfig = {
  title: "Api Clientes - Login",
  inputs: [
    {
      label: "Codigo",
      inputType: "text",
      inputName: "codigo",
      placeholder: "Digite o Código da sua conta...",
    },
    {
      label: "Senha",
      inputType: "password",
      inputName: "senha",
      placeholder: "Digite a senha da sua conta...",
    },
  ],
  button: {
    title: "Login",
    status: "primary-red",
  },
};

module.exports = FormularyConfig;
