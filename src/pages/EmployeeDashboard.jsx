// ----------------------------------------------------
// EmployeeDashboard.jsx
// Employee view: Profile card + Leave Request card.
// Uses Card, FormField, Button, Section.
// ----------------------------------------------------

import React, { useState } from "react";

import Card from "../components/Card.jsx";
import FormField from "../components/FormField.jsx";
import Button from "../components/Button.jsx";
import Section from "../components/Section.jsx";

function EmployeeDashboard() {

  // Profile state
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");

  // Leave request state
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");

  return (
    <Section title="Employee Dashboard" className="section-steel">

      {/* Grid: Profile (left) + Leave Request (right) */}
      <div className="row g-4">

        {/* Profile Card */}
        <div className="col-md-6">
          <Card title="My Profile">

            <FormField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <FormField
              label="Department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />

            <FormField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button className="w-100 mt-3">
              Save Changes
            </Button>

          </Card>
        </div>

        {/* Leave Request Card */}
        <div className="col-md-6">
          <Card title="Submit Leave Request">

            <FormField
              label="Start Date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />

            <FormField
              label="End Date"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />

            <FormField
              label="Reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Why do you need leave?"
            />

            <Button className="w-100 mt-3">
              Submit Request
            </Button>

          </Card>
        </div>

      </div>

    </Section>
  );
}

export default EmployeeDashboard;
