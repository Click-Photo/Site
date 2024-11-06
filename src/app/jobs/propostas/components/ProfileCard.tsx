'use client'

import Image from 'next/image'
import React from 'react'

interface ProfileCardProps {
  name: string
  imageUrl: string
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, imageUrl }) => (
  <div className="mt-6 flex flex-col items-start pl-5 pr-1.5 text-xs">
    <Image
      loading="lazy"
      src=""
      alt={`Profile picture of ${name}`}
      className="aspect-[0.96] w-[65px] rounded-[30px] object-contain"
    />
    <div className="mt-2">{name}</div>
  </div>
)

export default ProfileCard
