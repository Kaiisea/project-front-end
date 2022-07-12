import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Schedule from "../components/main/Schedule";

const baseURL = "http://localhost:8000/login";

const defaultData = {
  data: {
    info: [],
    token: "",
    verify_token: "",
  },
  loading: false,
  isLogged: false,
};

export const addNewUser = createAsyncThunk(
  "login/addNewUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(baseURL + "/new", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.json();
    } catch (error) {
      return rejectWithValue("Failed to fetch, trying to register a new user");
    }
  }
);

export const signIn = createAsyncThunk(
  "login/signIn",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(baseURL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.json();
    } catch (error) {
      return rejectWithValue("Failed to fetch, trying to sign in");
    }
  }
);

export const getSchedule = createAsyncThunk(
  "login/getSchedule",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:8000/schedule", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.json();
    } catch (error) {
      return rejectWithValue("Failed to fetch, trying to sign in");
    }
  }
);

export const getEvents = createAsyncThunk(
  "login/getEvents",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/event", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.json();
    } catch (error) {
      return rejectWithValue("Failed to fetch, trying to sign in");
    }
  }
);

export const postSchedule = createAsyncThunk(
  "login/postSchedule",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:8000/schedule" + "/new", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.json();
    } catch (error) {
      return rejectWithValue("Failed to fetch, trying to register a new user");
    }
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState: { login: defaultData, status: "idle", error: null },
  reducers: {
    logOut: (state) => {
      state.login = defaultData;
    },
  },
  extraReducers: {
    [addNewUser.pending]: (state) => {
      state.login.loading = true;
      state.status = "loading";
    },
    [addNewUser.fulfilled]: (state, action) => {
      state.login.data = action.payload;
      state.login.loading = false;
      state.status = "succeeded";
    },
    [addNewUser.rejected]: (state, action) => {
      state.login.loading = false;
      state.status = "rejected";
      state.error = action.payload;
    },
    [signIn.pending]: (state) => {
      state.login.loading = true;
      state.status = "loading";
    },
    [signIn.fulfilled]: (state, action) => {
      state.login.data = action.payload;
      state.login.loading = false;
      state.login.isLogged = true;
      state.status = "succeeded";
    },
    [signIn.rejected]: (state, action) => {
      state.login.loading = false;
      state.status = "rejected";
      state.error = action.payload;
    },
    [getSchedule.pending]: (state) => {
      state.login.loading = true;
      state.status = "loading";
    },
    [getSchedule.fulfilled]: (state, action) => {
      state.login.data.info = action.payload;
      state.login.loading = false;
      state.status = "succeeded";
    },
    [getSchedule.rejected]: (state, action) => {
      state.login.loading = false;
      state.status = "rejected";
      state.error = action.payload;
    },
    [getEvents.pending]: (state) => {
      state.login.loading = true;
      state.status = "loading";
    },
    [getEvents.fulfilled]: (state, action) => {
      state.login.data.info = action.payload;
      state.login.loading = false;
      state.status = "succeeded";
    },
    [getEvents.rejected]: (state, action) => {
      state.login.loading = false;
      state.status = "rejected";
      state.error = action.payload;
    },
    [postSchedule.pending]: (state) => {
      state.login.loading = true;
      state.status = "loading";
    },
    [postSchedule.fulfilled]: (state, action) => {
      state.login.data = action.payload;
      state.login.loading = false;
      state.status = "succeeded";
    },
    [postSchedule.rejected]: (state, action) => {
      state.login.loading = false;
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;
