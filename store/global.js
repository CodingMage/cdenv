import create from "zustand";
import produce from "immer";
import { getCookie } from "cookies-next";

const useGlobalState = create((set) => {
  const token = getCookie("token");
  return {
    te: "sss",
    token: token,
    count: 0,
    increaseCount: () => {
      set(
        produce((state) => {
          state.count++;
        })
      );
    },
    userIdea: "",
    updateToken: (value) => {
      set(
        produce((state) => {
          state.token = value;
        })
      );
    },
  };
});

export default useGlobalState;
