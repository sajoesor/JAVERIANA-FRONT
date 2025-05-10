const SalonCard = ({ salon }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      {salon.imagen_s3 && salon.imagen_s3 !== "No" && (
        <img src={salon.imagen_s3} alt={`Salón ${salon["Salón"]}`} className="w-full h-48 object-cover" />
      )}
      <div className="p-4 space-y-1">
        <h2 className="text-xl font-bold">Salón: {salon["Salón"]}</h2>
        <p>
          <strong>Edificio:</strong> {salon["EDIFICIO"]}
        </p>
        <p>
          <strong>Piso:</strong> {salon["PISO"]}
        </p>
        <p>
          <strong>Capacidad:</strong> {salon["CAPACIDAD"]}
        </p>
        <p>
          <strong>Tipo de Aula:</strong> {salon["Tipo de Aula"]}
        </p>
        <p>
          <strong>Equipamiento:</strong> {salon["Equipamiento Tecnológico "]}
        </p>
      </div>
    </div>
  )
}

export default SalonCard
