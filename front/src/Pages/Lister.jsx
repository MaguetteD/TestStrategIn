/* eslint-disable prettier/prettier */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import useAuthContext from '../contex/AuthContex';

const Lister = () => {
  const [users, setUsers] = useState([]);
  const { dispatchAPI } = useAuthContext();

  const getUsers = async () => {
    const result = await dispatchAPI('Lister');
    setUsers(result.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return users.map((user, index) => (
    <div>
      <ul key={index}>{user.email}</ul>
    </div>
  ));
};
export default Lister;
