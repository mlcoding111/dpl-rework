import styles from "../styles/Home.module.css";

// Import all components/section
import Header from "../components/Header/Header";
import Apropos from "./A-propos";
import Services from "./Services";
import Contact from "./Contact";
import Realisations from "./Realisations";

import Separator from "../components/Reusable/Separator";
import TopMessage from "../components/Reusable/TopMessage";

export default function Home() {
  return (
    <>
      {/*  Header */}
      <Header />
      {/* <Separator/> */}
      {/*  Main content of hompage */}
      <main className={styles.main}>
  
        <Separator/>
        <section id="services">
          <Services />
        </section>
        <Separator text="Décontamination Précision Lacroix"/>

        <section id="à-propos">
          <Apropos />
        </section>
        <Separator text="Pour plus d'informations"/>

        <section id="contact">
          <Contact />
        </section>

        <Separator/>
        <section id="realisation">
          <Realisations />
        </section>
        {/* <Separator text="Notre équipe"/> */}
        
      </main>
    </>
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
