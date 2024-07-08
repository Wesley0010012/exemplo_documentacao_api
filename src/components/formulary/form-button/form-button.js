import "../../constants/colors.css";
import "./form-button.css";

const FormButton = (props) => {
  const { title, action, status } = props;

  return (
    <>
      <button className={`form-button ${status}`} onClick={() => action()}>
        {title}
      </button>
    </>
  );
};

export default FormButton;
