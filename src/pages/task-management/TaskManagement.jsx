// import { useState } from "react";
// import {
//   Card,
//   Tabs,
//   Input,
//   Button,
//   List,
//   DatePicker,
//   Modal,
//   Form,
//   Row,
//   Col,
//   Switch,
// } from "antd";

// const { TabPane } = Tabs;

// function TaskManagement() {
//   document.title = "Task management - Sleep with PeeS";
//   const [form] = Form.useForm();
//   const [activeTasks, setActiveTasks] = useState([]);
//   const [completedTasks, setCompletedTasks] = useState([]);
//   const [newTask, setNewTask] = useState("");

//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTime, setSelectedTime] = useState(null);
//   const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
//   const [switchValue, setSwitchValue] = useState();

//   const handleAddTask = () => {
//     setIsAddTaskModalOpen(true);
//     if (newTask.trim() !== "") {
//       setActiveTasks([...activeTasks, newTask]);
//       setNewTask("");
//     }
//   };

//   const handleCompleteTask = (index) => {
//     const taskToComplete = activeTasks[index];
//     setActiveTasks(activeTasks.filter((_, i) => i !== index));
//     setCompletedTasks([...completedTasks, taskToComplete]);
//   };

//   const handleOk = () => {
//     setIsAddTaskModalOpen(false);
//   };

//   const handleCancel = () => {
//     setIsAddTaskModalOpen(false);
//   };

//   const onFinish = (fieldsValue) => {
//     const values = {
//       ...fieldsValue,
//       "date-time-picker": fieldsValue["date-time-picker"].format("YYYY-MM-DD"),
//     };
//     console.log("Received values of form: ", values);
//     form.resetFields();
//   };
//   const tasks = [
//     {
//       id: 0,
//       taskName: "walking",
//       taskstatus: true,
//     },
//     {
//       id: 1,
//       taskName: "running",
//       taskstatus: false,
//     },
//   ];
//   const handleSwitchChange = (value) => {
//     console.log(value, "value");
//     setSwitchValue(!value);
//     // You can pass the switch value to a parent component if needed
//     // if (onSwitchChange) {
//     //   onSwitchChange(value);
//     // }
//   };
//   return (
//     <>
//       <Card title={"Task management"}>
//         <div style={{ padding: "20px" }}>
//           <div style={{ display: "flex", marginBottom: "10px" }}>
//             <Button type="primary" onClick={handleAddTask}>
//               + Add Task
//             </Button>
//           </div>

//           <Tabs defaultActiveKey="1" style={{ marginTop: "20px" }}>
//             <TabPane tab="All tasks" key="1">
//               <Row gutter={[0, 16]}>
//                 {tasks?.map((items) => {
//                   return (
//                     <Col span={24} key={items.id}>
//                       <Card>
//                         <Col span={18}>
//                           <p>{items.taskName}</p>
//                         </Col>
//                         <Col style={{ textAlign: "right" }}>
//                           <Switch
//                             checkedChildren="Active"
//                             unCheckedChildren="Inactive"
//                             defaultChecked={items?.taskstatus}
//                             checked={switchValue ?? items?.taskstatus}
//                             onChange={handleSwitchChange}
//                           />
//                         </Col>
//                       </Card>
//                     </Col>
//                   );
//                 })}
//               </Row>
//             </TabPane>
//             <TabPane tab="Active tasks" key="2">
//               <Row gutter={[0, 16]}>
//                 {tasks?.map((items) => {
//                   return (
//                     <Col span={24} key={items.id}>
//                       <Card>
//                         <Col span={18}>
//                           <p>{items.taskName}</p>
//                         </Col>
//                         <Col style={{ textAlign: "right" }}>
//                           <Switch
//                             checkedChildren="Active"
//                             unCheckedChildren="Inactive"
//                             defaultChecked={items?.taskstatus}
//                             checked={true}
//                             onChange={handleSwitchChange}
//                           />
//                         </Col>
//                       </Card>
//                     </Col>
//                   );
//                 })}
//               </Row>
//             </TabPane>
//             <TabPane tab="Completed tasks" key="3">
//               <Row gutter={[0, 16]}>
//                 {tasks?.map((items) => {
//                   return (
//                     <Col span={24} key={items.id}>
//                       <Card>
//                         <Col span={18}>
//                           <p>{items.taskName}</p>
//                         </Col>
//                         <Col style={{ textAlign: "right" }}>
//                           <Switch
//                             checkedChildren="Active"
//                             unCheckedChildren="Inactive"
//                             defaultChecked={items?.taskstatus}
//                             checked={false}
//                             onChange={handleSwitchChange}
//                           />
//                         </Col>
//                       </Card>
//                     </Col>
//                   );
//                 })}
//               </Row>
//             </TabPane>
//           </Tabs>
//         </div>
//       </Card>
//       <Modal
//         title="Add task"
//         open={isAddTaskModalOpen}
//         onOk={handleOk}
//         onCancel={handleCancel}
//         footer={null}
//       >
//         <Form form={form} name="addTask" onFinish={onFinish}>
//           <Form.Item name="description" label="Task name">
//             <Input.TextArea showCount maxLength={100} />
//           </Form.Item>
//           <Form.Item name="date-time-picker" label="Time">
//             <DatePicker format="YYYY-MM-DD" />
//           </Form.Item>

//           <Form.Item>
//             <Button
//               type="primary"
//               htmlType="submit"
//               className="login-form-button"
//             >
//               Submit
//             </Button>
//           </Form.Item>
//         </Form>
//       </Modal>
//     </>
//   );
// }

// export default TaskManagement;
import React, { useState } from "react";
import { Row, Col, Card, PageHeader, message } from "antd";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
// import { AddTodoForm } from "components/AddTodoForm";
// import { TodoList } from "components/TodoList";
// import "./styles.less";

const TaskManagement = () => {
  const [todos, setTodos] = useState([]);

  const handleFormSubmit = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
    message.success("Todo added!");
  };

  const handleRemoveTodo = (todo) => {
    console.log(todo);
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
      {/* <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <Card
          title="Add Todo"
          subTitle="To add a todo, just fill the form below and click in add todo."
        />
      </Col> */}

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
