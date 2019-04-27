import React from "react";
  
  export function TextArea(props) {
    return (
      <div className="form-group">
        <textarea className="form-control" rows="20" {...props} />
      </div>
    );
  }
  
  export function FormBtn(props) {
    return (
      <button {...props} className="btn blue">
        {props.children}
        Submit Your Review
     </button>
    );
}  