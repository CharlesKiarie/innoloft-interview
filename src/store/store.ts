import { configureStore } from '@reduxjs/toolkit';
import { configAPI } from 'api/configAPI';
import { productAPI } from 'api/productAPI';

export const store = configureStore({
    reducer: {
        [configAPI.reducerPath]: configAPI.reducer,
        [productAPI.reducerPath]: productAPI.reducer,

    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(
            configAPI.middleware,
            productAPI.middleware,
        ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;