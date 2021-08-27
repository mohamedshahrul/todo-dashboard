import axios from "axios";

// const API = axios.create({ baseURL: "http://192.168.0.170:5000" });

const API = axios.create({
  baseURL: "https://social-media-app-clone.herokuapp.com/",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const fetchDashboard = (id) => {
  return API.get(`/todos/dashboard/${id}`);
};

export const fetchPostsBySearch = (searchQuery) => {
  return API.get(
    `/todos/search?searchQuery=${searchQuery.searchInput || "none"}`
  );
};

export const createTask = (newTodo) => {
  return API.post("/todos", newTodo);
};

export const updateTask = (id, updatedTodo) => {
  return API.patch(`/todos/${id}`, updatedTodo);
};

export const deleteTask = (id) => {
  return API.delete(`/todos/${id}`);
};

export const signIn = (formData) => {
  return API.post("/user/signin", formData);
};

export const signUp = (formData) => {
  return API.post("/user/signup", formData);
};
