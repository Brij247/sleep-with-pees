import { useState } from "react";
import { Row, Col, Card, message } from "antd";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const TaskManagement = () => {
  const [todos, setTodos] = useState([]);

  const handleFormSubmit = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
    message.success("Todo added!");
  };

  const handleRemoveTodo = (todo) => {
    setTodos((prevTodos) => prevTodos?.filter((t) => t.id !== todo.id));
    message.success("Todo removed!");
  };

  const handleToggleTodoStatus = (todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
    message.info("Todo state updated!");
  };

  return (
    <Row
      justify="center"
      align="middle"
      gutter={[0, 20]}
      className="todos-container"
    >
      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <Card title="Task manager">
          <AddTodoForm onFormSubmit={handleFormSubmit} />
        </Card>
      </Col>

      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <Card title="Todo List">
          <TodoList
            todos={todos}
            onTodoRemoval={handleRemoveTodo}
            onTodoToggle={handleToggleTodoStatus}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default TaskManagement;
