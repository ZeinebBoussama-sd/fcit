import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function WarningModal(props) {
  return (
    <>
      <FontAwesomeIcon
        icon={faTrashAlt}
        className="mr-1 pointer"
        color="red"
        data-toggle="modal"
        data-target="#warningModal"
      />

      <div
        className="modal fade"
        id="warningModal"
        role="dialog"
        aria-labelledby="warningModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="warningModalLabel">
                Warning
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">Do you want to delete this Item!!</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Non
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => {
                  props.dlt(props.code);
                }}
                data-dismiss="modal"
              >
                Oui
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default WarningModal;
