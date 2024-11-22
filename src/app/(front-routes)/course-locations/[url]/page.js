import CourseLocation from "@/components/frontend-panel/course-locations/page";

const Page = ({ params }) => {
  return (
    <div>
      <CourseLocation />
      {/* <h1>{params.url}</h1> */}
    </div>
  );
};

export default Page;
