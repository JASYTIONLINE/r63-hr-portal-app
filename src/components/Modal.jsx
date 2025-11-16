// ============================================================================
// Modal.jsx
// ============================================================================
//
// PURPOSE:
// This component provides a reusable modal dialog (popup window) that can be
// used throughout the application for confirmations, forms, and information
// display. It follows Bootstrap's modal pattern and provides a consistent
// user experience for modal interactions.
//
// MODAL PATTERN:
// This component implements the "Controlled Modal" pattern in React, where
// the parent component manages the modal's visibility state. The modal shows
// when `show` is true and hides when `onClose` is called. This pattern
// ensures the parent has full control over when the modal appears and
// disappears, making it easy to integrate with form submissions, confirmations,
// and other user interactions.
//
// BOOTSTRAP INTEGRATION:
// The component uses Bootstrap's modal classes:
// - "modal fade show": Base modal styling with fade animation
// - "modal-dialog modal-dialog-centered": Centers the modal vertically
// - "modal-content": The actual modal box
// - "modal-header", "modal-body", "modal-footer": Standard modal sections
//
// USAGE PATTERN:
// 1. Parent component manages modal state: `const [showModal, setShowModal] = useState(false)`
// 2. Parent renders Modal with show prop: `<Modal show={showModal} onClose={() => setShowModal(false)}>`
// 3. User action triggers modal: `onClick={() => setShowModal(true)}`
// 4. Modal closes via onClose: User clicks close button or backdrop, calls `setShowModal(false)`
//
// CURRENT USAGE:
// - HRDashboard: Add Employee modal, Edit Employee modal, Delete Confirmation modal
// - All modals follow the same pattern, ensuring consistent UX
//
// ACCESSIBILITY CONSIDERATIONS (Phase 2):
// For production use, consider adding:
// - Focus trap: Keep keyboard focus inside modal when open
// - Escape key handler: Close modal on Escape key press
// - ARIA attributes: role="dialog", aria-modal="true", aria-labelledby
// - Focus management: Return focus to trigger element when modal closes
// - Backdrop click handler: Close modal when clicking outside (optional)
//
// PHASE 2 MIGRATION:
// When Firebase is integrated, modals will continue to work the same way.
// The modal pattern remains unchanged - only the data operations inside
// the modal body will interact with Firebase instead of console.log.
//
// ============================================================================

import React from "react";

/**
 * Reusable Bootstrap modal component with controlled visibility.
 * 
 * This component implements a controlled modal pattern where the parent
 * component manages the modal's visibility state. The modal displays when
 * `show` is true and hides when `onClose` is called.
 * 
 * @param {boolean} show - Controls modal visibility. When true, modal is displayed; when false, component returns null.
 * @param {string} title - Title text displayed in the modal header.
 * @param {React.ReactNode} children - Content to display in the modal body. Can be any React elements.
 * @param {function} onClose - Callback function called when modal should close. Typically sets show state to false.
 * @param {React.ReactNode} footer - Optional footer content (buttons, actions). If not provided, no footer is rendered.
 * 
 * @example
 * // Basic modal usage
 * const [showModal, setShowModal] = useState(false);
 * 
 * <Modal
 *   show={showModal}
 *   title="Add Employee"
 *   onClose={() => setShowModal(false)}
 *   footer={
 *     <>
 *       <Button onClick={() => setShowModal(false)}>Cancel</Button>
 *       <Button onClick={handleSave}>Save</Button>
 *     </>
 *   }
 * >
 *   <FormField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
 * </Modal>
 * 
 * @example
 * // Confirmation modal (no footer needed)
 * <Modal
 *   show={showDeleteModal}
 *   title="Confirm Delete"
 *   onClose={() => setShowDeleteModal(false)}
 * >
 *   <p>Are you sure you want to delete this employee?</p>
 * </Modal>
 */
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
