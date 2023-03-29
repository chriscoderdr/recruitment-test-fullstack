import { FormFieldError } from "@app/models/models";
import { Button } from "@components/button/button";
import { TextField } from "@components/text-field/text-field";
import React from "react";
import { Form } from "./form";

describe("<Form />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    let errors: FormFieldError[] = [];

    errors.push({
      message: 'Test Error'
    })

    try {
      throw Error('Exception errror')
    } catch (e) {
      errors.push({message: e.message});
    }

    cy.mount(
      <Form errors={errors}>
        <TextField placeholder="Test" />
        <TextField placeholder="Test" type="password" />
        <TextField placeholder="Test" type="number" />
        <Button value="Test" />
      </Form>
    );
  });
});
