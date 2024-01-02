import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [jokes, setJokes] = useState([]);
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0);
  const BASE = 'https://joke-app-production-server.vercel.app/'

  axios.default.withCredentials = true;
  useEffect(() => {
    axios.get(`${BASE}/api/jokes`)
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

 const PrevJokesArr = () => {
  setCurrentJokeIndex((prevIndex) => (prevIndex - 1 + jokes.length) % jokes.length);
};


  const changestext = () => {
    setCurrentJokeIndex((prevIndex) => (prevIndex + 1) %jokes.length);
  };

  return (
    <div className='text-center'>
      <h1 className='bg-green-400 rounded-lg ml-20 mr-20 text-4xl font-semibold pt-2 pb-2 pl-40 pr-40 
       shadow-black shadow-lg font-sans bg-fixed text-orange-400 mt-5'>JOKES APP</h1>
      <br />
      <br />
      <div className='mb-5 text-white font-serif font-extrabold text-2xl'>
      {jokes.length > 0 && <h1>{jokes[currentJokeIndex].content}</h1>}
      </div>

      <br/>
      <br/>
      <br/>
      <button type='button' className='bg-black-400 text-2xl 
      bg-black text-white rounded-xl hover:bg-green-400 
      shadow-2xl shadow-slate-700 pl-2 pr-2 pb-2 pt-2 font-bold' 
      onClick={PrevJokesArr}>----Previous joke</button>
      <br/>
      <br/>
      <br/>

      <button type='button' className='bg-black-400 text-2xl 
      bg-black text-white rounded-xl hover:bg-green-400 
      shadow-2xl shadow-slate-700 pl-2 pr-2 pb-2 pt-2 font-bold' 
      onClick={changestext}>Next Joke-----</button>
    </div>
  );
}

export default App;
