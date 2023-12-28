import React from "react";
import { Tooltip, Tag, List, Button, Popconfirm, Switch } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

function TodoItem({ todo, onTodoRemoval, onTodoToggle }) {
  return (
    <List.Item
      actions={[
        <Tooltip
          title={todo.completed ? "Mark as uncompleted" : "Mark as completed"}
        >
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            onChange={() => onTodoToggle(todo)}
            defaultChecked={todo.completed}
          />
        </Tooltip>,
        <Popconfirm
          title="Are you sure you want to delete?"
          onConfirm={() => {
            onTodoRemoval(todo);
          }}
        >
          <Button type="primary" danger>
            X
          </Button>
        </Popconfirm>,
      ]}
      key={todo.id}
    >
      <div>
        <Tag color={todo.completed ? "cyan" : "red"}>{todo.name}</Tag>
      </div>
    </List.Item>
  );
}

export default TodoItem;
