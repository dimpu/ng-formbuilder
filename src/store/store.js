const INITIAL_STATE = [];

export default function lineup(state = INITIAL_STATE, action) {  
  if (!action || !action.type) {
    return state;
  }
  switch (action.type) {
    case PARTY_JOINED:
      return R.append(action.payload)(state);
    case PARTY_SEATED:
      return R.reject(n => n.partyId === action.payload.partyId)(state);
    case PARTY_LEFT:
      return R.reject(n => n.partyId === action.payload.partyId)(state);
    default:
      return state;
  }
}