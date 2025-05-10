"use client"

function SalonSelector({ salones, onSalonChange, onEdificioChange, loading }) {
  const edificios = [...new Set(salones.map((s) => s.edificio))].sort()
  const salonesUnicos = [...new Set(salones.map((s) => s.salón))].sort()

  return (
    <div className="selector-container">
      <div className="selector-group">
        <label className="selector-label">Buscar por salón:</label>
        <select className="selector-select" onChange={(e) => onSalonChange(e.target.value)} disabled={loading}>
          <option value="">Selecciona un salón</option>
          {salonesUnicos.map((s, i) => (
            <option key={i} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="selector-group">
        <label className="selector-label">Buscar por edificio:</label>
        <select className="selector-select" onChange={(e) => onEdificioChange(e.target.value)} disabled={loading}>
          <option value="">Selecciona un edificio</option>
          {edificios.map((e, i) => (
            <option key={i} value={e}>
              {e}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default SalonSelector
