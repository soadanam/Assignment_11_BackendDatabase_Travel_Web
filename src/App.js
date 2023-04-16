import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation, useParams } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import MyOrders from './components/MyOrders/MyOrders';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import AddAService from './components/AddAService/AddAService';


<link href="/dist/output.css" rel="stylesheet"></link>


function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            {/*     <Route path='/PlaceOrder' element={<PlaceOrder />}></Route> */}


            <Route path='/PlaceOrder' element={
              <ProtectedRoute>
                <PlaceOrder />
              </ProtectedRoute>
            } ></Route>

            <Route path='/myOrders' element={<MyOrders></MyOrders>}></Route>

            <Route path='/manageAllOrders' element={
              <ProtectedRoute>
                <ManageAllOrders></ManageAllOrders>
              </ProtectedRoute>
            }></Route>

            <Route path='/AddAService' element={
              <ProtectedRoute>
                <AddAService></AddAService>
              </ProtectedRoute>
            }></Route>

            <Route path='/login' element={<Login />}></Route>


            <Route path='*' element={<NotFound />}></Route>

          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
      
    </div>
  );

}

export default App;
