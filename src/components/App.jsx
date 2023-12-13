import { useState } from "react";
// import { nanoid } from "nanoid";
import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";
import { Filter } from "./Filter";

export const App = () => {

  // const [name, setName] = useState("");
  // const [number, setNumber] = useState("");
  // const [contacts, setContacts] = useState([]);
  // const [search, setSearch] = useState("");

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // }

  // const handleNumberChange = (e) => {
  //   setNumber(e.target.value);
  // }

  // const handleSearchChange = (e) => {
  //   setSearch(e.target.value);
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const newContact = { name: name, number: number, id: nanoid() };
  //   setContacts([...contacts, newContact]);

  //   setName("");
  //   setNumber("");
  // }

  // const handleDelete = (id) => {
  //   const filteredContacts = contacts.filter((contact) => contact.id !== id);

  //   setContacts(filteredContacts);
  // }

  // const filterContacts = (contacts, search) => {
  //   const lowerSearch = search.toLowerCase();

  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(lowerSearch)
  //   );
  // }

  // return (
  //   <div
  //     style={{
  //       height: '100vh',
  //       display: 'flex',
  //       flexDirection: 'column',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       fontSize: 40,
  //       color: '#010101'
  //     }}
  //   >
  //     <h1>Agenda de contactos</h1>
  //     <form onSubmit={handleSubmit}>
  //       <label htmlFor="name">Nombre:</label>
  //       <input
  //         type="text"
  //         name="name"
  //         id="name"
  //         value={name}
  //         onChange={handleNameChange}
  //         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  //         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  //         required
  //       />
  //       <label htmlFor="number">Número:</label>
  //       <input
  //         type="tel"
  //         name="number"
  //         id="number"
  //         value={number}
  //         onChange={handleNumberChange}
  //         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  //         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  //         required
  //       />
  //       <button type="submit">Añadir contacto</button>
  //     </form>
  //     <label htmlFor="search">Contactos</label>
  //     <input
  //       type="text"
  //       name="search"
  //       id="search"
  //       value={search}
  //       onChange={handleSearchChange}
  //     />
  //     <ul>
  //       {filterContacts(contacts, search).map((contact) => (
  //         <li key={contact.id}>
  //           {contact.name} - {contact.number}{" "}
  //           <button onClick={() => handleDelete(contact.id)}>Eliminar</button>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );

  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  // Define la función para manejar la eliminación de contactos
  const handleDelete = (id) => {
    // Filtra los contactos que no tengan el id dado
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    // Actualiza el estado de los contactos con los contactos filtrados
    setContacts(filteredContacts);
  };

  // Renderiza el componente raíz de la aplicación
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 32,
        color: '#010101'
      }}
    >
      <h1>Agenda de contactos</h1>
      <ContactForm contacts={contacts} setContacts={setContacts} />

      <h2>Contactos</h2>
      <Filter search={search} setSearch={setSearch} />
      <ContactList contacts={contacts} search={search} handleDelete={handleDelete} />
    </div>
  );
};
