import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

let app  = express();


app.use(cors(
{
    origin:["https://joke-app-production-frontend.vercel.app/"],
}
))

app.get('/',(req,res)=>{
  res.send('<h1>SERVER IS READY</h1>');
})

app.get('/shaik',(req,res)=>{
  res.send('<h1>GENerally your are in shaik Page</h1>')
})

app.get('/api/jokes',(req,res)=>{
  const jokes =
    [
      {
        "id": 1,
        "content": "Why did the chicken go to the seance? To talk to the other side! 👻"
      },
      {
        "id": 2,
        "content": "What do you call fake spaghetti? An impasta! 🍝"
      },
      {
        "id": 3,
        "content": "I told my wife she was drawing her eyebrows too high. She looked surprised! 😲"
      },
      {
        "id": 4,
        "content": "Why don't skeletons fight each other? They don't have the guts! ☠️"
      },
      {
        "id": 5,
        "content": "I'm reading a book on anti-gravity. It's impossible to put down! 📚"
      },
      {
        "id": 6,
        "content": "Parallel lines have so much in common. It's a shame they'll never meet! ‖"
      },
      {
        "id": 7,
        "content": "Why don't scientists trust atoms? Because they make up everything! ⚛️"
      },
      {
        "id": 8,
        "content": "How do you organize a space party? You planet! 🌍🎉"
      },
      {
        "id": 9,
        "content": "I only know 25 letters of the alphabet. I don't know y! 🤷‍♂️"
      },
      {
        "id": 10,
        "content": "What did one ocean say to the other ocean? Nothing, they just waved! 🌊👋"
      }
    
  ]
  res.send(jokes);
})
const port = process.env.PORT||5000;
app.listen(port,()=>{
  console.log(`serve at  ${process.env.BASE}`);
})
