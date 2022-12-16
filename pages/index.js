import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Ghislain Mitahi, I'm a software engineer in love
          with pair programming, with good good communication skill(soft skill) contact me <a href="https://twitter.com/GMitahi">Twitter</a></p>
        <p>
          Here Is my sample web site that will help me
          to handle with Next.js and start make serious webSite in few up coming days.
          __🙂 happy to hear that from you my friend Ghislain Mitahi, Let's grow, Free way in front of us !!!
        </p>
      </section>
    </Layout>
  );
}