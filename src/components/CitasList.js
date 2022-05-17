import React, { useState, useEffect, useContext } from "react";
import { List, Skeleton, Divider, Badge } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { getAllCitas } from "../services/citasService";
import { DaySelectedContext } from "./Contexts/DaySelectedContext";

const CitasList = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const { day, setDay } = useContext(DaySelectedContext);
  console.log("context list: " + day);

  const loadMoreData = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response = await getAllCitas();
      //const { data: citasList } = await getAllCitas();
      console.log(response.data);
      if (response) {
        setData([...data, ...response.data]);
        setLoading(false);
      } else {
        setLoading(false);
        setData([]);
      }
    } catch (ex) {
      console.log(ex.response + " status:  " + ex.response.status);
    }
  };

  useEffect(() => {
    //loadMoreData();
    console.log("context list change: " + day);
  }, [day]);

  return (
    <div
      id="scrollableDiv"
      style={{
        height: "70vh",
        overflow: "auto",
        padding: "0 16px",
        border: "1px solid rgba(140, 140, 140, 0.35)",
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item._id}>
              <List.Item.Meta
                /* avatar={<Avatar src={item.picture.large} />} */
                title={
                  <a href="https://ant.design">
                    {"Nombre: " + item.pacienteId.name}
                  </a>
                }
                description={"Sintomas: " + item.sintomas}
              />
              <Badge
                className="site-badge-count-109"
                style={{ backgroundColor: "#52c41a" }}
                count={"Pendiente"}
              ></Badge>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default CitasList;
