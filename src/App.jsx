import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import InfoCard from './components/InfoCard';
import DashboardChart from './components/DashboardChart';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold mb-6 text-center">Web Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <InfoCard title="Users" value="1,234" />
        <InfoCard title="Revenue" value="$12,345" />
        <InfoCard title="Growth" value="8%" />
      </div>
      <div className="bg-white rounded shadow p-6">
        <DashboardChart />
      </div>
    </>
  )
}

export default App
