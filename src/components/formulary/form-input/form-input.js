import "./form-input.css";

const FormInput = (props) => {
  const { label, inputType, inputName, inputClass, placeholder } = props;

  return (
    <div className={inputClass}>
      <label>{label}</label>
      <input type={inputType} name={inputName} placeholder={placeholder} />
    </div>
  );
};

export default FormInput;
