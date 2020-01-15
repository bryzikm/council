import React from 'react';

import { useNetwork } from '../../network';
import Table from '../../components/Table';

const Sessions = () => {
  const data = useNetwork();

  return (
    <div>
      <Table data={data}/>
    </div>
  )
};

export default Sessions;
