
import React, { useState, useEffect } from "react";
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import './App.css';

function App() {
 const LOCAL_STORAGE_KEY = 'contacts'; 
 let randomNumber = Math.random() * 10;
 const [contacts, setContacts] = useState([]);
 
 const addContactHandler = (contact) => {
   setContacts([...contacts, {id: randomNumber, ...contact}]);
 };

 //delete contact 
 const removeContactHandler = (id) => {
 const newContactList = contacts.filter((contact) => {
   return contact.id !== id;
 });

  setContacts(newContactList);

 }

 //retrieve data from the local storage
 useEffect(() => {
  const retriveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if(retriveContact) setContacts(retriveContact);
  console.log(contacts);
}, []);

 //add dependency for making changes 
 useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
 }, [contacts]);

  return (
    <div className='ui container'>
    <Header />
    <AddContact  addContactHandler={addContactHandler}/>
    <ContactList contacts = {contacts} getContactId = {removeContactHandler} />
    </div>
  );
}

export default App;
