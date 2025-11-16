// ============================================================================
// HRDashboard.jsx
// ============================================================================
//
// PURPOSE:
// This component provides the HR user interface for managing employees and
// leave requests. It implements Task 5 requirements: "Design components for
// HR to manage employee profiles" including Add, Edit, Delete, and View
// employee list functionality.
//
// ROUTE PROTECTION:
// This component is protected at the route level in router.jsx using
// ProtectedRoute with requiredRole="hr". This ensures:
// 1. Only authenticated HR users can access this dashboard
// 2. Employee users are redirected if they try to access /hr
// 3. Unauthenticated users are redirected to login
//
// This protection happens before the component renders, so there's no flash
// of content for unauthorized users. The component-level guard that was
// previously here has been removed because route-level protection is more
// efficient and follows better separation of concerns.
//
// ARCHITECTURE CHANGE (Phase 1 Update):
// Previously, this component had a role guard at the component level
// (checking localStorage and redirecting). This has been moved to route-level
// protection in router.jsx using the ProtectedRoute wrapper.
//
// WHY THIS CHANGE:
// 1. Separation of Concerns: Component focuses on HR functionality, not
//    access control. Route protection is handled at the routing layer.
// 2. No Flash of Content: Route-level protection prevents the component from
//    rendering at all if unauthorized, eliminating the brief flash of HR
//    content before redirect.
// 3. Cleaner Code: Component is simpler without guard logic mixed with
//    business logic.
// 4. Academic Learning: Demonstrates understanding of proper separation
//    between routing concerns and component concerns.
//
// PHASE 2 MIGRATION:
// When Firebase is integrated, this component will receive employee and
// leave request data from Firebase Realtime Database listeners instead of
// useState. The component structure will remain the same, only the data
// source will change.
//
// ============================================================================

import React, { useState } from "react";
import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import Modal from "../components/Modal.jsx";
import FormField from "../components/FormField.jsx";

function HRDashboard() {
  // ========================================================================
  // COMPONENT-LEVEL GUARD REMOVED
  // ========================================================================
  // The role guard that was here has been moved to route-level protection
  // in router.jsx. The ProtectedRoute wrapper ensures only users with
  // role="hr" can reach this component. This is a better architecture
  // because:
  // 1. Protection happens before component renders (no flash)
  // 2. Component focuses on HR functionality, not security
  // 3. Protection logic is centralized and reusable
  //
  // If you need to check role within this component for conditional
  // rendering, use: import { getUserRole } from "../utils/authHelper";
  // ========================================================================

  console.log("HRDashboard rendered");

  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");

  // Edit Modal State
  const [showEditModal, setShowEditModal] = useState(false);
  const [editEmployee, setEditEmployee] = useState(null);

  // Search bar
  const [search, setSearch] = useState("");

  // Delete Modal State
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);

  // Employee Table Data
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", department: "IT", email: "john@corp.com" },
    { id: 2, name: "Sarah Smith", department: "Finance", email: "sarah@corp.com" }
  ]);

  // Leave Requests Data
  const [leaveRequests, setLeaveRequests] = useState([
    {
      id: 1,
      employee: "John Doe",
      start: "2025-03-10",
      end: "2025-03-12",
      reason: "Family Event",
      status: "Pending"
    },
    {
      id: 2,
      employee: "Sarah Smith",
      start: "2025-03-15",
      end: "2025-03-16",
      reason: "Medical",
      status: "Pending"
    }
  ]);

  return (
    <Section title="HR Dashboard" className="section-graphite">

      {/* --- HR Controls Card --- */}
      <div className="d-flex justify-content-center mb-5">
        <Card
          title="HR Controls"
          className="section-panel"
          style={{ maxWidth: "450px", width: "100%" }}
        >
          <p className="mb-4">
            Add new employees, update records, and manage HR processes.
          </p>

          <Button
            className="w-100"
            onClick={() => {
              console.log("HR: Add Employee clicked");
              setShowModal(true);
            }}
          >
            Add New Employee
          </Button>
        </Card>
      </div>

      {/* ============================
          Employee Table + Search
      ============================ */}
      <Card title="Employee List" className="section-panel">

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search employees..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              console.log("HR: Search typed:", e.target.value);
            }}
          />
        </div>

        <div className="table-responsive">
          <table className="table table-dark table-striped table-hover">

            <thead>
              <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {employees
                .filter(emp => {
                  const q = search.toLowerCase();
                  return (
                    emp.name.toLowerCase().includes(q) ||
                    emp.department.toLowerCase().includes(q) ||
                    emp.email.toLowerCase().includes(q)
                  );
                })
                .map(emp => (
                  <tr key={emp.id}>
                    <td>{emp.name}</td>
                    <td>{emp.department}</td>
                    <td>{emp.email}</td>

                    <td>
                      {/* EDIT */}
                      <Button
                        variant="secondary"
                        className="btn-sm me-2"
                        onClick={() => {
                          console.log("HR: Edit clicked:", emp);
                          setEditEmployee(emp);
                          setShowEditModal(true);
                        }}
                      >
                        Edit
                      </Button>

                      {/* DELETE */}
                      <Button
                        variant="danger"
                        className="btn-sm"
                        onClick={() => {
                          console.log("HR: Delete clicked:", emp);
                          setEmployeeToDelete(emp);
                          setShowDeleteModal(true);
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>

          </table>
        </div>

      </Card>

      {/* ============================
          Leave Requests Table
      ============================ */}
      <Card title="Leave Requests" className="section-panel mt-5">

        <div className="table-responsive">
          <table className="table table-dark table-striped table-hover">

            <thead>
              <tr>
                <th>Employee</th>
                <th>Start</th>
                <th>End</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {leaveRequests.map(req => (
                <tr key={req.id}>
                  <td>{req.employee}</td>
                  <td>{req.start}</td>
                  <td>{req.end}</td>
                  <td>{req.reason}</td>

                  <td>
                    {req.status === "Approved" && (
                      <span className="text-hazard fw-bold">Approved</span>
                    )}
                    {req.status === "Denied" && (
                      <span className="text-emergency fw-bold">Denied</span>
                    )}
                    {req.status === "Pending" && (
                      <span className="text-muted">Pending</span>
                    )}
                  </td>

                  <td>
                    {/* APPROVE */}
                    <Button
                      className="btn-sm me-2"
                      onClick={() => {
                        console.log("HR: Approve leave request:", req);
                        setLeaveRequests(leaveRequests.map(item =>
                          item.id === req.id
                            ? { ...item, status: "Approved" }
                            : item
                        ));
                      }}
                    >
                      Approve
                    </Button>

                    {/* DENY */}
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => {
                        console.log("HR: Deny leave request:", req);
                        setLeaveRequests(leaveRequests.map(item =>
                          item.id === req.id
                            ? { ...item, status: "Denied" }
                            : item
                        ));
                      }}
                    >
                      Deny
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </Card>

      {/* --- Add Employee Modal --- */}
      <Modal
        show={showModal}
        title="Add New Employee"
        onClose={() => {
          console.log("HR: Add modal closed");
          setShowModal(false);
        }}
        footer={
          <>
            <Button
              variant="secondary"
              onClick={() => {
                console.log("HR: Add modal canceled");
                setShowModal(false);
              }}
            >
              Close
            </Button>

            <Button
              onClick={() => {
                console.log("HR: Save new employee");
                const newEmp = {
                  id: Date.now(),
                  name,
                  department,
                  email,
                };
                console.log("HR: New employee data:", newEmp);

                setEmployees([...employees, newEmp]);
                setShowModal(false);
                setName("");
                setDepartment("");
                setEmail("");
              }}
            >
              Save Employee
            </Button>
          </>
        }
      >
        <FormField
          label="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            console.log("HR: Add modal name typed:", e.target.value);
          }}
        />

        <FormField
          label="Department"
          value={department}
          onChange={(e) => {
            setDepartment(e.target.value);
            console.log("HR: Add modal department typed:", e.target.value);
          }}
        />

        <FormField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            console.log("HR: Add modal email typed:", e.target.value);
          }}
        />
      </Modal>

      {/* --- Edit Employee Modal --- */}
      <Modal
        show={showEditModal}
        title="Edit Employee"
        onClose={() => {
          console.log("HR: Edit modal closed");
          setShowEditModal(false);
        }}
        footer={
          <>
            <Button
              variant="secondary"
              onClick={() => {
                console.log("HR: Edit modal canceled");
                setShowEditModal(false);
              }}
            >
              Cancel
            </Button>

            <Button
              onClick={() => {
                console.log("HR: Saving edited employee:", editEmployee);

                setEmployees(employees.map(emp =>
                  emp.id === editEmployee.id ? editEmployee : emp
                ));

                setShowEditModal(false);
              }}
            >
              Save Changes
            </Button>
          </>
        }
      >
        {editEmployee && (
          <>
            <FormField
              label="Name"
              value={editEmployee.name}
              onChange={(e) => {
                console.log("HR: Edit name typed:", e.target.value);
                setEditEmployee({ ...editEmployee, name: e.target.value });
              }}
            />

            <FormField
              label="Department"
              value={editEmployee.department}
              onChange={(e) => {
                console.log("HR: Edit department typed:", e.target.value);
                setEditEmployee({ ...editEmployee, department: e.target.value });
              }}
            />

            <FormField
              label="Email"
              type="email"
              value={editEmployee.email}
              onChange={(e) => {
                console.log("HR: Edit email typed:", e.target.value);
                setEditEmployee({ ...editEmployee, email: e.target.value });
              }}
            />
          </>
        )}
      </Modal>

      {/* --- Delete Modal --- */}
      <Modal
        show={showDeleteModal}
        title="Confirm Delete"
        onClose={() => {
          console.log("HR: Delete modal closed");
          setShowDeleteModal(false);
        }}
        footer={
          <>
            <Button
              variant="secondary"
              onClick={() => {
                console.log("HR: Delete canceled");
                setShowDeleteModal(false);
              }}
            >
              Cancel
            </Button>

            <Button
              variant="danger"
              onClick={() => {
                console.log("HR: Employee deleted:", employeeToDelete);
                setEmployees(employees.filter(emp => emp.id !== employeeToDelete.id));
                setShowDeleteModal(false);
              }}
            >
              Delete
            </Button>
          </>
        }
      >
        {employeeToDelete && (
          <p>
            Are you sure you want to delete{" "}
            <strong>{employeeToDelete.name}</strong>? This action cannot be undone.
          </p>
        )}
      </Modal>

    </Section>
  );
}

export default HRDashboard;
