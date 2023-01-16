import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { createAuth0Client } from "@auth0/auth0-spa-js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beat Cyber</title>
        <meta name="description" content="Welcome to beat-cyber" />
        <link rel="icon" href="/peter.png" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <img
            src="https://cdn.pixabay.com/photo/2022/08/13/14/18/neon-lights-7383803_1280.jpg"
            title="Cyber-Cubes"
            className={styles.logo}
          />
          <h1 className={styles.title}>Bienvenue sur Beat-Cyber</h1>

          <figure>
            <Link href="./">
              <img src="/home.png" className={styles.connect} />
            </Link>
          </figure>

          <p className={styles.description}>
            La plateforme d'entraînement Cyber de Mines Nancy
          </p>
        </header>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
