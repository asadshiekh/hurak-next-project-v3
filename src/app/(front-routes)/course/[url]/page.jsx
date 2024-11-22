
import CoursePage from '@/components/frontend-panel/course-page/page';

const CourseSection = ({ params }) => {
  const { url } = params;
  return (
    <>
      <CoursePage course_url={url} />
    </>
  );
};

export default CourseSection;
