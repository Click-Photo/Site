import React from 'react'

interface UserProfileProps {
  name: string
  userType: 'cliente' | 'fotografo'
  avatarUrl: string
  jobsCompleted?: number
  rating?: number
  bookedJobs?: number
}

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  userType,
  avatarUrl,
  jobsCompleted,
  rating,
  bookedJobs,
}) => {
  return (
    <div className="profile-container text-center">
      <h1 className="mt-4 text-2xl font-bold">{name}</h1>

      {/* Informações específicas para o Fotógrafo */}
      {userType === 'fotografo' && (
        <div className="mt-4">
          <p>Jobs Completados: {jobsCompleted}</p>
          <p className="text-yellow-500">⭐ {rating}</p>
        </div>
      )}

      {/* Informações específicas para o Cliente */}
      {userType === 'cliente' && (
        <div className="mt-4">
          <p>Jobs Agendados: {bookedJobs}</p>
        </div>
      )}
    </div>
  )
}

export default UserProfile
