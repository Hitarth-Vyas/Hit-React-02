import { useEffect, useState } from 'react';

let globalState = {};
let listners = [];
let actions = {};

export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1];    // can export logic and data both in this staye; // want second value only

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);

    globalState = {...globalState, ...newState};

    for (const listner of listners) {
      listner(globalState);
    }
  }

  useEffect(() => {
    if (shouldListen) {
      listners.push(setState);
    }

    return () => {
      if (shouldListen) {
        listners = listners.filter(li => li !== setState); 
      }
    }
  }, [setState]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = {...globalState, ...initialState};
  }

  actions = {...actions, ...userActions};
};
