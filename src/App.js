import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

function App() {
  const [data,setDAta] = useState([])
  const [video,setVideo] = useState([])

  const fetchDAta =async () => {
   await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=e07a812a8489989b6c0c90238a7bb08f')
    .then((res) => {
      console.log(res.data)
      setDAta(res.data.results)
    })    
  }
  

  const fetchVideo =async () => {
    await axios.get('https://api.themoviedb.org/3/movie/787699/videos?api_key=e07a812a8489989b6c0c90238a7bb08f')
     .then((res) => {
       console.log(res.data)
       setVideo(res.data.results)
     })    
   }


  useEffect(() =>{
    fetchDAta()
    fetchVideo()
  },[])
  return (
   <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'25vh'}}>
   <YouTube videoId={video[0].key}/>
   </div>
  );
}

export default App;
