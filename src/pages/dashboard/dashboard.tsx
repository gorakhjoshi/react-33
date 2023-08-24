import { useNavigate } from 'react-router-dom';
import { logout } from '@/redux/feature/auth-slice';
import { useAppDispatch } from '@/redux/store/hooks';

function Dashboard() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <div>Dashboard</div>
      <button
        type="button"
        onClick={() => {
          dispatch(logout());
          navigate('/');
        }}
        className="border p-2"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
