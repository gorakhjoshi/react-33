import { FormEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useRegisterUserMutation } from '@/redux/services/users-api';

const notify = () => toast.success('User created successfylly.');

function App() {
  // const navigate = useNavigate();
  const [loginUser] = useRegisterUserMutation();

  const [credential, setCredential] = useState({ email: '', password: '' });

  // useEffect(() => {
  //   async function login() {
  //     const response = await loginUser({ email: 'abcde@gmail.com', password: 'test123' });
  //     console.log(response);
  //   }

  //   login();
  // }, []);

  async function createUser(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (credential.email === '' || credential.password === '') return;

    const response = await loginUser(credential);

    console.log(response);

    if (response.data?.accessToken) {
      // save in localstorage
      notify();
      // navigate('/dashboard');
      return;
    }

    toast.error('Could not create user!');
  }

  return (
    <>
      <Toaster />
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
    </>
  );
}

export default App;
