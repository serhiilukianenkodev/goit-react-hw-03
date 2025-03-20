const Contact = ({ contact, onDelete }) => {
  return (
    <li>
      <div>
        <span>{contact.name}</span>
        <span>{contact.number}</span>
        <button
          type="button"
          onClick={() => {
            onDelete(contact.id);
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;
