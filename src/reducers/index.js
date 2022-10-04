import {
  CREATE_CONTACT,
  RENDER_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
} from "../actions";

const initialContactsState = {
  list: [],
};
export default function contacts(state = initialContactsState, action) {
  switch (action.type) {
    case RENDER_CONTACT:
      return {
        ...state,
        list: action.contacts,
      };

    case CREATE_CONTACT:
      // console.log(state);
      return {
        ...state,
        list: [action.contact, ...state.list],
        flag: true,
      };

    case DELETE_CONTACT:
      const filteredArray = state.list.filter(
        (contact) => contact.id !== action.contact.id
      );

      return {
        ...state,
        list: filteredArray,
      };

    case UPDATE_CONTACT:
      return {
        ...state,
        list: [...state.list, action.contact],
      };
    default:
      return state;
  }
}
