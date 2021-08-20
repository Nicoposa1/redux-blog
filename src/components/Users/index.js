import React from 'react'
import { connect } from 'react-redux'

function Usuarios(props) {


  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //     const data = await response.json()
  //     setUsers(data)
  //   }
  //   fetchUsers()
  // }, [])  


  return (
    <div>
      <table className='tabla'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map(user => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = (reducers) => {
	return reducers.usuariosReducer;
};

export default connect(mapStateToProps, {/*Accion Creator*/})(Usuarios);