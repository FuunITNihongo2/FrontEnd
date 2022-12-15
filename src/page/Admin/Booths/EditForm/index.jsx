import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Stack
} from "@chakra-ui/react";

function EditForm({ onSubmit, itemActive }) {
  const [file, setFile] = useState();
  function requiredName(value) {
    let error;
    if (!value) {
      error = "Name is required";
    }
    return error;
  }

  function requiredAddress(value) {
    let error;
    if (!value) {
      error = "Address is required";
    }
    return error;
  }

  return (
    <Formik
      initialValues={itemActive}
      onSubmit={(values) => {
       const data = {...values, image: file}
        onSubmit(data);
      }}
    >
      {(props) => (
        <Form>
          <Field name="name" validate={requiredName}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel>Name</FormLabel>
                <Input {...field} placeholder="name" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="address" validate={requiredAddress}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.address && form.touched.address}
              >
                <FormLabel>Address</FormLabel>
                <Input {...field} placeholder="Address" />
                <FormErrorMessage>{form.errors.address}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Stack mt={5} className="form-group">
            <label for="file">File upload</label>
            <input
              id="file"
              name="file"
              type="file"
              onChange={(event) => {
                setFile(event.currentTarget.files[0]);
              }}
              className="form-control"
            />
          </Stack>

          <Button mt={4} colorScheme="teal" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default EditForm;
