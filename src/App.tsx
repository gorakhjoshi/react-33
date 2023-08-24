import { FormEvent, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '@/redux/services/users-api';
import { useAppDispatch } from './redux/store/hooks';
import { setUser } from './redux/feature/auth-slice';

function App() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [registerUser, { data: registerResponse, isSuccess }] =
    useRegisterUserMutation();

  const [credential, setCredential] = useState({ email: '', password: '' });

  useEffect(() => {
    if (isSuccess && registerResponse) {
      toast.success('User created!!');

      dispatch(
        setUser({
          token: registerResponse.accessToken,
          email: registerResponse.user.email,
        })
      );
      navigate('/dashboard');
    }
  }, [isSuccess]);

  async function createUser(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (credential.email === '' || credential.password === '') return;

    await registerUser(credential);
  }

  return (
    <form className="m-10 flex flex-col gap-2" onSubmit={createUser}>
      <label htmlFor="email">
        Email
        <input
          type="email"
          className="border"
          onChange={(e) =>
            setCredential((prevState) => ({
              ...prevState,
              email: e.target.value,
            }))
          }
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          className="border"
          onChange={(e) =>
            setCredential((prevState) => ({
              ...prevState,
              password: e.target.value,
            }))
          }
        />
      </label>
      <button type="submit" className="border">
        Submit
      </button>
    </form>
  );
}

export default App;
