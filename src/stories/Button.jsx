import React from "react";
import PropTypes from "prop-types";
import "./button.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary,
  backgroundColor,
  size,
  label,
  className,
  ...props
}) => {
  const mode = primary ? "--primary" : "--secondary";
  return (
    <button
      type="button"
      className={[className, className + mode].join(" ")} //["blu-button", `blu-button--${size}`, mode].join(" ")}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * primary or secondary colors
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * name of the class used for styling
   */
  className: PropTypes.string,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: true,
};
