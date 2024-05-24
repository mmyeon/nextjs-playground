import styled from 'styled-components';

const ErrorButton = styled.button`
  color: red;
  font-size: 2rem;
`;

const My404Page = () => {
  return (
    <>
      <h1>페이지를 찾을 수 없습니다.</h1>
      <ErrorButton type="button">경고 !</ErrorButton>
    </>
  );
};

export default My404Page;
