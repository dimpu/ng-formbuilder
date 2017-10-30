import { createSelector } from 'reselect';
import { Map } from 'immutable';

const user = state => state.user;

// function which we will use to write our select logic
const getUser = (user) => user;


export const getUser = createSelector([user], user => user);




