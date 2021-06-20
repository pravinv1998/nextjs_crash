import { useRouter } from "next/router";

// const posts = [
//   {
//     userId: 1,
//     id: 1,
//     title:
//       "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//   },
//   {
//     userId: 1,
//     id: 2,
//     title: "qui est esse",
//     body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
//   },
//   {
//     userId: 1,
//     id: 3,
//     title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//     body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
//   },
//   {
//     userId: 1,
//     id: 4,
//     title: "eum et est occaecati",
//     body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
//   },
//   {
//     userId: 1,
//     id: 5,
//     title: "nesciunt quas odio",
//     body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
//   },
//   {
//     userId: 1,
//     id: 6,
//     title: "dolorem eum magni eos aperiam quia",
//     body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
//   },
//   {
//     userId: 1,
//     id: 7,
//     title: "magnam facilis autem",
//     body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
//   },
//   {
//     userId: 1,
//     id: 8,
//     title: "dolorem dolore est ipsam",
//     body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
//   },
//   {
//     userId: 1,
//     id: 9,
//     title: "nesciunt iure omnis dolorem tempora et accusantium",
//     body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
//   },
//   {
//     userId: 1,
//     id: 10,
//     title: "optio molestias id quia eum",
//     body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
//   },
// ];

// function getPostDataById(id) {
//   for (let i = 0; i < posts.length; i++) {
//     if (posts[i].id === parseInt(id)) {
//       return posts[i];
//     }
//   }
// }

const PostDetails = ({ postData }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div> Loading page data...</div>;
  }

  // const data = router.query.id;
  //   const post = posts.filter((vl) => vl.id === data);

  // const postData = getPostDataById(id);
  //   const postData = getPostDataById(data);

  // console.log(data);

  return (
    <div>
      {/* <h1>data props- {data} </h1> */}
      <h1>Id: {postData.id} </h1>
      <h1>Title: {postData.title} </h1>
      <h2>Body: {postData.body} </h2>
    </div>
  );
};

export default PostDetails;

// PostDetails.getInitialProps = async ({ query }) => {
//   const { id } = query;
//   return { id };
// };

export async function getStaticPaths() {
  const paths = ["/posts/1", "/posts/2"];
  return { paths, fallback: true };
}

export async function getStaticProps({ query, params }) {
  const { id } = query || params;
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const postData = await res.json();
  return {
    props: {
      postData,
    },
  };
}

// export async function getServerSideProps({ query, params }) {
//   const { id } = query || params;
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const postData = await res.json();
//   console.log(postData);
//   return {
//     props: {
//       postData,
//     },
//   };
// }
