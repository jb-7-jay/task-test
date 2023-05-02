import React from "react";
import { Button, Form, Input } from "antd";

const intialFormData = {
  title: "",
  description: "",
};

const AddTaskForm = ({ addNewTask }) => {
  const [form] = Form.useForm();

  // const [formData, setFormData] = useState(intialFormData);

  // // const onChange = (e) =>
  // //   setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // // const onSubmit = (e) => {
  // //   e.preventDefault();
  // //   const { title, description } = formData;

  // //   if (title && description) {
  // //     addNewTask({ title, description });
  // //     setFormData(intialFormData);
  // //   }
  // // };

  const onFinish = ({ title, description }) => {
    addNewTask({ title, description });
    form.resetFields();
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={intialFormData}
      onFinish={onFinish}
      autoComplete="off"
      form={form}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: "Title is required!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[
          {
            required: true,
            message: "Description is required!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
  // return (
  //   <form className="add-task-form" onSubmit={onSubmit}>
  //     <div className="form-wrapper">
  //       <div className="form-control">
  //         <label id="title">Title</label>
  //         <input
  //           type="text"
  //           name="title"
  //           placeholder="Title"
  //           value={formData.title}
  //           onChange={onChange}
  //         />
  //       </div>

  //       <div className="form-control">
  //         <label id="description">Description</label>
  //         <input
  //           type="text"
  //           name="description"
  //           placeholder="Description"
  //           value={formData.description}
  //           onChange={onChange}
  //         />
  //       </div>

  //       <button type="submit">Add Task</button>
  //     </div>
  //   </form>
  // );
};

export default AddTaskForm;
