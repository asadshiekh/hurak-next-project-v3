import React from 'react'
import TestPrepBanner from './TestPrepBanner'
import TestPrepResources from './TestPrepResources'
import TestPrepMockExam from './TestPrepMockExam'
import TestPrepMockDescription from './TestPrepMockDescription'
import TestPrepBookNowCourse from './TestPrepBookNow'
import TestPrepMockReview from './TestPrepMockReview'
import TestPrepBookNowCard from './TestPrepBookNowCard'
import TestPrepRelativeBlogsAndCourses from './TestPrepRelativeBlogsAndCourses'
const TestPrep = () => {
  return (
    <div>
      <TestPrepBanner />


      <div className="grid grid-cols-8">
        <div className="col-start-1 col-span-8 lg:col-start-2 lg:col-span-4 py-5 px-6 lg:px-0 lg:order-1 order-2">
          <TestPrepResources />
          <TestPrepMockExam />
          <TestPrepMockDescription />
        </div>
        <div className="p-5 lg:pr-0 col-span-8 lg:col-span-2 lg:-mt-60 lg:order-2 order-1">
         <TestPrepBookNowCard />
         <TestPrepRelativeBlogsAndCourses heading={'More Tests & Resources'}/>
         <TestPrepRelativeBlogsAndCourses heading={'Frequently Bought Courses'}/>
        </div>
      </div>

      <TestPrepBookNowCourse />
      <TestPrepMockReview />
    </div>
  )
}

export default TestPrep
