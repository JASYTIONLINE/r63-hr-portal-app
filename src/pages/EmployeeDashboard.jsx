// ----------------------------------------------------
// EmployeeDashboard.jsx (Instrumented for Debugging)
// ----------------------------------------------------

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
