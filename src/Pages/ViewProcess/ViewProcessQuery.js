import React from "react";
import Header from "../../Components/CommonComponents/Header/Header";
import Footer from "../../Components/CommonComponents/Footer/Footer";
import Table from "../../Components/CommonComponents/Table/Table";
import "./ViewProcess.css";
import { useGetProcesses } from "../../hooks/processes";

const ViewProcess = () => {
  const {data,error,isLoading}=useGetProcesses();

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "process_name", headerName: "Process Name", width: 130 },
    { field: "role", headerName: "Role", width: 130 },
    {
      field: "current_state",
      headerName: "Current State",
      width: 90,
    },
    {
      field: "to_state",
      headerName: "To State",
      width: 160,
    },
    {
      field: "action_event",
      headerName: "Action Event",
      width: 160,
    },
  ];

  return (
    <>
      <Header />
      <div className="table">
        <h1 className="tableHeading">Process List</h1>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error loading data.</p>}
        {!error && data && <Table rows={data} columns={columns}/>}
      </div>
      <Footer />
    </>
  );
};

export default ViewProcess;
