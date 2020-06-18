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
        class="modal fade"
        id="warningModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="warningModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="warningModalLabel">
                Warning
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">Do you want to delete this Item!!</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Non
              </button>
              <button
                type="button"
                class="btn btn-warning"
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
