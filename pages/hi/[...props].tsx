import { NextPageContext } from 'next';
import { useRouter } from 'next/router';

const HiAll = ({ props: serverProps }: { props: string[] }) => {
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

export const getServerSideProps = (context: NextPageContext) => {
  // 서버에서 값을 가져오는 법
  const {
    query: { props },
  } = context;

  return {
    props: { props },
  };
};

export default HiAll;
