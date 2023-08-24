import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }: { children: ReactNode }) {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  if (user.token) {
    return children;
  }

  return <Navigate to="/" replace />;
}

export default ProtectedRoute;
