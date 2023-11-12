import { useState } from "react";
import { Card, Tabs, Input, Button, List, DatePicker, TimePicker } from "antd";

const { TabPane } = Tabs;

function TaskManagement() {
  document.title = "Task management - Sleep with PeeS";
  const [activeTasks, setActiveTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setActiveTasks([...activeTasks, newTask]);
      setNewTask("");
    }
  };

  const handleCompleteTask = (index) => {
    const taskToComplete = activeTasks[index];
    setActiveTasks(activeTasks.filter((_, i) => i !== index));
    setCompletedTasks([...completedTasks, taskToComplete]);
  };
  return (
    <Card title={"Task management"}>
      <div style={{ padding: "20px" }}>
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <Button type="primary" onClick={handleAddTask}>
            + Add Task
          </Button>
        </div>

        <Tabs defaultActiveKey="1" style={{ marginTop: "20px" }}>
          <TabPane tab="Active" key="1">
            <List
              dataSource={activeTasks}
              renderItem={(task, index) => (
                <List.Item>
                  {task}{" "}
                  <Button type="link" onClick={() => handleCompleteTask(index)}>
                    Complete
                  </Button>
                </List.Item>
              )}
            />
          </TabPane>
          <TabPane tab="Completed" key="2">
            <List
              dataSource={completedTasks}
              renderItem={(task) => <List.Item>{task}</List.Item>}
            />
          </TabPane>
        </Tabs>
      </div>
    </Card>
  );
}

export default TaskManagement;
