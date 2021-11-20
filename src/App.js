
import axios from 'axios';
import React, {useState} from 'react';
import './App.css';


function App() {
 let url = "https://api.github.com/users/MariaEduarda202"
  const  [info, setInfo]= useState([])
 
  axios.get(url).then(resposta => resposta.data)
  .then((resposta => {
    setInfo(resposta)
  })).catch((erro => {
    console.log("Erro.")
  }));



  return (
    <div className="App">
      <div className="conteiner">
  <h1> My GitHub infomations </h1>
  <h3> My name is {info.name}  </h3>
  <h3>My number of are repositories {info.public_repos}  </h3>
  <h3>My followers number is {info.following} and I am following {info.following} profiles</h3>
  <h3>If you want to see my profile. <a href="https://github.com/">Click here</a></h3>
      
        
  </div>
    </div>
  );
}

export default App;
