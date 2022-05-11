.then((body) => {
    console.log("response2: " + body.results);
    setData([...data, ...body.results]);
    setLoading(false);
  })




