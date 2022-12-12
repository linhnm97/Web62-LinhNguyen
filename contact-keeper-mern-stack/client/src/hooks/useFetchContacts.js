import { useState, useEffect } from 'react';
import axiosInstance from '../services/axiosInstance';
import ContactService from '../services/contactServices';

const useFetchContacts = (props) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const setContactsData = (newContacts) => setContacts(newContacts);
  const fetchContacts = async () => {
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      axiosInstance.defaults.headers.common['x-auth-token'] = token;
      const contactResponse = await ContactService.getAll();
      const contactsData = contactResponse.data.data;
      setContacts(contactsData);
      setLoading(false);
    } catch (error) {
      console.error(error.response.data);
      setError(error.response.data);
      setLoading(false);
    }
  };

  return { contacts, loading, error, setContactsData };
};

export default useFetchContacts;
