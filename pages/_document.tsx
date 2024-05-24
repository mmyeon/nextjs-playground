import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (
  ctx: DocumentContext
): Promise<DocumentInitialProps> => {
  // styled-components 스타일을 서버에서 초기화해 사용되는 클래스
  const sheet = new ServerStyleSheet();
  //   기존 renderPage에 추가적으로 styled-comopnents 관련 작업하기 위해 변수로 분리
  const originalRenderPage = ctx.renderPage;

  console.log(sheet);

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        // app을 렌더링할 때 추가로 수행하고 싶은 작업 정의
        // 기존 <App/> 위에 styled-components의 Context.API로 감싸는 형태
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

    // 기존 _document.tsx가 렌더링할 때 필요한 getInitialProps 생성하는 작업
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      //   styled-components에서 수집한 스타일도 함께 내려줌
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  } finally {
    sheet.seal();
  }
};
