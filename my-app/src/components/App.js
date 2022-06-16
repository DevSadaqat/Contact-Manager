
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import './App.css';

function App() {

  const contacts = [
    {
      id: '1',
      name: "Umer Farooq",
      email: 'example@gmail.com'
    },
    {
      id: '2',
      name: "Asif ali",
      email: 'asif@gmail.com'
    }
  ]
  return (
    <div className='ui container'>
    <Header />
    <AddContact />
    <ContactList contacts = {contacts} />
    </div>
  );
}

export default App;
