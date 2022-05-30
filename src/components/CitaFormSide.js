import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import CitaForm from "./CitaForm";

const CitaFormSide = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
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
      >
        <CitaForm onClose={onClose} />
      </Drawer>
    </>
  );
};

export default CitaFormSide;
