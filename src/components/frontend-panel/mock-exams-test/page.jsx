import React from 'react'
import MockExamBanner from './MockExamBanner.jsx'
import MockExamQuestions from './MockExamQuestions'
import MockExamComments from './MockExamComments'
import TestPrepMockExam from '@/components/frontend-panel/test-prep/TestPrepMockExam'
import TestPrepBookNowCourse from '@/components/frontend-panel/test-prep/TestPrepBookNow'

const MockExamsTest = () => {
  return (
    <>
      <div>
        <MockExamBanner />
        <MockExamQuestions />
      </div>

      <div className="grid grid-cols-8">
        <div className="col-start-1 col-span-8 lg:col-start-2 lg:col-span-4 py-5 px-6 lg:px-0 lg:order-1 order-2">
          <TestPrepMockExam />
        </div>
      </div>
      <div>
        <TestPrepBookNowCourse />
        <MockExamComments />
      </div>
    </>
  )
}

export default MockExamsTest
