import express from 'express'

const app = express()
// Định nghĩa tuyến đường cơ bản
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Lắng nghe trên cổng 3000
const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
