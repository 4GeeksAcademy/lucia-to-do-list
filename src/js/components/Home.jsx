import React, { useState } from "react";

const Home = () => {
	// Estado para almacenar la lista de tareas
	const [todos, setTodos] = useState([]);
	// Estado para almacenar el valor del input
	const [inputValue, setInputValue] = useState("");

	// Maneja los cambios en el input y actualiza el estado
	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	// Maneja el evento de presionar teclas
	// Si la tecla es Enter y el input no está vacío, añade una nueva tarea
	const handleKeyPress = (e) => {
		if (e.key === "Enter" && inputValue.trim() !== "") {
			setTodos([...todos, inputValue.trim()]);
			setInputValue(""); // limpiar input
		}
	};

	// Elimina una tarea filtrándola por su índice
	const handleDeleteTodo = (indexToDelete) => {
		const newTodos = todos.filter((_, index) => index !== indexToDelete);
		setTodos(newTodos);
	};

	return (
		<div className="container">
			<div className="todo-container">
				<h1 className="todo-title">TO DO</h1>
				
				{/* Input para añadir nuevas tareas */}
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

				{/* Renderizado condicional: muestra lista o mensaje vacío */}
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
									{/* Botón para eliminar tarea */}
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
					
					{/* Footer con contador de tareas */}
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
