function EdificioDetail({ salones, edificio }) {
  const salonesFiltrados = salones.filter((s) => s.edificio === edificio)

  return (
    <div className="detail-container">
      <h2 className="detail-title">Salones del edificio {edificio}</h2>

      <div className="edificio-salones">
        {salonesFiltrados.map((salon, index) => (
          <div key={index} className="salon-card">
            {salon.imagen_s3 && salon.imagen_s3 !== "No" && (
              <img
                src={salon.imagen_s3 || "/placeholder.svg"}
                alt={`Salón ${salon.salón}`}
                className="salon-card-image"
              />
            )}
            <div className="salon-card-content">
              <h3 className="salon-card-title">Salón {salon.salón}</h3>
              <div className="salon-card-info">
                <p>
                  <span className="info-label">Capacidad:</span> {salon.capacidad}
                </p>
                <p>
                  <span className="info-label">Piso:</span> {salon.piso}
                </p>
                <p>
                  <span className="info-label">Equipamiento:</span> {salon.equipamiento_tecnológico}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EdificioDetail
