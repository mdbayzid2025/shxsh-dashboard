import React from 'react'
import Statics from './Statics'
import TotalUserChart from './TotalUserChart'
import EarningCharts from './EarningCharts'

export const Dashboard = () => {
  return (
    <div>
      <Statics />
      <div className="flex flex-col gap-6">
        <TotalUserChart />
        <EarningCharts />
      </div>
    </div>
  )
}
