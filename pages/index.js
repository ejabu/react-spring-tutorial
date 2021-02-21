import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Let's Learn <a href="https://www.react-spring.io/">React Spring</a>
        </h1>

        <p className={styles.description}>
          Compiled and Shared by{" "}
          <a href="https://github.com/ejabu/">
            <code className={styles.code}>Ejabu</code>
          </a>
        </p>

        <div className="grid grid-cols-2x">
          <a href="./1-simple" className={styles.card + " card-s"}>
            <h3>1. Simple Toggle &rarr;</h3>
            <p>useSpring &bull; from &bull; to </p>
          </a>
          <a href="./1-simple" className={styles.card + " card-s"}>
            <h3>1. Simple Toggle &rarr;</h3>
            <p>useSpring &bull; from &bull; to </p>
          </a>
          <a href="./1-simple" className={styles.card + " card-s"}>
            <h3>1. Simple Toggle &rarr;</h3>
            <p>useSpring &bull; from &bull; to </p>
          </a>
          <a href="./1-simple" className={styles.card + " card-s"}>
            <h3>1. Simple Toggle &rarr;</h3>
            <p>useSpring &bull; from &bull; to </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/ejabu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @2021 - Muhammad Fahreza
        </a>
      </footer>
    </div>
  );
}
