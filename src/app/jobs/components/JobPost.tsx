import React from 'react'

interface JobPostProps {
  id: string
  title: string
  description: string
  price: number
  date: string
  imageUrl: string
  onViewDetails: (id: string) => void
}

const JobPost: React.FC<JobPostProps> = ({
  id,
  title,
  description,
  price,
  date,
  imageUrl,
  onViewDetails,
}) => {
  return (
    <div className="bg-white text-black shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 duration-300 ease-in-out">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-black-click">{description}</p>
      <p className="text-green-400 font-bold">{`R$${price}`}</p>
      <p className="text-black-click text-sm">{date}</p>
      <button
        onClick={() => onViewDetails(id)}
        className="mt-4 bg-neutral-900 text-white py-2 px-4 rounded-lg hover:bg-blue-500"
      >
        Ver Detalhes
      </button>
    </div>
  );
};

export default JobPost;
