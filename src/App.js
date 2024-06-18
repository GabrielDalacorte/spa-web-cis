import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateUser from './pages/users/CreateUser';
import UserList from './pages/users/UserList';

function App() {

  return (
    <BrowserRouter>
      <div>
        <ToastContainer
          className='error_btn'
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Routes>
          <Route path="/" element={<Navigate to="/user" replace />} />
          <Route path="/user" element={<CreateUser />} />
          <Route path="/user/list" element={<UserList />} />
          <Route path="*" element={<Navigate to="/user" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
