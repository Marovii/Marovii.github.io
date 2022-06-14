// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import { useForm, ValidationError } from '@formspree/react';
const ContactForm = ({ component }) => {
  const [state, handleSubmit] = useForm('mgedqezq');
  if (state.succeeded) {
  } else {
  }
  return (
    <form onSubmit={handleSubmit} className='contact_email-box'>
      <input
        id='email'
        type='email'
        name='email'
        placeholder='Your Email'
        className='email-box_email'
      />
      <ValidationError prefix='Email' field='email' errors={state.errors} />
      <textarea
        id='message'
        name='message'
        placeholder='Your Message'
        className='email-box_text'
      />
      <ValidationError prefix='Message' field='message' errors={state.errors} />
      <button
        type='submit'
        disabled={state.submitting}
        className='email-box_send'
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
