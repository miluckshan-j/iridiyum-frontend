import React from 'react';

const LabeledTextField = (props) => {
  const { label, id, placeholder, value, onChange, type, mutedText } = props;

  const _onChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="form-group">
      <label for={id}>{label}</label>
      <input type={type} onChange={_onChange} className="form-control" id={id} value={value} placeholder={placeholder} />
      {mutedText && <small id="emailHelp" className="form-text text-muted">{mutedText}</small>}
    </div>
  )
}

LabeledTextField.defaultProps = {
  type: 'text'
};

export default LabeledTextField;
