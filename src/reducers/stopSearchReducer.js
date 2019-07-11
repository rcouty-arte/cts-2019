const stopSearchReducer = (state, action) => {
  switch (action.type) {
    case 'loadLines':
      let lines = action.data.LinesDelivery.AnnotatedLineRef.map((line) => {
        return {
          LineRef: line.LineRef,
          LineName: line.LineName,
          RouteType: line.Extension.RouteType
        }
      });

      return {
        ...state,
        lines: lines
      };
    default:
      throw new Error();
  }
};

export { stopSearchReducer };
