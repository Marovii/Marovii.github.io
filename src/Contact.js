import ContactForm from './ContactForm';

const Contact = ({ pageRefs }) => {
  return (
    <div
      className='contact'
      ref={(el) => (pageRefs.current = { ...pageRefs.current, contact: el })}
    >
      {' '}
      <h3>Contact Me</h3>
      <ContactForm />
      <div className='contact_other-options'>
        <i class='bi bi-github'></i>
        <i class='bi bi-facebook'></i>
        <i class='bi bi-linkedin'></i>
        <i class='bi bi-envelope-fill'></i>
      </div>
    </div>
  );
};

export default Contact;
