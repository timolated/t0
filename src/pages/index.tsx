import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Timo Schwarzbach</title>
        <meta name="description" content="t0 by Timo Schwarzbach" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font flex h-screen w-screen items-center justify-center bg-black text-white">
        <Link
          className="flex w-full max-w-sm flex-row items-center gap-4 rounded-lg border-[1.5px] border-gray-500 p-4 text-xl text-gray-500 transition hover:border-white hover:text-white"
          target="_self"
          href="https://github.com/Timolated"
        >
          <FontAwesomeIcon icon={faGithub} className="w-12" />
          <span className="text-2xl font-semibold">Timolated</span>
        </Link>
      </main>
    </>
  );
};

export default Home;
