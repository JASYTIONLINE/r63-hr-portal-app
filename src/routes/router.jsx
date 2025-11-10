import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App.jsx';
import HRPortal from '../pages/HRPortal.jsx';
import Login from '../pages/Login.jsx';
import EmployeeDashboard from '../pages/EmployeeDashboard.jsx';
import HRDashboard from '../pages/HRDashboard.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/login', element: <Login /> },
  { path: '/employee', element: <EmployeeDashboard /> },
  { path: '/hr', element: <HRDashboard /> },
  { path: '/portal', element: <HRPortal /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
