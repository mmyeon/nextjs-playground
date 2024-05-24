import Link from 'next/link';

const Home = () => {
  return (
    <ul>
      {/* <li>
        <a href="/hi">A태그로 이동</a>
      </li> */}
      <li>
        <Link prefetch={false} href="/hi">
          next/link로 이동
        </Link>
      </li>
    </ul>
  );
};

export default Home;
