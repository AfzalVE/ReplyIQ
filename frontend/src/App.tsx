import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


import Home from "./pages/Home";
import History from "./pages/History";
import Register from "./pages/Register";
import Login from "./pages/Login";

import ProtectedRoute from "./components/ProtectedRoute";



function App() {


    return (

        <BrowserRouter>

            <Routes>


                {/* Public Routes */}

                <Route
                    path="/login"
                    element={<Login />}
                />


                <Route
                    path="/register"
                    element={<Register />}
                />



                {/* Protected Routes */}


                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />


                <Route
                    path="/history"
                    element={
                        <ProtectedRoute>
                            <History />
                        </ProtectedRoute>
                    }
                />


            </Routes>


        </BrowserRouter>

    );

}


export default App;