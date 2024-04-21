import React from "react";
import Form from "react-bootstrap/Form";
// private policy of our app
function PrivacyPolicy() {
  return (
    <>
       <Form>
      <h1>Privacy Policy</h1>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>
      <p>
        This Privacy Policy describes how Budget Commuter collects, uses, and discloses
        information associated with an identified or identifiable individual
        (referred to in this Privacy Policy as “Personal Data”) and what choices
        you have around this activity. If you have any questions, please don’t
        hesitate to contact us.
      </p>
      </Form.Label>
      </Form.Group>
      </Form>
    </>
  );
}

export default PrivacyPolicy;
