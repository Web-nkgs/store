"use client"
import styles from "./page.module.css";

export default function Home() {
  console.log("hii client component!!!");
  
  return (
    // Principal page
    <main className={styles.main}>
      <h1>Hello world!</h1>
    </main>
  );
}
