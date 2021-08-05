import { createSelector } from '@reduxjs/toolkit';

export const getIsLoading = state => state.contacts.loading;

export const getFilter = state => state.contacts.filter;

const getAllContacts = state => state.contacts.items;

export const getVisibleContacts = createSelector(
    [getFilter, getAllContacts],
    (filter, items) => {
        const normalizeFilter = filter.toLowerCase();

        return items.filter(item => item.name.toLowerCase().includes(normalizeFilter));
     }
);