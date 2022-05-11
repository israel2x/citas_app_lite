import React, { useState } from "react";
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
  Space,
  TimePicker,
  Checkbox,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import moment from "moment";

const CitaFormSide = () => {
  const [visible, setVisible] = useState(false);
  const formatHour = "HH:mm";
  const { Option } = Select;

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const onFinish = (e) => {
    console.log("data form: " + e);
  };

  const onFinishFailed = (error) => {
    console.log("error: " + error);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Nueva Cita
      </Button>
      <Drawer
        title="Nueva Cita"
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        /*  extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onFinish}>
              Guardar
            </Button>
          </Space>
        } */
      >
        <Form
          name="guardarcita"
          layout="vertical"
          hideRequiredMark
          initialValues={{
            name: "",
            lastname: "",
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="citafecha"
                label="Fecha Cita"
                rules={[
                  { required: true, message: "Ingrese la fecha de la cita" },
                ]}
              >
                <DatePicker
                  style={{ width: "100%" }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="citahora"
                label="Hora Cita"
                rules={[
                  { required: true, message: "Ingrese la hora de la cita" },
                ]}
              >
                <TimePicker format={formatHour} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name={"name"}
                label="Nombres"
                rules={[{ required: true, message: "Ingrese los nombres" }]}
              >
                <Input placeholder="Ingrese los nombres" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="lastname"
                label="Apellidos"
                rules={[{ required: true, message: "Ingrese los apellidos" }]}
              >
                <Input placeholder="Ingrese los apellidos" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="cedula"
                label="Cédula"
                rules={[{ message: "Ingrese la cédula" }]}
              >
                <Input placeholder="Ingrese la cédula" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="edad"
                label="Edad"
                rules={[{ required: true, message: "Ingrese la edad" }]}
              >
                <Input placeholder="Ingrese la edad" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="genero"
                label="Genero"
                rules={[{ required: true, message: "Ingrese el genero" }]}
              >
                <Select placeholder="Ingrese el genero">
                  <Option value="hombre">Hombre</Option>
                  <Option value="mujer">Mujer</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="direccion"
                label="Dirección"
                rules={[{ message: "Ingrese la dirección" }]}
              >
                <Input placeholder="Ingrese la dirección" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="telefono"
                label="Teléfono"
                rules={[{ message: "Ingrese el teléfono" }]}
              >
                <Input placeholder="Ingrese el teléfono" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ message: "Ingrese el email" }]}
              >
                <Input placeholder="Ingrese el email" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="sintomas"
                label="Síntomas"
                rules={[
                  {
                    required: true,
                    message: "Ingrese los síntomas",
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="Ingrese los síntomas" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Space>
              <Button onClick={onClose}>Cancel</Button>
              <Button type="primary" htmlType="submit">
                Guardar
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default CitaFormSide;
