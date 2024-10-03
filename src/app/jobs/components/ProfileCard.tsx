'use client'

import React from 'react'

interface ProfileCardProps {
  name: string
  imageUrl: string
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, imageUrl }) => (
  <div className="flex flex-col items-start pr-1.5 pl-5 mt-6 text-xs">
    <img
      loading="lazy"
      src={imageUrl}
      alt={`Profile picture of ${name}`}
      className="object-contain aspect-[0.96] rounded-[30px] w-[65px]"
    />
    <div className="mt-2">{name}</div>
  </div>
)

export default ProfileCard
