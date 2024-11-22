import React from 'react'
import TestPrepBanner from './TestPrepBanner'
import TestPrepPopularTest from './TestPrepPopularTest'
import TestPrepAllTest from './TestPrepAllTest'
import TestPrepFreeResources from './TestPrepFreeResources'
const TestPrep = () => {
  return (
    <div>
      <TestPrepBanner />
      <TestPrepPopularTest />
      <TestPrepAllTest />
      <TestPrepFreeResources />
    </div>
  )
}

export default TestPrep
