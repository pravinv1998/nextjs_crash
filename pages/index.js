import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Routes from "./routes";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        {" "}
        <title> Home Page </title>{" "}
      </Head>
      <h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum,
        explicabo quisquam doloribus similique nesciunt commodi! Molestiae,
        rerum iure repellendus quod veritatis quae tenetur, amet beatae
        accusantium delectus ipsum ipsam omnis?
      </h1>

      <Routes />

      <Image
        src="/images/world.jpg"
        alt="test image"
        height={1100}
        width={1100}
      />
      <hr />
    </div>
  );
}
