import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  err: false,
  loading: false,
  response: {},
};

export const sendMail = createAsyncThunk(
  "emails/send",
  async (body: { emailId: string; message: string }, { rejectWithValue }) => {
    const response = await axios.post(
      "https://api.webdevsai.com/portfolio/emails/send-mail",
      body
    );
    const data = response.data;
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data);
    }
    return data;
  }
);
const emailSlice = createSlice({
  name: "email",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(sendMail.pending, (state) => {
      state.loading = true;
      state.err = false;
    });
    builder.addCase(sendMail.fulfilled, (state, action) => {
      state.loading = false;
      state.err = false;
      state.response = action.payload;
    });
    builder.addCase(sendMail.rejected, (state, action) => {
      state.loading = false;
      state.err = true;
      state.response = action.payload as any;
    });
  },
});

export default emailSlice.reducer;
