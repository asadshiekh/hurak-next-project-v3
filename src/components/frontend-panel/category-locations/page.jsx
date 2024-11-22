'user client'
import CourseBanner from "../course-page/CourseBanner";
import CourseFaqs from "../course-page/CourseFaqs";
import CourseFeatures from "../course-page/CourseFeatures";
import FeatureSection from "../course-page/FeatureSection";
import ReviewsSection from "../course-page/ReviewsSection";
import CategoryCoursesSlider from "./categoryCoursesSlider";


const CategoryLocations = () => {

  const courseFeatures = [
    'Door Supervisor',
    'ACT Awareness & ACT Security courses included',
    'Recognising terrorism',
    'Effective crowd control techniques',
    'Physical Intervention',
    'Get certified in 10–15 working days'
  ];
  const reviews = [
    {
      name: 'Fred Pulisic',
      course: 'Hurak Learning',
      date: 'Tue July 30 2024',
      rating: 5,
      review: 'I booked my training through Hurak but I got my SIA training at Reed Training. The trainers were awesome and I did get the required treatment and training as I was told. Their service was good and I would love to do my CCTV training with them in the future.',
    },
    {
      name: 'Fred Pulisic',
      course: 'Hurak Learning',
      date: 'Tue July 30 2024',
      rating: 5,
      review: 'I booked my training through Hurak but I got my SIA training at Reed Training. The trainers were awesome and I did get the required treatment and training as I was told. Their service was good and I would love to do my CCTV training with them in the future.',
    },
    {
      name: 'Fred Pulisic',
      course: 'Hurak Learning',
      date: 'Tue July 30 2024',
      rating: 5,
      review: 'I booked my training through Hurak but I got my SIA training at Reed Training. The trainers were awesome and I did get the required treatment and training as I was told. Their service was good and I would love to do my CCTV training with them in the future.',
    },
    // Add more reviews here
  ];
  return (
    <div>
      <div className="w-full bg-white">
        <CourseBanner />
        <CourseFeatures features={courseFeatures} />
        <CategoryCoursesSlider />
        <ReviewsSection reviews={reviews} />
        <FeatureSection />
        <CourseFaqs />
      </div>
    </div>
  )
}

export default CategoryLocations;