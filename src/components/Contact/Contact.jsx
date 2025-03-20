const Contact = ({ contact }) => {
  return (
    <li>
      <div>
        <span>{contact.name}</span>
        <span>{contact.number}</span>
        <button type="button">Delete</button>
      </div>
    </li>
  );
};

export default Contact;
