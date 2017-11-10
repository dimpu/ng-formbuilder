import { createSelector } from 'reselect';
import { Map } from 'immutable';

const app = state => state.app
const getNetwork = createSelector([app], app => {
    console.log(app);
  return app.get('networkFetching')
});

export default {
  getNetwork
};