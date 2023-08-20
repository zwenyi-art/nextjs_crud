import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-700 px-8 py-2">
      <Link className="text-white font-bold" href={"/"}>
        ZCoding
      </Link>
      <Link className=" bg-slate-300 p-2 hover:bg-slate-100" href={"/addTopic"}>
        Add Topic
      </Link>
    </nav>
  );
};

export default Navbar;
