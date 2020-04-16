import React from "react";

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`} alert>
        <div className="alertMsg">
          <i class="fa fa-exclamation-circle"></i> {alert.msg}
        </div>
      </div>
    )
  );
};

export default Alert;
