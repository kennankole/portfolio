/* eslint-disable no-alert */
import {
  Card,
  Input,
  Textarea,
  Button,
  Typography,
} from '@material-tailwind/react';

import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [formState, setFormState] = useState();

  const handleNameInput = (event) => {
    setName(event.target.value);
  };

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageInput = (event) => {
    setMessage(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('https://formspree.io/f/mlekzkdl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });
    setEmail('');
    setName('');
    setMessage('');

    if (response.ok) {
      setFormState('Message sent successfully');
    } else {
      setFormState('Failed to send');
    }
  };

  return (
    <div id="Contact" className="flex justify-center mb-5">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray" className="text-center contact-text">
          <h4 className="contact-text">Leave a message</h4>
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleFormSubmit}>
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Name"
              value={name}
              onChange={handleNameInput}
              required
            />
            <Input
              size="lg"
              label="Email"
              value={email}
              onChange={handleEmailInput}
              required
              type="email"
            />
            <Textarea
              size="lg"
              label="Write Message"
              value={message}
              onChange={handleMessageInput}
              required
            />
          </div>
          <Button
            className="mt-6"
            fullWidth
            type="submit"
          >
            Send
          </Button>
        </form>
        <p>{formState}</p>
      </Card>
    </div>
  );
};

export default ContactForm;
