'use client'
import { SidebarAdmin } from '@/components/AdminSideBar'
import { useState } from 'react'

export default function Publicas() {
  const [activeTab, setActiveTab] = useState<'jobs' | 'artes'>('jobs')

  return (
    <div className="flex">
      <SidebarAdmin />

      <div className="flex flex-1 flex-col bg-black-click p-6 pt-[125px] text-white">
        <div className="mb-8 flex items-center justify-center gap-8 pb-4">
          <label
            className={`cursor-pointer text-xl font-bold text-white hover:text-gray-400 ${
              activeTab === 'jobs' ? 'border-b-2 border-white' : ''
            }`}
            onClick={() => setActiveTab('jobs')}
          >
            Jobs
          </label>
          <label
            className={`cursor-pointer text-xl font-bold text-white hover:text-gray-400 ${
              activeTab === 'artes' ? 'border-b-2 border-white' : ''
            }`}
            onClick={() => setActiveTab('artes')}
          >
            Artes
          </label>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {activeTab === 'jobs' ? <></> : <></>}
        </div>
      </div>
    </div>
  )
}
