import React from "react";
import "./style.scss";

export default props => {
  const { id, value, ...otherProps } = props;
  return (
    <div className="input-pretty">
      <label htmlFor={props.id}>
        {(!props.value && <span>Add Picture</span>) || (
          <span>File selected: {props.value.name}</span>
        )}
      </label>
      <input type="file" id={id} {...otherProps} />
    </div>
  );
};
