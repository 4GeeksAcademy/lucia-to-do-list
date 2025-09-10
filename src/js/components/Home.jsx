import React, { useState } from "react";

const Home = () => {
	const [todos, setTodos] = useState([]);
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter" && inputValue.trim() !== "") {
			setTodos([...todos, inputValue.trim()]);
			setInputValue("");
		}
	};

	const handleDeleteTodo = (indexToDelete) => {
		const newTodos = todos.filter((_, index) => index !== indexToDelete);
		setTodos(newTodos);
	};

	return (
		<div className="container">
			<div className="todo-container">
				<h1 className="todo-title">TO DO</h1>
				
				<div className="todo-input-container">
					<input
						type="text"
						className="todo-input"
						placeholder="What needs to be done?"
						value={inputValue}
						onChange={handleInputChange}
						onKeyPress={handleKeyPress}
					/>
				</div>

				<div className="todo-list-container">
					{todos.length === 0 ? (
						<div className="no-tasks">
							No hay tareas, añadir tareas
						</div>
					) : (
						<ul className="todo-list">
							{todos.map((todo, index) => (
								<li key={index} className="todo-item">
									<span className="todo-text">{todo}</span>
									<button
										className="delete-btn"
										onClick={() => handleDeleteTodo(index)}
									>
										×
									</button>
								</li>
							))}
						</ul>
					)}
					
					{todos.length > 0 && (
						<div className="todo-footer">
							{todos.length} item{todos.length !== 1 ? 's' : ''} left
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Home;