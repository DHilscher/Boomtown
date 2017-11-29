const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

export const login = user => ({
  type: "LOGIN",
  payload: user
});

export const logout = () => ({
  type: "LOGOUT"
});

export default function(state = { user: null, authenticate: null }, action) {
  // todo
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.payload, authenticate: true };
    case LOGOUT:
      return { ...state, user: null, authenticate: false };
    default:
      return state;
  }
}
