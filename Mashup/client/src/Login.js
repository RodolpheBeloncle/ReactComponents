import React from "react"
import { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import "./login.css";
import { Header } from "./components/header/Header";
import { v4 as uuidv4 } from 'uuid';
import New from "./New";


const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=e48a09962c39496da4a072ca196590e4&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
  // Local storage array user

  const getLocalStorage = () => {

    let allStoredUsers = localStorage.getItem("UserList")
    if (allStoredUsers){
      return (allStoredUsers = JSON.parse(localStorage.getItem("UserList")))
     
    }else{
      return [

        {
          pseudo: "",
          password: ""
        },
      ];
    }
  }   

  
  const [loginData, setLoginData]= useState(getLocalStorage());
  const [newUserName, setNewUserName] = useState('');
  const [newUserPassword,setNewUserPassword] = useState('');
  const [newCode, setNewCode] = useState(false);

  const handleNewUserName = (event) => {
    setNewUserName(event.target.value)
  };

  const handleNewUserPassword = (event)=> {
    setNewUserPassword(event.target.value)


  };

  const showNew = () => {
    setNewCode(!newCode);
  }

  const handleClick = (e) => {

    
    setLoginData((prevUsers) => [
      ...prevUsers,
      {
        id: uuidv4(),
        pseudo: newUserName,
        password: newUserPassword
      },
    ]);

    // record products in local storage
    localStorage.setItem("UserList",JSON.stringify(loginData.concat([
      {
        id: uuidv4(),
        pseudo: newUserName,
        password: newUserPassword
      },
    ]))) 
    

    console.log(loginData)
  }

  const playlistNumber = [
    {
      id:"1",
      password:"512",
      pseudo:"Paul",
      name:"Soirée de Noel",
      title:"Highway to Hell",
      artiste:"AC∕DC",
      albumUrl:"https://i.scdn.co/image/ab67616d0000485151c02a77d09dfcd53c8676d0",
    }
  ]

  console.log(playlistNumber)

  // const {pseudo, password} = loginData; 

  // localStorage.setItem("key", "pseudo")

  // useEffect(() => {
  //   // storing input name
  //   localStorage.setItem("pseudo", JSON.stringify(pseudo));
  // }, [pseudo]);
  //   localStorage.setItem("pseudo", JSON.stringify(pseudo));

  
  return (

    <div className="container__home">
      <Header />
          <div className="signUpLoginBox">
              <div className="slContainer">
                  <div className="text_explain">
                  <h2 className="text_explain_h2">Entre ton pseudo & ton code pour accèder à la playlist collaborative </h2>
                  </div>
                      <div className="formContent">
                        <div className="fond">
                          <form >

                              
                              <div className="inputBox">
                                  <label htmlFor="pseudo">Pseudo</label>
                                  <input  type="text" id="pseudo" placeholder="Pseudo"/>
                              </div>
                              <div className="inputBox">
                                <label htmlFor="password">Entre le code de la Playlist</label>
                                <input type="text" id="password" placeholder="Code de la Playlist"/>
                              </div>
                              
                              <div className="button__enterplay">

                            </div>
                            
                              


                          </form>
                          <div className="button__enterplay">

                                <a className="btn btn-warning btn-lg" href={AUTH_URL}>
                                  Go Playlist
                                </a>
                                <button className="btn btn-warning btn-lg mt-5" onClick={showNew}>Créé une nouvelle playlist</button>
                                {newCode ? <New/> : null}
                          
                              </div>

                           </div>     
                      </div>
                  </div>
              </div>

    </div>
  )
}



    