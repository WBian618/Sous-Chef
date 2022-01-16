import NavBar from "./NavBar"
import './App.css'
import PostList from "./PostList";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { useState, useEffect } from 'react'
import PostUpload from "./PostUpload"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./Search"
import SearchContainer from "./SearchContainer";


function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [users, setUsers]=useState([]);
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) => user.username.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    fetch('/users')
    .then(res => res.json())
    .then(data => setUsers(data))
},[])

  useEffect(() => {
    fetch('/me')
    .then(res => res.json())
    .then(data=> data.username && setCurrentUser(data) );
    },[])
  console.log(currentUser)

  if (!currentUser) {
    return (
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/SignIn" element={<SignIn currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        <Route path='/SignUp' element={<SignUp  />} />
      </Routes>


    )
  } else{
  return (

      <div className="App">
        <header className="App-header">
        
          <NavBar setCurrentUser={setCurrentUser} users={filteredUsers} setUsers={setUsers} setSearch={setSearch} search={search} />

          <Routes>
            <Route path="/home" element={<PostList />}/>
            <Route path='/upload' element={<PostUpload />}/>
            <Route path='search' element={<Search/>}/>
          {/* <SignUp />
          <SignIn  /> */}
          </Routes>
          <SearchContainer users={filteredUsers} search={search}/>
        </header>
      </div>

  );
}
}

export default App;