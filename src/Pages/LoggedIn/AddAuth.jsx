import React from 'react';
import NavAdmin from '../../components/LoggedIn/NavAdmin';
import AddAuthForm from '../../components/LoggedIn/AddAuthForm';

const AddAuth = () => {
  return (
    <div>
        <NavAdmin/>
        <AddAuthForm/>
    </div>
  )
}

export default AddAuth