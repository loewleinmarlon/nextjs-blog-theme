import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7342102379369245"
     crossorigin="anonymous"></script>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
    </Head>
  );
}
