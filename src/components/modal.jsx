// ----------------------------------------------------
// Modal.jsx
// Reusable Bootstrap modal component.
// Shows when `show` is true. Hides when `onClose` fires.
// Accepts title, children, and custom footer buttons.
// ----------------------------------------------------

import React from "react";

function Modal({ show, title, children, onClose, footer }) {
  if (!show) return null;

  return (
    <div
      className="modal fade show"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title fw-semibold">{title}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          {/* Body */}
          <div className="modal-body">
            {children}
          </div>

          {/* Footer (optional) */}
          {footer && (
            <div className="modal-footer">
              {footer}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Modal;
