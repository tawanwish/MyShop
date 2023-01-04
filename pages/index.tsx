import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Category from "../components/Category";
import Food from "../components/Food";
import HeadlineCards from "../components/HeadlineCards";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </div>
  );
};

export default Home;
