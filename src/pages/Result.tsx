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
  const handleNextClick = () => {
    navigate('/customizing')
  }

  const changeTopImgSource = () => {
    if (perfume?.recipe.top.name === 'Figue')
      return '/assets/img/recipe_img/Figue.png'
    if (perfume?.recipe.top.name === 'Green Tea')
      return '/assets/img/recipe_img/Greentea.png'
    if (perfume?.recipe.top.name === 'Bitter Lemon')
      return '/assets/img/recipe_img/Bitterlemon.png'
    return ''
  }
  const changeMiddleImgSource = () => {
    if (perfume?.recipe.middle.name === 'Ilang Ilang')
      return '/assets/img/recipe_img/Ylangylang.png'
    if (perfume?.recipe.middle.name === 'Sea Scent')
      return '/assets/img/recipe_img/Seascent.png'
    if (perfume?.recipe.middle.name === 'Freesia')
      return '/assets/img/recipe_img/Freesia.png'
    return ''
  }
  const changeBaseImgSource = () => {
    if (perfume?.recipe.base.name === 'Musk')
      return '/assets/img/recipe_img/Musk.png'
    if (perfume?.recipe.base.name === 'Sandal Wood')
      return '/assets/img/recipe_img/Sandalwood.png'
    if (perfume?.recipe.base.name === 'Moss')
      return '/assets/img/recipe_img/Moss.png'
    return ''
  }

  const data = {
    labels: ['Woody', 'Oriental', 'Fresh', 'Floral', 'Citrus'],
    datasets: [
      {
        label: 'Scent Profile',
        data: [
          perfume?.visualizeData.Woody,
          perfume?.visualizeData.Oriental,
          perfume?.visualizeData.Fresh,
          perfume?.visualizeData.Floral,
          perfume?.visualizeData.Citrus,
        ],
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
  return (
    <div className="bg-gray-800 text-white min-h-screen p-8 font-serif">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-6xl font-bold">{perfume?.name.eng}</h1>
            <p className="text-2xl mt-2">{perfume?.name.kor}</p>
            <p className="text-lg mt-8 leading-relaxed">
              {perfume?.description}
            </p>
            <h2 className="text-4xl font-bold mt-16">RECIPE</h2>
            <div className="flex justify-between mt-8">
              <div className="text-center">
                <h3 className="text-2xl mb-4">TOP</h3>
                <img
                  src={changeTopImgSource()}
                  alt="Top Note"
                  className="h-32 mx-auto"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl mb-4">MIDDLE</h3>
                <img
                  src={changeMiddleImgSource()}
                  alt="Middle Note"
                  className="h-32 mx-auto"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl mb-4">BASE</h3>
                <img
                  src={changeBaseImgSource()}
                  alt="Base Note"
                  className="h-32 mx-auto"
                />
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
