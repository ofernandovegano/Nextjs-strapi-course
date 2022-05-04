import Head from "next/head";
import Header from "./Header";
import Footer from "~components/Footer";
import styles from "~styles/Layout.module.css";

export default function Layout({
  title = "DJ Events | Find the hottest parties",
  description = "Find the latest and other musical events",
  keywords = "music, dj, events",
  children = <></>,
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />
      <div className={styles.container}></div>
      {children}
      <Footer />
    </div>
  );
}
