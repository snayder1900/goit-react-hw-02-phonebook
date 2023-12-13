import { ContactItem } from './ContactItem'  


export const ContactList = ({ contacts, search, handleDelete }) => {
 
  const filterContacts = (contacts, search) => {
    
    const lowerSearch = search.toLowerCase();
    
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(lowerSearch)
    );
  }

   return (
    <ul>
      {filterContacts(contacts, search).map((contact) => (
        <ContactItem key={contact.id} contact={contact} handleDelete={handleDelete} />
      ))}
    </ul>
  );


}