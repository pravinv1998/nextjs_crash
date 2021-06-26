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
            height="350"
            e
            width="450"
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
  const posts = await fetch(
    `${process.env.API_BASE_URL}${process.env.POST_URL}`
  );
  const data = await posts.json();

  return {
    props: {
      data,
    },
  };
}
