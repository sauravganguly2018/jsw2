import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from './store/index';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Registration from './Pages/Registration/Registration'
import CreateProcess from './Pages/CreateProcess/CreateProcess';
import ViewProcess from './Pages/ViewProcess/ViewProcess';
import ViewProcessQuery from './Pages/ViewProcess/ViewProcessQuery';
import { useSelector } from 'react-redux';
import { FontSizeProvider } from './Components/CommonComponents/FontSizeContext';
import CreateProcessManualy from './Pages/CreateProcessManualy/CreateProcessManualy';
import Loader from './Components/CommonComponents/Loader/Loader';
import Header from './Components/CommonComponents/Header/Header';
import Footer from './Components/CommonComponents/Footer/Footer';
// import { useDispatch } from 'react-redux';
// import loginUser from './store/Actions/authActions';

// Create a client for React Query
const queryClient = new QueryClient();



function App() {
  // const isLoggedIn = localStorage.getItem('isLoggedIn');
  // console.log(isLoggedIn);

  // const [loading, setLoading] = useState(false);

  return (
    <React.Fragment>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <FontSizeProvider>
            {/* <Header /> */}
            <Router>
              <Routes>
                {/* <Route path="/" element={<ViewProcess />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} /> */}
              <Route path="/home" element={<Home />} />
              {/* <Route path="*" element={isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />} />
              <Route path="/create-process" element={<CreateProcess />} />
              <Route path="/create-process-Manualy" element={<CreateProcessManualy />} />
              <Route path="/view-process" element={<ViewProcess />} />
              <Route path="/view-process-query" element={<ViewProcessQuery />} />
              <Route path="/register" element={<Registration />} /> */}
              <Route path="*" element={<Navigate to="/home" />} />
              </Routes>
            </Router>
            {/* <Footer /> */}
          </FontSizeProvider>
        </QueryClientProvider>
      </Provider>
    </React.Fragment>
  );
}

export default App;
