// import node module libraries
import { Fragment } from "react";
import { Form } from "react-bootstrap";

interface FormSelectProps {
  placeholder?: string;
  id?: string;
  name?: string;
  className?: string;
  options: { value: string; label: string }[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultChecked?: boolean;
}

export const FormSelect: React.FC<FormSelectProps> = ({
  placeholder,
  id,
  name,
  className,
  options,
  onChange,
  defaultChecked,
}) => {
  return (
    <Fragment>
      <Form.Select
        id={id}
        name={name}
        onChange={onChange}
        className={className}
        defaultChecked={defaultChecked}
      >
        {placeholder ? (
          <option value="" className="text-muted">
            {placeholder}
          </option>
        ) : (
          ""
        )}
        {options.map((item, index) => {
          return (
            <option key={index} value={item.value} className="text-dark">
              {item.label}
            </option>
          );
        })}
      </Form.Select>
    </Fragment>
  );
};

export default FormSelect;
