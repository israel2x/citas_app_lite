import React, { useState, useEffect } from "react";
import { List, Skeleton, Divider, Badge } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const CitasList = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  //const db_link =
  // ("https://mycitaslite-jywhvad0y-israel2x.vercel.app/api/citas/all");

  const db_link = "http://localhost:5000/api/citas/all";
  const loadMoreData = async () => {
    if (loading) {
      return;
    }
    setLoading(true);

    const response = await axios.get(db_link);

    console.log(response.data);
    if (response) {
      setData([...data, ...response.data]);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMoreData();
  }, []);

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
