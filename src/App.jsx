"use client"

import { useEffect, useState } from "react"
import axios from "axios"

const App = () => {
  const [salones, setSalones] = useState([])
  const [edificioSeleccionado, setEdificioSeleccionado] = useState("")
  const [salonSeleccionado, setSalonSeleccionado] = useState(null)
  const [pregunta, setPregunta] = useState("")
  const [respuesta, setRespuesta] = useState("")

  useEffect(() => {
    axios
      //.get("http://localhost:5000/api/salones")
      .get("https://javeriana-back-bpqawmpyp-sajoesor-gmailcoms-projects.vercel.app/api/salones")
      .then((res) => setSalones(res.data))
      .catch((err) => console.error(err))
  }, [])

  const edificios = [...new Set(salones.map((s) => s.edificio))]

  const salonesFiltrados = edificioSeleccionado ? salones.filter((s) => s.edificio === edificioSeleccionado) : []

  const handlePregunta = async () => {
    try {
      //const res = await axios.post("http://localhost:5000/api/salones/preguntar", { pregunta })
      const res = await axios.post("https://javeriana-back-bpqawmpyp-sajoesor-gmailcoms-projects.vercel.app/api/salones/preguntar", { pregunta })
      setRespuesta(res.data.respuesta)
    } catch (error) {
      setRespuesta("Error al obtener respuesta.")
    }
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Buscador de Salones</h1>

      <select onChange={(e) => setEdificioSeleccionado(e.target.value)}>
        <option value="">Selecciona un edificio</option>
        {edificios.map((ed) => (
          <option key={ed} value={ed}>
            {ed}
          </option>
        ))}
      </select>

      {salonesFiltrados.length > 0 && (
        <select
          onChange={(e) => {
            const salon = salonesFiltrados.find((s) => s.salón === e.target.value)
            setSalonSeleccionado(salon)
          }}
        >
          <option value="">Selecciona un salón</option>
          {salonesFiltrados.map((s) => (
            <option key={s.salón} value={s.salón}>
              {s.salón}
            </option>
          ))}
        </select>
      )}

      {salonSeleccionado && (
        <div style={{ marginTop: 20 }}>
          <h2>Información del Salón</h2>
          <pre>{JSON.stringify(salonSeleccionado, null, 2)}</pre>
        </div>
      )}

      <div style={{ marginTop: 40 }}>
        <h2>ChatGPT sobre salones</h2>
        <textarea
          rows="3"
          cols="50"
          placeholder="Haz una pregunta..."
          value={pregunta}
          onChange={(e) => setPregunta(e.target.value)}
        />
        <br />
        <button onClick={handlePregunta}>Enviar pregunta</button>
        {respuesta && (
          <div style={{ marginTop: 20 }}>
            <strong>Respuesta:</strong>
            <p>{respuesta}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
