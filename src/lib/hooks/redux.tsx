import { useDispatch, useSelector, useStore, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch, AppStore } from "../store";

// Correctly type `useDispatch`
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Correctly type `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Correctly type `useStore`
export const useAppStore = () => useStore<AppStore>();
