import React from 'react'
import { useNavigate } from 'react-router-dom'

const Result: React.FC = () => {
  const navigate = useNavigate()

  const handleNextClick = () => {
    navigate('/customizing')
  }

  return (
    <div className="bg-skyblue min-h-screen p-8">
      <div className="text-8xl font-bold p-24">PerfumeName</div>
      <img
        id="PerfumeImg"
        src="/assets/img/perfumeColor/1.png"
        alt="Perfume"
        className="float-right w-1/4 p-10"
      />
      <p className="pl-12 w-full md:w-1/2">
        프로젝트 'Memorium'은 인공지능 기반 맞춤형 향수 제작 웹으로, 향수와
        기억의 연결을 통해 특별한 나만의 향수를 제공합니다. '향수 공방의
        디지털화'를 목표로 개발된 이 웹은 사용자가 인공지능 챗봇과 대화를 통해
        자신의 취향에 맞는 향수를 추천받도록 설계되었습니다. 이 프로젝트는
        오프라인 방문 없이도 웹에서 간편하게 맞춤형 향수를 제작할 수 있으며,
        커스터마이징 기능을 통해 추억을 담을 수 있는 이벤트를 제공하여 사용자의
        경험을 더욱 특별하게 만들어 줍니다.
      </p>
      <div className="mt-10">
        <p className="font-bold text-2xl pt-10 pl-12">Recipe</p>
        <p className="inline-block px-32">Top</p>
        <p className="inline-block px-32">Middle</p>
        <p className="inline-block px-32">Bottom</p>
      </div>
      <button
        type="button"
        title="Next"
        onClick={handleNextClick}
        className="bg-blue-500 text-white border-none py-3 px-8 text-center inline-block text-lg m-2 cursor-pointer rounded transition duration-400 absolute transform translate-x-full translate-y-full hover:text-black"
      >
        Next
      </button>
    </div>
  )
}

export default Result
