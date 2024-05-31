import { useRef } from 'react'

interface Props {
  text: string
  width?: string
  height?: string
  font?: string
}

const CalligraphyImage = ({
  text,
  width = 'w-64',
  height = 'h-32',
  font = 'font-dancing',
}: Props) => {
  const textRef = useRef<HTMLDivElement>(null)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div
        ref={textRef as React.RefObject<HTMLDivElement>}
        className={`${font} text-5xl text-black p-4 ${width} ${height}`}
      >
        {text}
      </div>
    </div>
  )
}

export default CalligraphyImage
