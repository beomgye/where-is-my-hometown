import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <main className={`${styles.main}`}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/pages/index.js</code>
        </p>
      </div>

      <div>
        범계역
        <b>2번출구</b>
        오후 2시까지
      </div>

      <div className={styles.center} />

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs
            <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and&nbsp;API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn
            <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates
            <span>-&gt;</span>
          </h2>
          <p>Discover and deploy boilerplate example Next.js&nbsp;projects.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy
            <span>-&gt;</span>
          </h2>
          <p>Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel.</p>
        </a>
      </div>
    </main>
  );
}
