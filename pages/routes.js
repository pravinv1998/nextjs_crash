import Link from "next/link";

const Routes = () => {
  return (
    <div>
      <h1>
        {" "}
        <Link href="/">Home</Link>{" "}
      </h1>
      <h1>
        {" "}
        <Link href="/hello">Hello</Link>{" "}
      </h1>
      <h1>
        {" "}
        <Link href="/cars">Cars</Link>{" "}
      </h1>
      {/* <h1> <Link href="/cars/" >Home</Link> </h1> */}
    </div>
  );
};

export default Routes;
