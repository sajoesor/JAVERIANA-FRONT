function SalonDetail({ salon }) {
  // Filtrar propiedades importantes para mostrar primero
  const importantProps = ["salón", "edificio", "piso", "capacidad", "equipamiento_tecnológico"]
  const otherProps = Object.keys(salon).filter((key) => !importantProps.includes(key) && key !== "imagen_s3")

  return (
    <div className="detail-container">
      <h2 className="detail-title">Información del salón: {salon.salón}</h2>

      <div className="detail-info">
        <div className="detail-text">
          <ul className="info-list">
            {importantProps.map(
              (key) =>
                salon[key] && (
                  <li key={key} className="info-item">
                    <span className="info-label">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                    {salon[key]}
                  </li>
                ),
            )}

            {otherProps.map(
              (key) =>
                salon[key] && (
                  <li key={key} className="info-item">
                    <span className="info-label">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                    {salon[key]}
                  </li>
                ),
            )}
          </ul>
        </div>

        {salon.imagen_s3 && salon.imagen_s3 !== "No" && (
          <div className="detail-image">
            <img
              src={salon.imagen_s3 || "/placeholder.svg"}
              alt={`Foto del salón ${salon.salón}`}
              className="salon-image"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default SalonDetail
