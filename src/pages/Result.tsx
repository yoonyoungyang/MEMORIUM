// src/pages/Result.tsx
import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from 'chart.js'
import React, { useState } from 'react'
import { Radar } from 'react-chartjs-2'
import { useNavigate } from 'react-router-dom'
import { usePerfume } from '../contexts/perfume'

// Register the components for the radar chart
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

const Result: React.FC = () => {
  const navigate = useNavigate()
  const { perfume } = usePerfume()
  console.log('perfume: ', perfume)

  const handleNextClick = () => {
    navigate('/customizing')
  }

  const data = {
    labels: ['Woody', 'Oriental', 'Fresh', 'Floral', 'Citrus'],
    datasets: [
      {
        label: 'Scent Profile',
        data: [8, 6, 5, 4, 7],
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(255, 255, 255, 1)',
      },
    ],
  }

  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
          color: 'rgba(255, 255, 255, 0.2)',
        },
        grid: {
          display: true,
          circular: true,
          color: 'rgba(255, 255, 255, 0.2)',
        },
        ticks: {
          display: true,
          color: 'white',
          stepSize: 2,
        },
        pointLabels: {
          color: 'white',
        },
        suggestedMin: 0,
        suggestedMax: 10,
      },
    },
    elements: {
      line: {
        tension: 0, // Keep the data shape as a polygon (pentagon)
      },
    },
  }
  const [changeTopImg, setChangeTopImg] = useState('Figue')
  const topIngredient = ['Figue', 'Greentea', 'Bitterlemon']
  const changeTopIngImg = (chooseTop: string) => {
    setChangeTopImg(chooseTop)
  }
  const [changeMiddleImg, setChangeMiddleImg] = useState('Seascent')
  const middleIngredient = ['Seascent', 'YlangYlang', 'Freesia']
  const changeMiddleIngImg = (chooseMiddle: string) => {
    setChangeMiddleImg(chooseMiddle)
  }
  const [changeBottomImg, setChangeBottomImg] = useState('Figue')
  const bottomIngredient = ['Figue', 'Greentea', 'Bitterlemon']
  const changeBottomIngImg = (chooseBottom: string) => {
    setChangeBottomImg(chooseBottom)
  }
  return (
    <div className="bg-gray-800 text-white min-h-screen p-8 font-serif">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-6xl font-bold">A Cool Dawn</h1>
            <p className="text-2xl mt-2">서늘한 여명</p>
            <p className="text-lg mt-8 leading-relaxed">
              아침 이슬을 닮은 서늘함과 신선함을 표현한 향수입니다. Top 노트의
              그린티가 청량한 아침을 깨우고, Middle 노트의 블랙베리가 달콤하고
              풍부한 향을 더합니다. Base 노트로는 모스가 자연의 진한 향을
              선사합니다.
            </p>
            <h2 className="text-4xl font-bold mt-16">RECIPE</h2>
            <div className="flex justify-between mt-8">
              <div className="text-center">
                <h3 className="text-2xl mb-4">TOP</h3>
                <img
                  src={`/assets/img/recipe_img/${changeTopImg}.png`}
                  alt="Top Note"
                  className="h-32 mx-auto"
                />
                <div className="flex space-x-4 pt-3">
                  {topIngredient.map(function (IngEl) {
                    return (
                      <button
                        title={`${IngEl}버튼`}
                        type="button"
                        id={`btn_${IngEl}`}
                        onClick={() => changeTopIngImg(IngEl)}
                        className={`h-12 w-full rounded-full bg-red-500`}
                      >
                        {IngEl}
                      </button>
                    )
                  })}
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl mb-4">MIDDLE</h3>
                <img
                  src={`/assets/img/recipe_img/${changeMiddleImg}.png`}
                  alt="Middle Note"
                  className="h-32 mx-auto"
                />
                <div className="flex space-x-4 pt-3">
                  {middleIngredient.map(function (IngEl) {
                    return (
                      <button
                        title={`${IngEl}버튼`}
                        type="button"
                        id={`btn_${IngEl}`}
                        onClick={() => changeMiddleIngImg(IngEl)}
                        className={`h-12 w-full rounded-full bg-blue-500`}
                      >
                        {IngEl}
                      </button>
                    )
                  })}
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl mb-4">BASE</h3>
                <img
                  src={`/assets/img/recipe_img/${changeBottomImg}.png`}
                  alt="Base Note"
                  className="h-32 mx-auto"
                />
                <div className="flex space-x-4 pt-3">
                  {bottomIngredient.map(function (IngEl) {
                    return (
                      <button
                        title={`${IngEl}버튼`}
                        type="button"
                        id={`btn_${IngEl}`}
                        onClick={() => changeBottomIngImg(IngEl)}
                        className={`h-12 w-full rounded-full bg-purple-500`}
                      >
                        {IngEl}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-16 md:mt-0">
            <Radar data={data} options={options} />
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <button
            onClick={handleNextClick}
            className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Make Perfume Bottle
          </button>
        </div>
      </div>
    </div>
  )
}

export default Result
