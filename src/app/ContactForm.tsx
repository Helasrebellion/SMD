import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form, Button, Alert, Container } from "react-bootstrap";
import "./ContactForm.css";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [showAlert, setShowAlert] = React.useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <Container className="dark-mode-container">
      {showAlert && (
        <Alert variant="dark" className="alert-dark-mode">
          Form submitted successfully
        </Alert>
      )}
      <h1>Contact Us</h1>
      <Form className="dark-mode-form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: true })}
          />
          {errors.name && <span className="text-danger">Name is required</span>}
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-danger">Email is required</span>
          )}
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            {...register("message", { required: true })}
          />
          {errors.message && (
            <span className="text-danger">Message is required</span>
          )}
        </Form.Group>

        <Button variant="primary" type="submit" className="dark-mode-button">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
