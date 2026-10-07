import React from 'react'
import ScoreCard from '../components/ScoreCard'
import Suggestions from '../components/Suggestions'
import AreasToImprove from '../components/AreasToImprove'
import WorkingWell from '../components/WorkingWell'

const JDAnalysis = () => {
  return (
    <div className="mx-auto grid h-screen w-full max-w-[1700px] grid-rows-[auto_minmax(0,1fr)_auto] gap-3 overflow-hidden px-5 pb-3 pt-28 text-[#111] sm:px-6 lg:gap-4 lg:px-7">
      <ScoreCard />
      <div className="grid min-h-0 grid-cols-1 items-stretch gap-3 lg:grid-cols-2 lg:gap-4">
        <AreasToImprove />
        <WorkingWell />
      </div>
      <Suggestions />
    </div>
  )
}

export default JDAnalysis
