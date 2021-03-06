import React, { useState, useEffect, useContext } from "react";
import { List, Skeleton, Divider, Badge } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { getCitasByDate } from "../services/citasService";
import { DaySelectedContext } from "./Contexts/DaySelectedContext";
import dayjs from "dayjs";

const CitasList = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const { day, setDay } = useContext(DaySelectedContext);
  console.log("context list: " + day);

  const loadMoreData = async (day) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response = await getCitasByDate(day);
      //const { data: citasList } = await getAllCitas();
      console.log(response.data);
      if (response) {
        // setData([...data, ...response.data]);
        setData([...response.data]);
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
    loadMoreData(day);
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
        hasMore={data.length == 0}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>...</Divider>}
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
                    {dayjs(item.hora_cita).format("HH:mm") +
                      " " +
                      "Paciente: " +
                      item.pacienteId.name +
                      " " +
                      item.pacienteId.lastname}
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
