import React from 'react';

const LabeledTextAreaField = (props) => {
  const { label, id, placeholder, value, onChange, mutedText } = props;

  const _onChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="form-group">
      <label for={id}>{label}</label>
      <textarea onChange={_onChange} className="form-control" id={id} value={value} placeholder={placeholder} />
      {mutedText && <small id="emailHelp" className="form-text text-muted">{mutedText}</small>}
    </div>
  )
}

export default LabeledTextAreaField;
