import React from "react";
import { Formik, Form, Field } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from "@chakra-ui/react";

function EditForm({ onSubmit, itemActive }) {
  
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
        onSubmit(values);
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
          <Button mt={4} colorScheme="teal" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default EditForm;
