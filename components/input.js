/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from "prop-types";

// Some problems with this component:
// 1. htmlFor prop has to match context state object.
// 2. Disabled eslint prop spreading rule. Only way I could think of picking up all the
//    extra props for things like textareas.
// 3. My color inputs have some different styling. Not sure I want to spend the time
//    right now making this component universal enough to passed down those extra styles.
// 4. Not sure I solved the Create.js component complexity issue..

export default function Input({
  htmlFor,
  label,
  value,
  onChange,
  type,
  rest,
  required,
}) {
  const Component = type === "textarea" ? "textarea" : "input";
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="text-gray-700">{label}</span>
      <Component
        type={type}
        name={htmlFor}
        id={htmlFor}
        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        required={required}
        value={value}
        onChange={(e) => onChange({ type: htmlFor, payload: e.target.value })}
        {...rest}
      />
    </label>
  );
}

Input.propTypes = {
  rest: PropTypes.instanceOf(Object),
  required: PropTypes.bool,
  htmlFor: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

Input.defaultProps = {
  rest: {},
  required: false,
  htmlFor: "DefaultIdHTMLforAndName",
  label: "Default Label",
};
