export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //remove after finish devloping
   token:
    "kZ02AkQbgzcRaiCOPC27wW7heylbnFLBO_WGXTl0QEc6xhPkvk1zA4h2sSzt3dmoeJMb9R0i5jMi2RW4AV8mNQEBwknvFf8rLf6vouCma3P39lmR4rmZVd1NHlIexB4c",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
