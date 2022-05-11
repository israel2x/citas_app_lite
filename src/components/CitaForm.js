import React, { useState } from "react";
import {
  Form,
  Input,
  Select,
  DatePicker,
  InputNumber,
  TimePicker,
  Button,
} from "antd";
import moment from "moment";

const CitaForm = () => {
  const [componentSize, setComponentSize] = useState("default");
  const formatHour = "HH:mm";
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      size={componentSize}
      onFinish={onFinish}
    >
      <Form.Item label="Nombres" name={"names"}>
        <Input />
      </Form.Item>
      <Form.Item label="Apellidos" name={"last_name"}>
        <Input />
      </Form.Item>
      <Form.Item label="Cédula">
        <Input />
      </Form.Item>
      <Form.Item label="Edad">
        <Input />
      </Form.Item>
      <Form.Item label="Genero">
        <Select>
          <Select.Option value="hombre">Hombre</Select.Option>
          <Select.Option value="mujer">Mujer</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Fecha Cita" name={"cita_fecha"}>
        <DatePicker />
      </Form.Item>
      <Form.Item label="Hora Cita" name={"cita_hora"}>
        <TimePicker
          defaultValue={moment("12:08", formatHour)}
          format={formatHour}
        />
      </Form.Item>
      <Form.Item label="Teléfono">
        <Input />
      </Form.Item>
      <Form.Item label="Email">
        <Input />
      </Form.Item>
      <Form.Item label="Antecedentes o Motivo">
        <Input />
      </Form.Item>
      <Form.Item label="Síntomas">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CitaForm;
