import React, { useEffect } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

export default function ErrorSnackbar() {
  const { open, message } = useStoreState((state) => state.snackbar);
  const handleClose = useStoreActions(
    (actions) => actions.snackbar.handleClose
  );
  useEffect(() => {
    setTimeout(handleClose, 15000);
  });

  return open ? (
    <div
      className="alert-danger shadow p-3 mb-5 rounded"
      role="alert"
      onClick={handleClose}
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 10000,
        borderBottom: "solid 1xp red",
      }}
    >
      {message}
    </div>
  ) : null;
}
