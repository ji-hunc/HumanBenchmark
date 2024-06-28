import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="bg-primary p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link
            href="/"
            className="text-white text-xl font-bold hover:text-gray-300"
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
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
