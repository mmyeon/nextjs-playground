import { NextPageContext } from 'next';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router';

const HiAll = ({ props: serverProps = [] }: { props: string[] }) => {
  // 클라이언트에서 값을 가져오는 법
  const {
    query: { props },
  } = useRouter();

  return (
    <>
      Hi{' '}
      <ul>
        {serverProps.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  // 서버에서 값을 가져오는 법
  const {
    query: { id },
  } = context;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  const todos = await response.json();

  if (response.status === 404) {
    return {
      redirect: {
        destination: '/404',
      },
    };
  }

  return {
    props: { todos },
  };
};

export default HiAll;
