import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import HeaderSearch from "../components/HeaderSearch";
import Main from "../components/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Netflix roulette</title>
      </Head>
      <HeaderSearch />
      <Main />
      <Footer />
    </>
  );
}
