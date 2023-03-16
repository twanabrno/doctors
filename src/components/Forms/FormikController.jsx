import Inputs from "./Inputs";
import SelectInpute from "./SelectInpute";
import Textarea from "./Textarea";
import SearchSel from "./SearchSel";

const FormikController = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Inputs {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <SelectInpute {...rest} />;
    case "searchselect":
      return <SearchSel {...rest} />;
    case "radio":
    case "checkbox":
    case "date":
    default:
      return null;
  }
};

export default FormikController;
