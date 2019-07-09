const stopSearchReducer = (state, action) => {
  let data = [];

  switch (action.type) {
    case "doSomething":
      return data;
    default:
      throw new Error();
  }
};

export { stopSearchReducer };
