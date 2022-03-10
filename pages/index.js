import styles from "../styles/Home.module.css";

// Import all components/section
import Header from "../components/Header/Header";
import Apropos from "./apropos";
import Services from "./services";
import Contact from "./contact";
import Realisations from "./realisations";

import Separator from "../components/Reusable/Separator";

export default function Home() {
  return (
    <div >
      {/*  Header */}
      <Header />
      {/* <Separator/> */}
      {/*  Main content of hompage */}
      <main className={styles.main}>
        <section id="services">
          <Services />
        </section>
        <Separator text="Décontamination Précision Lacroix inc"/>

        <section id="à-propos">
          <Apropos />
        </section>
        <Separator text="Pour plus d'informations"/>

        <section id="contact">
          <Contact />
        </section>
        <Separator text="Notre équipe"/>

        <section id="réalisation">
          <Realisations />
        </section>
        <Separator text="Réalisations"/>
        
      </main>
    </div>
  );
}

{
  /* Default code
<main className={styles.main}>
<h1 className={styles.title}>
  Welcome to <a href="https://nextjs.org">Next.js!</a>
</h1>

<p className={styles.description}>
  Get started by editing{' '}
  <code className={styles.code}>pages/index.js</code>
</p>

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
    className={styles.card}
  >
    <h2>Deploy &rarr;</h2>
    <p>
      Instantly deploy your Next.js site to a public URL with Vercel.
    </p>
  </a>
</div>
</main> */
}
