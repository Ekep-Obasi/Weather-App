function formatGrapData(data) {
  const obj = {};
  Object.values(data)?.forEach((value) => ({
    x: value[0].day,
    y: value[0].temp,
  }));
  console.log(arr);
  return [
    {
      id: "",
      color: "",
      data: arr,
    },
  ];
}

export default formatGrapData;
