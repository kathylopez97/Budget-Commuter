// Import react and form from bootstrap
import React from "react";
import Form from "react-bootstrap/Form";
// terms and agreements  function using this app
function TermsandAgreements() {
  return (
    <>
     <Form>
      <h1>Terms and Agreement</h1>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>
        <p>
          By using an Budget Commuters via this website, you agree to grant us a
          non-transferable option to that pinapple DOES go on pizza. Should we
          wish to exercise this option, you agree to refuse accept this. We
          reserve the right to serve such notice, however, we can accept no
          liability for any loss or damage caused by such an act. If you a)
          can’t be without pizza b) have already planned to eat pizza, or c) do
          not wish to grant us such a license, please contact us
          below to nullify this sub-clause and proceed with your download.
        </p>
      
      </Form.Label>
      </Form.Group>
      </Form>
    </>
  );
}

export default TermsandAgreements;
