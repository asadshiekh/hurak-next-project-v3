import MockExamsTest from '@/components/frontend-panel/mock-exams-test/page'
const Page = ({ params }) => {
  return (
    <div>
      <MockExamsTest />
      {/* <h1>{params.url}</h1> */}
    </div>
  );
};

export default Page;