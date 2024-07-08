import "./login-formulary.css";

import FormularyConfig from "../formulary.config";

import FormInput from "../form-input/form-input";
import FormButton from "../form-button/form-button";

const LoginFormulary = () => {
  const inputs = FormularyConfig.inputs;
  const button = FormularyConfig.button;

  return (
    <form className="login-formulary">
      <div className="form-title">
        <h1>{FormularyConfig.title}</h1>
      </div>
      <div className="form-body">
        {inputs.map((input) => (
          <FormInput
            label={input.label}
            inputType={input.inputType}
            inputName={input.inputName}
            inputClass="login-input"
            placeholder={input.label}
          />
        ))}
        <div className="form-button">
          <FormButton
            title={button.title}
            status={button.status}
            action={() => console.log("test")}
          />
        </div>
      </div>
    </form>
  );
};

export default LoginFormulary;
