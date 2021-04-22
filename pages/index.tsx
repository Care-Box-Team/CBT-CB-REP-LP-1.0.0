import Head from "next/head";
import { Header } from "../src/Header/Header";
import { Panel } from "../src/Panel/Panel";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Carebox</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Pagina de productos de aseo personal"
        />{" "}
      </Head>
      <Header />
      <Panel />
    </div>
  );
}
