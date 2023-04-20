import { getGitHubURLComponents } from "@src/helper/getGitHubURLComponents";
import { useAppDispatch } from "@src/store/hooks";
import { getIssues } from "@src/store/issues/actions";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const EnterRepo: React.FC = () => {
  const [inputVal, setInputVal] = useState("");
  const dispatch = useAppDispatch();

  const searchRepoHandler = () => {
    const urlComponents = getGitHubURLComponents(inputVal);
    dispatch(getIssues(urlComponents));
    setInputVal("");
  };

  return (
    <div className="w-100">
      <Form>
        <Form.Group>
          <Form.Label>Repo URL</Form.Label>
          <div className="d-flex align-items-center">
            <Form.Control
              placeholder="Enter repo URL...."
              onChange={(e) => {
                setInputVal(e.target.value);
              }}
              value={inputVal}
            />
            <Button
              variant="warning"
              className="ms-3 flex-shrink-0"
              onClick={searchRepoHandler}
            >
              Load Issues
            </Button>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default EnterRepo;
