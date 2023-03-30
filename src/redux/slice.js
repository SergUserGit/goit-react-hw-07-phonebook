import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
export const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const index = state.contacts.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
  // reducers: {
  //  addContacts(state, action) {
  //     state.contacts.push(action.payload);
  //   },
  //   deleteContacts(state, action) {
  //     const findElement = state.contacts.find(
  //       findEl => findEl.id === action.payload
  //      );

  //    if (findElement !== undefined) {
  //       const indexElement = state.contacts.indexOf(findElement);

  //        if (indexElement !== -1) {
  //         const newArray = state.contacts.filter(
  //            elem => elem.id !== action.payload
  //          );
  //         state.contacts = [...newArray];
  //       }
  //     }
  //   },
  //    updateFilter(state, action) {
  //     state.filter = action.payload;
  //    },
  //   resetFilterContacts(state, action) {
  //     state.contactsFilter = [];
  //   },
  //  filterContacts(state, action) {
  //     const filterArray = action.payload.filter(contact =>
  //       contact.name.toUpperCase().includes(state.filter)
  //      );
  //     if (filterArray.length > 0) {
  //       for (const i of filterArray) {
  //         state.contactsFilter.push(i);
  //       }
  //    }
  //  },
  // },
});

//export const {
// addContacts,
// deleteContacts,
//  updateFilter,
// resetFilterContacts,
// filterContacts,
//} = contactsSlice.actions;
//export const contactsReducer = contactsSlice.reducer;

export const contactsReducer = contactsSlice.reducer;
