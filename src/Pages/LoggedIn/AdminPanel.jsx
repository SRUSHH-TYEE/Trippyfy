import React from 'react';
import NavAdmin from '../../components/LoggedIn/NavAdmin';
import OrgTable from '../../components/LoggedIn/OrgTable';

const AdminPanel = () => {
  return (
    <div>
      <NavAdmin />
      <div>
        <OrgTable />
      </div>
    </div>
  );
};

export default AdminPanel;
