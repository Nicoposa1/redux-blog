import React, { useState, useEffect } from 'react'

function App() {

  const [users, setUsers] = useState([])

  useEffect(async () => {
    const response = await
    fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    setUsers(data)
  }, [])


  handleFiles = () => (
    this.state.users.map((user) => (
      <tr>
        <td>{name}</td>
        <td>{user.mail}</td>
        <td>{user.page}</td>
      </tr>
    ))
  )

  return (
    <div className="margen">
      <table className='tabla'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            return (
              <th>
                <tr>{user.name}</tr>
                <tr>{user.mail}</tr>
                <tr>{user.link}</tr>
              </th>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default App