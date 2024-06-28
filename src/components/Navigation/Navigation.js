import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import LoginState from '../../States/LoginState';

const Navigation = () => {
  const loginState = useRecoilValue(LoginState);
  console.log(loginState);

  return (
    <nav className="p-4 bg-primary">
      <div className="flex items-center justify-between 4xl:mx-6 2xl:mx-4 xs:mx-2">
        <div>
          <Link
            href="/"
            className="text-xl font-bold text-white hover:text-gray-300"
          >
            HumanStats
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/signup" className="text-white hover:text-gray-300">
              Sign Up
            </Link>
          </li>
          <li>
            <Link href="/login" className="text-white hover:text-gray-300">
              {loginState.isLogin ? 'Logout' : 'Login'}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
