import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { addUser, selectUsers } from './features/users/usersSlice'

export default function App() {
	const dispatch = useAppDispatch()
	const users = useAppSelector(selectUsers)

	const [name, setName] = useState<string>('')

	return (
		<div>
			<p>{JSON.stringify(users)}</p>
			<input
				type="text"
				placeholder="Name"
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={() => dispatch(addUser({ id: users.length + 1, name }))}>
				Add User
			</button>
		</div>
	)
}
