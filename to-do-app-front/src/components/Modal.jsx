import React from "react";

export const Modal = () => {
  return (
    <div id="modal" className="modal">
      <div className="modal-content">
        <h3>Task Details</h3>
        <p id="modal-description">Description of the task will appear here.</p>
        <button className="close-modal">Close</button>
      </div>
    </div>
  );
};
