const Routing = () => {
  console.log(typeof window === 'undefined' ? '서버' : '클라이언트');

  return <div>Client Routing / Server Routing</div>;
};

export const getServerSideProps = () => {
  return {
    props: {},
  };
};

export default Routing;
