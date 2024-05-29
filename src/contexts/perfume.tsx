import React, { ReactNode, createContext, useContext, useState } from 'react'

export type PerfumeResponse = {
  name: {
    kor: string
    eng: string
  }
  description: string
  perfume: {
    top: {
      name: string
      volume: number
    }
    middle: {
      name: string
      volume: number
    }
    base: {
      name: string
      volume: number
    }
  }
  visualizeData: {
    Woody: number
    Oriental: number
    Fresh: number
    Floral: number
    Citrus: number
  }
}

interface PerfumeContextType {
  perfume: PerfumeResponse | null
  setPerfume: (perfume: PerfumeResponse) => void
}

const PerfumeContext = createContext<PerfumeContextType | undefined>(undefined)

export const PerfumeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [perfume, setPerfume] = useState<PerfumeResponse | null>(null)

  return (
    <PerfumeContext.Provider value={{ perfume, setPerfume }}>
      {children}
    </PerfumeContext.Provider>
  )
}

export const usePerfume = () => {
  const context = useContext(PerfumeContext)
  if (!context) {
    throw new Error('usePerfume must be used within a PerfumeProvider')
  }
  return context
}
