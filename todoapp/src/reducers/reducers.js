import dummyData from "../components/dummydata";

export const initalState = { items: dummyData };

export const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
};
