import Link from "next/link";
import Head from "next/head";
// import Script from "next/script";
import Layout from "../../components/layout";
const FirstPost = () => {
  return (
    <Layout>
      {/* Title component */}
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>

      {/* Link component */}

      <h2>
        <Link href="/"> Back to home</Link>{" "}
      </h2>
    </Layout>
  );
};
export default FirstPost;
