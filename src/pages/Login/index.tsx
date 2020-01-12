import React from "react";

// TODO: transfer below components to correct view
import Table from "../../components/Table";
import { useNetwork } from "../../network";

const Login = () => {
  const data = useNetwork();

  return (
    <div>
      <Table data={data}/>
    </div>
  )
};

export default Login;
