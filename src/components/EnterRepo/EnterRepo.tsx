import { getGitHubURLComponents } from "@src/helper/getGitHubURLComponents";
import { useAppDispatch } from "@src/store/hooks";
import { getIssues } from "@src/store/issues/actions";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";

const regex = /https:\/\/github\.com\/\w+\/\w+/;

const EnterRepo: React.FC = () => {
  const [inputVal, setInputVal] = useState("");
  const dispatch = useAppDispatch();

  const searchRepoHandler = () => {
    const urlComponents = getGitHubURLComponents(inputVal);
    if (regex.test(inputVal)) {
      toast.success("Success");
      dispatch(getIssues(urlComponents));
    } else {
      toast.error("The path of url isn`t correct");
    }
    setInputVal("");
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputVal.length) {
      searchRepoHandler();
    }
  };

  return (
    <div className="w-100">
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>Repo URL</Form.Label>
          <div className="d-flex align-items-center">
            <Form.Control
              placeholder="Enter repo URL...."
              onChange={(e) => {
                setInputVal(e.target.value);
              }}
              data-testid="inputTest"
              value={inputVal}
            />
            <Button
              variant="warning"
              className="ms-3 flex-shrink-0"
              onClick={searchRepoHandler}
              data-testid="buttonTest"
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
