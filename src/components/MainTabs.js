import React, { useState } from "react";
import { Tabs, Radio } from "antd";
import CitaForm from "./CitaForm";
const { TabPane } = Tabs;

const MainTabs = () => {
  const [size, setSize] = useState({ size: "large" });

  const onChange = (e) => {
    setSize({ size: e.target.value });
  };

  return (
    <>
      <Tabs defaultActiveKey="1" type="card" size={size}>
        <TabPane tab="Card Tab 1" key="1">
          Content of card tab 1
        </TabPane>
        <TabPane tab="Card Tab 2" key="2">
          Content of card tab 2
        </TabPane>
        <TabPane tab="Card Tab 3" key="3">
          <CitaForm></CitaForm>
        </TabPane>
      </Tabs>
    </>
  );
};

export default MainTabs;
