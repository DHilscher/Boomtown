const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

export const login = user => ({
  type: "LOGIN",
  payload: user
});

export const logout = () => ({
  type: "LOGOUT"
});

export default function(state = { user: null }, action) {
  // todo
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
}
