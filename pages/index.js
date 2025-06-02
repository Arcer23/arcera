import HomePage from "../container/HomePage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Arcera</title>
        <meta name="title" content="Arcera " />
        <meta
          name="description"
          content="Arcera is dedicated to empowering foreign students by providing expert academic support for projects, theses, and assignments. We combine deep understanding, quality work, and timely delivery to help you succeed in your educational journey. With Arcera, you get more than just assistance — you get a trusted partner committed to your academic excellence."
        />
        <meta
          name="keywords"
          content="
    Arcera academic help, foreign student project assistance, thesis writing service, assignment help online, best academic support, project guidance for students, thesis editing and proofreading, university assignment help, custom academic solutions, student research assistance, affordable thesis help, online assignment support, academic coaching for foreign students, project completion help, academic writing service
  "
        />

        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="copyright"
          content="Arcera . © Copyright 2025, All Rights Reserved."
        ></meta>
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Arcera Pranish" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Arcera" />
        <meta
  property="og:description"
  content="Arcera is an academic support agency helping foreign students succeed through expert assistance in projects, thesis writing, and assignments—delivered with precision, quality, and care."
/>

        <meta property="og:image" content="/images/banner.jpeg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Arcera" />
        <meta
          property="twitter:description"
          content="Arcera is an academic support agency helping foreign students succeed through expert assistance in projects, thesis writing, and assignments—delivered with precision, quality, and care."
        />
        <meta property="twitter:image" content="/images/banner.jpeg"></meta>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <HomePage />
    </>
  );
}
