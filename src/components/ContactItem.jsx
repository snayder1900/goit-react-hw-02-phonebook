
export const ContactItem = ({ contact, handleDelete }) => {
  
  return (
    <li>
      {contact.name} - {contact.number}{" "}
      <button onClick={() => handleDelete(contact.id)}>Eliminar</button>
    </li>
  );
};