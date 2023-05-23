const getLocation = () => {
  const promise = new Promise((res, rej) => {
    navigator.geolocation?.getCurrentPosition(res, rej);
  });

  return promise.then((pos) => {
    return {
      lat: pos.coords.latitude,
      lng: pos.coords.longitude,
    };
  });
};

export default getLocation;
