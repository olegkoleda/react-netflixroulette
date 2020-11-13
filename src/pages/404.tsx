import Head from "next/head";
import React from "react";
import PageNotFound from "../components/PageNotFound";

export default function ErrorPage() {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <PageNotFound />
    </>
  );
}
