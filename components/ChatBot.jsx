"use client"

import { useState } from "react"
import { preguntarChatGPT } from "../api"

function ChatBot() {
  const [pregunta, setPregunta] = useState("")
  const [respuesta, setRespuesta] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const enviarPregunta = async () => {
    if (!pregunta.trim()) return

    setIsLoading(true)
    try {
      const res = await preguntarChatGPT(pregunta)
      setRespuesta(res.respuesta)
    } catch (error) {
      console.error("Error al enviar pregunta:", error)
      setRespuesta("Lo siento, hubo un error al procesar tu pregunta. Por favor intenta de nuevo.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      enviarPregunta()
    }
  }

  return (
    <div className="chatbot-container">
      <h2 className="chatbot-title">Asistente de Salones</h2>

      <div className="chatbot-input-group">
        <input
          type="text"
          value={pregunta}
          onChange={(e) => setPregunta(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="¿Qué deseas saber sobre los salones?"
          className="chatbot-input"
          disabled={isLoading}
        />
        <button onClick={enviarPregunta} className="chatbot-button" disabled={isLoading}>
          {isLoading ? "Enviando..." : "Enviar"}
        </button>
      </div>

      {(respuesta || isLoading) && (
        <div className="chatbot-response">
          <span className="response-label">Respuesta:</span>
          {isLoading ? "Procesando tu pregunta..." : respuesta}
        </div>
      )}
    </div>
  )
}

export default ChatBot
