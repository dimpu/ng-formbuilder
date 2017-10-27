import { createSelector } from 'reselect';
import { Map } from 'immutable';

const user = state => state.user;

// function which we will use to write our select logic
const getUser = (users) => users;


export const getUser = createSelector([user], user => user);
export const userForms = createSelector([user], user => user.get('educations'));




