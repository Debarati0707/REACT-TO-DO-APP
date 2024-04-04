import { useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterButton from "./FilterButton";
import { AiFillPlusSquare } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import TodoList from "./TodoList";
import { addTodo, updateSearchTerm } from "../redux/action";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim());
      setNewTodoText("");
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-cyan-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        TASK WHIZ
      </h2>
      <div className="flex items-center mb-4">
        <input
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          id="addTodoInput"
          name="addTodoInput"
          type="text"
          placeholder="Add Todo"
          className="flex-grow p-2 border-b-2 border-green-300 focus:outline-none focus:border-blue-500"
        />
        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          onClick={handleAddTodoClick}
        >
          <AiFillPlusSquare Size={20} />
        </button>
      </div>
      <div div className="flex items-center justify-between">
        <FilterButton />
        <div className="flex items-center mb-4">
          <input
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Search Todos"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            <BsSearch size={20} />
          </button>
        </div>
      </div>
      <TodoList />
    </div>
  );
};

export default Todo;