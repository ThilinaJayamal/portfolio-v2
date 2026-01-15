import React from 'react'
import { FiExternalLink } from "react-icons/fi";

function EducationCard({
  img,
  title,
  subTitle,
  date,
  credentialId,
  credentialLink,
  isLast
}) {
  return (
    <div className={`flex gap-4 justify-start items-start pb-6 max-w-2xl ${!isLast && 'border-b border-white/70'}`}>
      <img src={img} className='size-16 rounded-md' alt={title} />

      <div>
        <p className='text-lg text-white/90 font-semibold'>{title}</p>
        <p className='text-lg text-white/90'>{subTitle}</p>
        <p className='bg-white/10 text-white rounded-full p-1 px-3 text-sm font-medium w-fit my-1'>{date}</p>

        {credentialId && (
          <p className='bg-white/10 text-white rounded-full p-1 px-3 text-sm font-medium w-fit my-1.5'>Credential ID: {credentialId}</p>
        )}

        {credentialLink && (
          <a
            href={credentialLink}
            target="_blank"
            rel="noopener noreferrer"
            className='mt-2 border-2 border-white/80 text-white/80 hover:text-white hover:border-white w-44 h-10 flex items-center justify-center gap-2 rounded-full'
          >
            Show credential <FiExternalLink className='inline text-xl' />
          </a>
        )}
      </div>
    </div>
  )
}

export default EducationCard
