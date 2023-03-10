import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import NavBar from './Pages/Home/NavBar/NavBar';
import router from './Router/Routes';

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>

  );
}

export default App;
