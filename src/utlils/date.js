const getCurrentDate = () =>
  new Date().toDateString().split(" ").slice(0, 3).join(" ");

export { getCurrentDate };
