import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { actions } from "../store/favorites/favorites.slice";
import { useMemo } from "react";

const rootActions = {
  ...actions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    return bindActionCreators(rootActions, dispatch);
  }, [dispatch]);
};
