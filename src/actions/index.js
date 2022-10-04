// {
//   type: "CREATE";
// }

// {
//   type: "DELETE";
// }

// {
//   type: "UPDATE";
// }

// action types

export const CREATE_CONTACT = "CREATE";
export const RENDER_CONTACT = "RENDER";
export const DELETE_CONTACT = "DELETE";
export const UPDATE_CONTACT = "UPDATE";

// action creators

export function renderContact(contacts) {
  return {
    type: "RENDER",
    contacts: contacts,
  };
}

export function createContact(contact) {
  return {
    type: "CREATE",
    contact: contact,
  };
}

export function deleteContact(contact) {
  return {
    type: "DELETE",
    contact,
  };
}

export function updateContact(contact) {
  return {
    type: "UPDATE",
    contact,
  };
}
