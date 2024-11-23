import {
  faStar as faStarSolid,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface StarRatingProps {
  score: number
}

export function StarRating({ score }: StarRatingProps) {
  const fullStars = Math.floor(score)
  const hasHalfStar = score - fullStars >= 0.5
  const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div className="flex space-x-1">
      {/* Renderiza as estrelas cheias */}
      {Array.from({ length: fullStars }, (_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStarSolid}
          className="h-4 w-4 text-[#F8B84E]"
        />
      ))}

      {/* Renderiza a meia-estrela, se necessário */}
      {hasHalfStar && (
        <FontAwesomeIcon
          icon={faStarHalfAlt}
          className="h-4 w-4 text-[#F8B84E]"
        />
      )}

      {/* Renderiza as estrelas vazias (contornadas) */}
      {Array.from({ length: remainingStars }, (_, index) => (
        <FontAwesomeIcon
          key={fullStars + index}
          icon={faStarRegular}
          className="h-4 w-4 text-[#F8B84E]"
        />
      ))}
    </div>
  )
}
