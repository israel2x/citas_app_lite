import React from "react";
import {
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
  Space,
  TimePicker,
} from "antd";
import "moment/locale/es";
import locale from "antd/lib/date-picker/locale/es_ES";
import { saveNewCita } from "../services/citasService";

const CitaForm = ({ onClose }) => {
  const formatHour = "HH:mm";
  const { Option } = Select;
  const [form] = Form.useForm();

  const onFinish = (e) => {
    const dataForm = JSON.parse(JSON.stringify(e, null, 2));
    console.log(dataForm.lastname);
    const citaNew = {};
    citaNew.fecha_cita = dataForm.citafecha ? dataForm.citafecha : null;
    citaNew.hora_cita = dataForm.citahora ? dataForm.citahora : null;
    citaNew.estado_cita = "Pendiente";
    citaNew.name = dataForm.username ? dataForm.username : null;
    citaNew.lastname = dataForm.lastname ? dataForm.lastname : null;
    citaNew.cedula = dataForm.cedula ? dataForm.cedula : null;
    citaNew.edad = dataForm.edad ? dataForm.edad : null;
    citaNew.gender = dataForm.genero ? dataForm.genero : null;
    citaNew.direccion = dataForm.direccion ? dataForm.direccion : null;
    citaNew.telefono = dataForm.telefono ? dataForm.telefono : null;
    citaNew.email = dataForm.email ? dataForm.email : null;
    citaNew.motivo = "Consulta medica";
    citaNew.sintomas = dataForm.sintomas ? dataForm.sintomas : null;
    citaNew.isAdmin = false;
    citaNew.doctorId = "62794e8a2e15859c7b29624f";
    citaNew.rol = "Paciente";

    console.log(citaNew);

    sendCita(citaNew);
  };

  const sendCita = async (cita) => {
    const citaNew = cita;
    try {
      const { data: cita } = await saveNewCita(citaNew);
      console.log(cita);
      onFill();
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed = (error) => {
    console.log("error: " + error);
  };

  const onFill = () => {
    form.setFieldsValue();
  };

  return (
    <Form
      form={form}
      name="guardarcita"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="citafecha"
            label="Fecha Cita"
            rules={[{ required: true, message: "Ingrese la fecha de la cita" }]}
          >
            <DatePicker
              style={{ width: "100%" }}
              locale={locale}
              getPopupContainer={(trigger) => trigger.parentElement}
              name="citafecha"
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="citahora"
            label="Hora Cita"
            rules={[{ required: true, message: "Ingrese la hora de la cita" }]}
          >
            <TimePicker format={formatHour} locale={locale} name="citahora" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Nombres"
            name="username"
            rules={[{ required: true, message: "Ingrese los nombres" }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="lastname"
            label="Apellidos"
            rules={[{ required: true, message: "Ingrese los apellidos" }]}
          >
            <Input />
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
            <Input placeholder="Ingrese la cédula" name="cedula" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="edad"
            label="Edad"
            rules={[{ required: true, message: "Ingrese la edad" }]}
          >
            <Input placeholder="Ingrese la edad" name="edad" />
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
            <Select placeholder="Ingrese el genero" name="genero">
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
            <Input placeholder="Ingrese la dirección" name="direccion" />
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
            <Input placeholder="Ingrese el teléfono" name="telefono" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ message: "Ingrese el email" }]}
          >
            <Input placeholder="Ingrese el email" name="email" />
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
            <Input.TextArea
              rows={4}
              placeholder="Ingrese los síntomas"
              name="sintomas"
            />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Guardar
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default CitaForm;
