import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./store/index";
import Home from "./Pages/Home/Home";
import { FontSizeProvider } from "./Components/FontSizeContext";

// Create a client for React Query
const queryClient = new QueryClient();

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <FontSizeProvider>
            <Router>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<Navigate to="/home" />} />
              </Routes>
            </Router>
          </FontSizeProvider>
        </QueryClientProvider>
      </Provider>
    </React.Fragment>
  );
}

export default App;
