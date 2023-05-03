const state = {}
// let action = { type: "friends/add", type: "friends/remove" }
let action = {
  type: "friends/add",
  payload: {
    name: "Chrome Boi",
    homewtown: "NYC",
    id: 1
  },
  // action = {
  type: "friends/remove",
  payload: 1,
  // }
};
export function manageFriends(state = { friends: [] }, action) {
  switch (action.type) {
    case "friends/add":
      return { ...state, friends: [...state.friends, action.payload] };
    case "friends/remove":
      return { ...state, friends: state.friends.filter(friend => friend.id !== action.payload) };
    default:
      return state;
  }
}
