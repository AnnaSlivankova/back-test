import express, {Request, Response} from 'express'

const app = express()
const port = process.env.PORT || 8000

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.get('/home', (req: Request, res: Response) => {
  res.status(200).json('Welcome, your app is working well');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
