import List from "../components/List";
import Link from "next/link";

const Teachers = () => {
  return (
    <div className="p-24 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#6C2CA7] via-[#120130] to-black">
      {/* <h1 className="text-center font-bold text-4xl">Teachers</h1> */}
      <List endpoint="/api/teachers" title="Teachers List" />
      <div className="mt-10">
        <Link
          href="/"
          className="py-2 px-5 bg-[#6C2CA7] text-[#E8E2EE] rounded-full"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default Teachers;
