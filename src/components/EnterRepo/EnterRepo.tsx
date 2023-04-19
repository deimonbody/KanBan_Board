import React from "react";
import { Button, Form } from "react-bootstrap";

const EnterRepo: React.FC = () => {
  return (
    <div className="w-100">
      <Form>
        <Form.Group>
          <Form.Label>Repo URL</Form.Label>
          <div className="d-flex align-items-center">
            <Form.Control placeholder="Enter repo URL...." />
            <Button variant="warning" className="ms-3 flex-shrink-0">
              Load Issues
            </Button>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default EnterRepo;
