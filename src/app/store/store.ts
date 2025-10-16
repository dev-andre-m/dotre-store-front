import {configureStore} from "@reduxjs/toolkit";
import {catalogApi} from "../../features/catalog/catalogApi.ts";
import {useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        [catalogApi.reducerPath]: catalogApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(catalogApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();