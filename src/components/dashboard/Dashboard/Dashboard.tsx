import EarningCharts from './EarningCharts'
import Statics from './Statics'
import TotalUserChart from './TotalUserChart'

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
