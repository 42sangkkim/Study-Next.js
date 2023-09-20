import { GetStaticProps, NextPage, NextPageContext } from "next";
import Head from "next/head";

type SSGProps = {
  message: string;
};

const SSG: NextPage<SSGProps> = (props) => {
  const { message } = props;

  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>이 페이지는 정적 생성을 통해 빌드 시 생성된 페이지입니다.</p>
        <p>{message}</p>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<SSGProps> = async () => {
  const timestamp = new Date().toLocaleString();
  const message = `현재 시각은 ${timestamp} 입니다.`;
  console.log(message);

  return {
    props: {
      message,
    },
  };
};

export default SSG;
