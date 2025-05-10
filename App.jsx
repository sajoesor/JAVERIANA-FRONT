"use client"

import { useState, useEffect } from "react"
import SalonSelector from "./components/SalonSelector"
import SalonDetail from "./components/SalonDetail"
import EdificioDetail from "./components/EdificioDetail"
import ChatBot from "./components/ChatBot"
import { fetchSalones } from "./api"
import "./index.css"

function App() {
  const [salones, setSalones] = useState([])
  const [selectedSalon, setSelectedSalon] = useState(null)
  const [selectedEdificio, setSelectedEdificio] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetchSalones()
      .then((data) => {
        setSalones(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching salones:", error)
        setLoading(false)
      })
  }, [])

  const handleSalonChange = (salonId) => {
    const salon = salones.find((s) => s.salón === salonId)
    setSelectedSalon(salon)
    setSelectedEdificio(null)
  }

  const handleEdificioChange = (edificio) => {
    setSelectedEdificio(edificio)
    setSelectedSalon(null)
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Buscador de Salones Universitarios</h1>
      </header>

      <SalonSelector
        salones={salones}
        onSalonChange={handleSalonChange}
        onEdificioChange={handleEdificioChange}
        loading={loading}
      />

      {selectedSalon && <SalonDetail salon={selectedSalon} />}
      {selectedEdificio && <EdificioDetail salones={salones} edificio={selectedEdificio} />}

      <ChatBot />
    </div>
  )
}

export default App
