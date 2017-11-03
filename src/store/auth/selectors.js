import { createSelector } from 'reselect';

const auth = state => state.auth;

const getUserDisplayName = createSelector([auth], auth => auth.get('userDisplayName'));

const getUserEmail = createSelector([auth], auth => auth.get('userEmail'));


export default {
    getUserDisplayName,
    getUserEmail
};
