"use client";

import { Dispatch, createContext, useReducer } from "react";

type StateType = {
  open: boolean;
};

type ActionType = {
  type: string;
};

const initialState: StateType = {
  open: false,
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "OPEN_MENU":
      // disable scrolling when menu open
      document.body.style.overflow = "hidden";
      return {
        ...state,
        open: true,
      };
    case "CLOSE_MENU":
      document.body.style.overflow = "auto";
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};

export const MenuContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const MenuContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MenuContext.Provider value={{ state, dispatch }}>
      {children}
    </MenuContext.Provider>
  );
};
