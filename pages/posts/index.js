import Link from "next/link";
import styled from "@emotion/styled";
import styles from "./Index.module.scss";
import Image from "next/image";

const Styledh3 = styled.h1({
  fontSize: "18px",
  marginTop: "60px",
});

const index = ({ data }) => {
  return (
    <ul className="row">
      {data.map((post) => (
        <li key={post.id} className="col-md-3">
          <Image
            className="mb-5"
            src="/images/1.png"
            alt="me"
            width="450"
            height="350"
          />
          <Styledh3>
            <Link href={`/posts/${post.id}`}>
              <a> {post.title} </a>
            </Link>
          </Styledh3>
          <hr />
        </li>
      ))}
    </ul>
  );
};

export default index;

export async function getStaticProps() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await posts.json();
  return {
    props: {
      data,
    },
  };
}
