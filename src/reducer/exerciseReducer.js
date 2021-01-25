export const exerciseReducer = (exercises, action) => {
  switch (action.type) {
    case "ADD":
      return { ...exercises, [action.payload]: exercises[action.payload] + 5 };
    case "SUBSTRACT":
      return { ...exercises, [action.payload]: exercises[action.payload] - 5 };
    default:
      return exercises;
  }
};
