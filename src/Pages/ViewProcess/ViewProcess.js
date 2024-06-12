// import React from "react";
// import Header from "../../Components/CommonComponents/Header/Header";
// import Footer from "../../Components/CommonComponents/Footer/Footer";
// import Table from "../../Components/CommonComponents/Table/Table";
// import "./ViewProcess.css";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import {loadProcesses} from '../../store/Actions/processesActions';

// const ViewProcess = () => {
//   const dispatch=useDispatch();

//   useEffect(function () {
//     dispatch(loadProcesses());
//   }, []);

//   const data=useSelector(state=>state.processes);
//   console.log(data)

//   const columns = [
//     { field: "id", headerName: "ID", width: 70 },
//     { field: "process_name", headerName: "Process Name", width: 130 },
//     { field: "role", headerName: "Role", width: 130 },
//     {
//       field: "current_state",
//       headerName: "Current State",
//       width: 90,
//     },
//     {
//       field: "to_state",
//       headerName: "To State",
//       width: 160,
//     },
//     {
//       field: "action_event",
//       headerName: "Action Event",
//       width: 160,
//     },
//   ];

//   const { processes, status } = useSelector(state => state.processes);

//   return (
//     <>
//       <Header />
//       <div className="table">
//         <h1 className="tableHeading">Process List</h1>
//         {status === 'loading' && <p>Loading...</p>}
//         {status === 'error' && <p>Error loading data.</p>}
//         {status === 'ready' && <Table rows={processes} columns={columns} />}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ViewProcess;


import React, { useState } from 'react'
import Header from '../../Components/CommonComponents/Header/Header'
import Footer from '../../Components/CommonComponents/Footer/Footer'
import CreateProcess from '../CreateProcess/CreateProcess';
import CreateProcessManualy from '../CreateProcessManualy/CreateProcessManualy';
import Registration from '../Registration/Registration';

const ViewProcess = () => {
  const [isCreateProcessUseBulkUpload, setIsCreateProcessUseBulkUpload] = useState(true);
  const [isCreateProcess, setIsCreateProcess] = useState(false);
  const [isUserAccess, setUserAccess] = useState(false);


  const onCreateProcessUsingBulkUpload = () => {
    setIsCreateProcessUseBulkUpload(true);
    setIsCreateProcess(false);
    setUserAccess(false);
  };

  const onCreateProcess = () => {
    setIsCreateProcess(true);
    setIsCreateProcessUseBulkUpload(false);
    setUserAccess(false);
  }

  const onUserAccess = () => {
    setUserAccess(true);
    setIsCreateProcess(false);
    setIsCreateProcessUseBulkUpload(false);
  }


  return (
    <>
      <Header />
      <div className='container'>
        <div className='home'>
          <div className="row text-center">
            <div className="col-lg-4 col-md-6" onClick={onCreateProcessUsingBulkUpload}>
              <div>
                <div className={isCreateProcessUseBulkUpload ? "cursor-pointer active" : "cursor-pointer"}>
                  <h5>Create Process Bulk Upload</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" onClick={onCreateProcess}>
              <div>
                <div className={isCreateProcess ? "cursor-pointer active" : "cursor-pointer"}>
                  <h5>Create Process Manualy</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" onClick={onUserAccess}>
              <div>
                <div className={isUserAccess ? "cursor-pointer active" : "cursor-pointer"}>
                  <h5>User Accress</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {(isCreateProcessUseBulkUpload && <CreateProcess />)}
        {(isCreateProcess && <CreateProcessManualy />)}
        {(isUserAccess && <Registration />)}
      </div>
      <Footer />
    </>
  )
}

export default ViewProcess

