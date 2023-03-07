import {
    createAsyncThunk,
    createSlice,
    isRejectedWithValue,
} from '@reduxjs/toolkit';

export interface IAppointment {
    name: string;
    avatar: string;
    address: string;
    date: number;
    id: string;
    department: string;
}

export interface IAppointments {
    appointments: IAppointment[];
    loading: boolean;
    error: string | null;
}

const initialState: IAppointments = {
    appointments: [],
    loading: false,
    error: null,
};
// Получение данных из удаленного сервера
// Опустил вынос ссылки в .env или отдельную переменную. Для простоты хардкожу ссылку.
export const fetchAppointments = createAsyncThunk<
    IAppointment[],
    void,
    { rejectValue: string }
>('appointments/getAppointments', async function (_, { rejectWithValue }) {
    const response = await fetch(
        'https://6230a297f113bfceed575b81.mockapi.io/database/clinics'
    );

    if (!response.ok) {
        return isRejectedWithValue('Server Error!');
    }

    const data = await response.json();
    return data;
});

export const counterSlice = createSlice({
    name: 'appointments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAppointments.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(fetchAppointments.fulfilled, (state, action) => {
            state.appointments.push(...action.payload);
            state.loading = false;
        });
    },
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;
