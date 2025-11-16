// ============================================================================
// EmployeeDashboard.jsx
// ============================================================================
//
// PURPOSE:
// This component provides the employee self-service interface, allowing
// employees to manage their profile and submit leave requests. It implements
// Task 7: "Employee registration component" where employees can "sign up"
// with personal details and Task 5 requirements for employee functionality.
//
// ROUTE PROTECTION:
// This component is protected at the route level in router.jsx using
// ProtectedRoute with requiredRole="employee". This ensures:
// 1. Only authenticated employees can access this dashboard.
// 2. HR users are also employees and have access to their employee dashboard (see router.jsx)
// 3. Unauthenticated users are redirected to login
//
// This protection happens before the component renders, so there's no flash
// of content for unauthorized users.
//
// PHASE 2 MIGRATION:
// When Firebase is integrated, this component will:
// 1. Load employee profile data from Firebase Realtime Database
// 2. Submit leave requests to Firebase instead of console.log
// 3. Receive real-time updates when HR approves/denies leave requests
// The component structure and UI will remain largely the same.
//
// ============================================================================

import React, { useState } from "react";

import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";
import FormField from "../components/FormField.jsx";
import Button from "../components/Button.jsx";

function EmployeeDashboard() {

  console.log("EmployeeDashboard rendered");

  // Profile state
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");

  // Leave request state
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");

  return (
    <Section title="Employee Dashboard" className="section-graphite">

      <div className="row g-4">

        {/* --- Profile Card --- */}
        <div className="col-md-6">
          <Card title="My Profile" className="section-panel">

            <FormField
              label="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                console.log("EMP: Profile name typed:", e.target.value);
              }}
            />

            <FormField
              label="Department"
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
                console.log("EMP: Profile department typed:", e.target.value);
              }}
            />

            <FormField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                console.log("EMP: Profile email typed:", e.target.value);
              }}
            />

            <Button
              className="w-100 mt-3"
              onClick={() => {
                console.log("EMP: Save Changes clicked");
                console.log("EMP: Profile data:", { name, department, email });
              }}
            >
              Save Changes
            </Button>

          </Card>
        </div>

        {/* --- Leave Request Card --- */}
        <div className="col-md-6">
          <Card title="Submit Leave Request" className="section-panel">

            <FormField
              label="Start Date"
              type="date"
              value={startDate}
              onChange={(e) => {
                setStartDate(e.target.value);
                console.log("EMP: Leave start date selected:", e.target.value);
              }}
            />

            <FormField
              label="End Date"
              type="date"
              value={endDate}
              onChange={(e) => {
                setEndDate(e.target.value);
                console.log("EMP: Leave end date selected:", e.target.value);
              }}
            />

            <FormField
              label="Reason"
              value={reason}
              onChange={(e) => {
                setReason(e.target.value);
                console.log("EMP: Leave reason typed:", e.target.value);
              }}
              placeholder="Why do you need leave?"
            />

            <Button
              className="w-100 mt-3"
              onClick={() => {
                console.log("EMP: Submit Leave clicked");
                console.log("EMP: Leave request data:", {
                  startDate,
                  endDate,
                  reason
                });
              }}
            >
              Submit Request
            </Button>

          </Card>
        </div>

      </div>

    </Section>
  );
}

export default EmployeeDashboard;
