import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [],
    filter: '',
    contactsFilter: [],
  },
  reducers: {
    addContacts(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContacts(state, action) {
      const findElement = state.contacts.find(
        findEl => findEl.id === action.payload
      );

      if (findElement !== undefined) {
        const indexElement = state.contacts.indexOf(findElement);

        if (indexElement !== -1) {
          const newArray = state.contacts.filter(
            elem => elem.id !== action.payload
          );
          state.contacts = [...newArray];
        }
      }
    },
    updateFilter(state, action) {
      state.filter = action.payload;
    },
    resetFilterContacts(state, action) {
      state.contactsFilter = [];
    },
    filterContacts(state, action) {
      const filterArray = action.payload.filter(contact =>
        contact.name.toUpperCase().includes(state.filter)
      );
      if (filterArray.length > 0) {
        for (const i of filterArray) {
          state.contactsFilter.push(i);
        }
      }
    },
  },
});

export const {
  addContacts,
  deleteContacts,
  updateFilter,
  resetFilterContacts,
  filterContacts,
} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
