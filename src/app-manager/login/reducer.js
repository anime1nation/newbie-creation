import produce from "immer";

export default produce((draft, action) => {
  switch (action.type) {
    case "USERNAME":
      draft.userName = action.payload;
      break;
    case "PASSKEY":
      draft.passKey = action.payload;
      break;
    case "SET_TOKEN":
      draft.token = action.payload;
      break;
    case "SET_SESSION":
      draft.sessionId = action.payload;
      break;
    case "LOGOUT":
      draft.userName = "";
      draft.passKey = "";
      draft.sessionId = "";
      draft.token = "";
      draft.sessionRunning = false;
      break;
    case "WRONG_CRED":
      draft.wrongcred = true;
      break;
    default:
      return draft;
  }
});
