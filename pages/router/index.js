import { Router, useRouter, withRouter } from "next/router";
import Link from "next/link";

// const Index = () => {
//   const router = useRouter();
//   console.log(router);

//   return (
//     <div>
//       <h1>main route</h1>
//     </div>
//   );
// };

// export default Index;

//withROuter
// const index = ({ router }) => {
//   return (
//     <div>
//       <h1>main route</h1>
//     </div>
//   );
// };

// export default withRouter(index);

// Router.push

const Index = () => {
  return (
    <div>
      <Link href="/"> Home </Link>

      <h1>router page</h1>
    </div>
  );
};

export default Index;
