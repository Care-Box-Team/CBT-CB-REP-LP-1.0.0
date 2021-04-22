import { Head } from "next/document";

export default function Home() {
    return (
      <>
        <Head>
          <title>Olma</title>
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta name="title" content="Olma" />
          <meta name="description" content="Los mejores productos de belleza." />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        
        <main>
            <div>
                <p>Hola soy Box Care</p>
            </div>
        </main>
      </>
    );
  }