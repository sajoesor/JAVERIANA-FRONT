export async function fetchSalones() {
  const res = await fetch("http://localhost:5000/api/salones")
  return res.json()
}

export async function preguntarChatGPT(pregunta) {
  const res = await fetch("http://localhost:5000/api/salones/preguntar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pregunta }),
  })
  return res.json()
}
