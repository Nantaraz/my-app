import React from 'react'
import "./AdduserForm.css"
import 'bootstrap/dist/css/bootstrap.min.css'

const UserTable = props => (
  <div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Nom</th>
        <th>Prénom</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
			{props.users.length > 0 ? (
				props.users.map(user => (
					<tr>
            <td>{user.id}</td>
						<td>{user.name}</td>
						<td>{user.username}</td>
						<td>
							<button class="btn btn-danger" onClick={() =>{ if (window.confirm('Confirmer la suppréssion')) props.deleteUser(user.id)}}
                      >x
              </button>
						</td>
					</tr>
				))
			) : (
				<tr>
				</tr>
      )}
      
		</tbody>
  </table>
  </div>
)

export default UserTable