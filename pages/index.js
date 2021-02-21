import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lets Learn React-Spring</title>
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
        <h1>A. Change Opacity</h1>
        <div className="grid grid-cols-2x">
          <a href="./1-simple" className={styles.card + " card-s"}>
            <h3>1. Simple Toggle &rarr;</h3>
            <p>useSpring &bull; from &bull; to </p>
          </a>
          <a href="./2-no-action" className={styles.card + " card-s"}>
            <h3>2. No Action &rarr;</h3>
            <p>useSpring &bull; from &bull; to &bull; duration</p>
          </a>
        </div>
        <h1>B. Change Opacity and Size</h1>
        <div className="grid grid-cols-2x">
          <a href="./3-simple-opacity-size" className={styles.card + " card-s"}>
            <h3>3. Simple Toggle &rarr;</h3>
            <p>useSpring &bull; from &bull; to </p>
          </a>
          <a href="./4-auto-opacity-size" className={styles.card + " card-s"}>
            <h3>4. No Action &rarr;</h3>
            <p>useSpring &bull; from &bull; to &bull; duration</p>
          </a>
        </div>
        <h1>C. More values</h1>
        <q>Do not think of the values you pass as "styles" per se</q>
        <a
          href="https://www.react-spring.io/docs/hooks/basics"
          target="_blank"
          className="link"
        >
          Go to Original Docs
        </a>
        <div className="grid grid-cols-2x">
          <a href="./5-value" className={styles.card + " card-s"}>
            <h3>5. Value &rarr;</h3>
            <p>useSpring &bull; from &bull; to &bull; duration &bull; getValue() &bull; interpolate() </p>
          </a>
          <a href="./4-auto-opacity-size" className={styles.card + " card-s"}>
            <h3>6. Interpolate within useSpring &rarr;</h3>
            <p>useSpring &bull; from &bull; to &bull; duration</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/ejabu/" target="_blank">
          @2021 - Muhammad Fahreza
        </a>
      </footer>
    </div>
  );
}
