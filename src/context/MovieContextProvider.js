// import axios from "axios";
// import React, { createContext, useContext, useReducer, useEffect } from "react";
// import { API_MOVIES, API_CARTOONS, API_CATEGORIES } from "../helpers/const";
// import { useNavigate } from "react-router-dom";

// export const movieContext = createContext();
// export const useMovie = () => useContext(movieContext);

// const INIT_STATE = {
//   movies: [],
//   cartoons: [],
//   oneMovie: {},
//   categories: [],
// };

// const MovieContextProvider = ({ children }) => {
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "GET_MOVIES":
//         return { ...state, movies: action.payload };
//       case "GET_CARTOONS":
//         return { ...state, cartoons: action.payload };
//       case "GET_ONE_MOVIE":
//         return { ...state, oneMovie: action.payload };
//       case "GET_CATEGORIES":
//         return { ...state, categories: action.payload };
//       default:
//         return state;
//     }
//   };

//   const navigate = useNavigate();
//   const [state, dispatch] = useReducer(reducer, INIT_STATE);

//   // Create movie
//   const createMovie = async (newMovie) => {
//     try {
//       await axios.post(API_MOVIES, newMovie);
//       getMoviesAndCartoons(); // Refresh lists
//     } catch (error) {
//       console.error("Error creating movie:", error);
//       alert("Failed to create movie. Please check the console for details.");
//     }
//   };

//   // Create cartoon
//   const createCartoon = async (newCartoon) => {
//     try {
//       await axios.post(API_CARTOONS, newCartoon);
//       getMoviesAndCartoons(); // Refresh lists
//     } catch (error) {
//       console.error("Error creating cartoon:", error);
//       alert("Failed to create cartoon. Please check the console for details.");
//     }
//   };

//   // Fetch movies and cartoons
//   const getMoviesAndCartoons = async () => {
//     try {
//       const moviesResponse = await axios(
//         `${API_MOVIES}${window.location.search}`
//       );
//       const cartoonsResponse = await axios(
//         `${API_CARTOONS}${window.location.search}`
//       );

//       dispatch({ type: "GET_MOVIES", payload: moviesResponse.data });
//       dispatch({ type: "GET_CARTOONS", payload: cartoonsResponse.data });
//     } catch (error) {
//       console.error("Error fetching movies and cartoons:", error);
//       alert(
//         "Failed to fetch movies and cartoons. Please check the console for details."
//       );
//     }
//   };

//   // Delete movie
//   const deleteMovie = async (id) => {
//     try {
//       await axios.delete(`${API_MOVIES}/${id}`);
//       getMoviesAndCartoons();
//     } catch (error) {
//       console.error("Error deleting movie:", error);
//       alert("Failed to delete movie. Please check the console for details.");
//     }
//   };

//   // Delete cartoon
//   const deleteCartoon = async (id) => {
//     try {
//       await axios.delete(`${API_CARTOONS}/${id}`);
//       getMoviesAndCartoons();
//     } catch (error) {
//       console.error("Error deleting cartoon:", error);
//       alert("Failed to delete cartoon. Please check the console for details.");
//     }
//   };

//   // Get one movie or cartoon
//   const getOneMovie = async (id, type) => {
//     try {
//       const url =
//         type === "cartoon" ? `${API_CARTOONS}/${id}` : `${API_MOVIES}/${id}`;
//       const { data } = await axios(url);
//       dispatch({ type: "GET_ONE_MOVIE", payload: data });
//     } catch (error) {
//       console.error("Error fetching one movie or cartoon:", error);
//       alert(
//         "Failed to fetch movie or cartoon. Please check the console for details."
//       );
//     }
//   };

//   // Edit movie
//   const editMovie = async (id, editedMovie) => {
//     try {
//       await axios.patch(`${API_MOVIES}/${id}`, editedMovie);
//       getMoviesAndCartoons(); // Refresh lists
//     } catch (error) {
//       console.error("Error editing movie:", error);
//       alert("Failed to edit movie. Please check the console for details.");
//     }
//   };

//   // Edit cartoon
//   const editCartoon = async (id, editedCartoon) => {
//     try {
//       await axios.patch(`${API_CARTOONS}/${id}`, editedCartoon);
//       getMoviesAndCartoons(); // Refresh lists
//     } catch (error) {
//       console.error("Error editing cartoon:", error);
//       alert("Failed to edit cartoon. Please check the console for details.");
//     }
//   };

//   // Create category
//   const createCategory = async (newCategory) => {
//     try {
//       await axios.post(API_CATEGORIES, newCategory);
//       navigate("/categories");
//     } catch (error) {
//       console.error("Error creating category:", error);
//       alert("Failed to create category. Please check the console for details.");
//     }
//   };

//   // Get categories
//   const getCategories = async () => {
//     try {
//       const { data } = await axios(API_CATEGORIES);
//       dispatch({ type: "GET_CATEGORIES", payload: data });
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//       alert(
//         "Failed to fetch categories. Please check the console for details."
//       );
//     }
//   };

//   // Filter by params
//   const fetchByParams = (query, value) => {
//     const search = new URLSearchParams(window.location.search);
//     if (value === "all") {
//       search.delete(query);
//     } else {
//       search.set(query, value);
//     }
//     const url = `${window.location.pathname}?${search}`;
//     navigate(url);
//   };

//   useEffect(() => {
//     getMoviesAndCartoons();
//     getCategories();
//   }, []);

//   const values = {
//     createMovie,
//     createCartoon,
//     getMoviesAndCartoons,
//     movies: state.movies,
//     cartoons: state.cartoons,
//     deleteMovie,
//     deleteCartoon,
//     getOneMovie,
//     editMovie,
//     editCartoon,
//     oneMovie: state.oneMovie,
//     createCategory,
//     getCategories,
//     categories: state.categories,
//     fetchByParams,
//   };

//   return (
//     <movieContext.Provider value={values}>{children}</movieContext.Provider>
//   );
// };

// export default MovieContextProvider;
//???/????????????????????????
import axios from "axios";
import React, { createContext, useContext, useReducer, useEffect } from "react";
import { API_MOVIES, API_CARTOONS, API_CATEGORIES } from "../helpers/const";
import { useNavigate } from "react-router-dom";

export const movieContext = createContext();
export const useMovie = () => useContext(movieContext);

const INIT_STATE = {
  movies: [],
  cartoons: [],
  oneMovie: {},
  categories: [],
};

const MovieContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "GET_MOVIES":
        return { ...state, movies: action.payload };
      case "GET_CARTOONS":
        return { ...state, cartoons: action.payload };
      case "GET_ONE_MOVIE":
        return { ...state, oneMovie: action.payload };
      case "GET_CATEGORIES":
        return { ...state, categories: action.payload };
      default:
        return state;
    }
  };

  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const createMovie = async (newMovie) => {
    try {
      await axios.post(API_MOVIES, newMovie);
      getMoviesAndCartoons();
    } catch (error) {
      console.error("Error creating movie:", error);
      alert("Failed to create movie. Please check the console for details.");
    }
  };

  const createCartoon = async (newCartoon) => {
    try {
      await axios.post(API_CARTOONS, newCartoon);
      getMoviesAndCartoons();
    } catch (error) {
      console.error("Error creating cartoon:", error);
      alert("Failed to create cartoon. Please check the console for details.");
    }
  };

  const getMoviesAndCartoons = async () => {
    try {
      const moviesResponse = await axios(
        `${API_MOVIES}${window.location.search}`
      );
      const cartoonsResponse = await axios(
        `${API_CARTOONS}${window.location.search}`
      );

      dispatch({ type: "GET_MOVIES", payload: moviesResponse.data });
      dispatch({ type: "GET_CARTOONS", payload: cartoonsResponse.data });
    } catch (error) {
      console.error("Error fetching movies and cartoons:", error);
      alert(
        "Failed to fetch movies and cartoons. Please check the console for details."
      );
    }
  };

  const deleteMovie = async (id) => {
    try {
      await axios.delete(`${API_MOVIES}/${id}`);
      getMoviesAndCartoons();
    } catch (error) {
      console.error("Error deleting movie:", error);
      alert("Failed to delete movie. Please check the console for details.");
    }
  };

  const deleteCartoon = async (id) => {
    try {
      await axios.delete(`${API_CARTOONS}/${id}`);
      getMoviesAndCartoons();
    } catch (error) {
      console.error("Error deleting cartoon:", error);
      alert("Failed to delete cartoon. Please check the console for details.");
    }
  };

  const getOneMovie = async (id, type) => {
    try {
      const url =
        type === "cartoon" ? `${API_CARTOONS}/${id}` : `${API_MOVIES}/${id}`;
      const { data } = await axios(url);
      dispatch({ type: "GET_ONE_MOVIE", payload: data });
    } catch (error) {
      console.error("Error fetching one movie or cartoon:", error);
      alert(
        "Failed to fetch movie or cartoon. Please check the console for details."
      );
    }
  };

  const editMovie = async (id, editedMovie) => {
    try {
      await axios.patch(`${API_MOVIES}/${id}`, editedMovie);
      getMoviesAndCartoons();
    } catch (error) {
      console.error("Error editing movie:", error);
      alert("Failed to edit movie. Please check the console for details.");
    }
  };

  const editCartoon = async (id, editedCartoon) => {
    try {
      await axios.patch(`${API_CARTOONS}/${id}`, editedCartoon);
      getMoviesAndCartoons();
    } catch (error) {
      console.error("Error editing cartoon:", error);
      alert("Failed to edit cartoon. Please check the console for details.");
    }
  };

  const createCategory = async (newCategory) => {
    try {
      await axios.post(API_CATEGORIES, newCategory);
      navigate("/categories");
    } catch (error) {
      console.error("Error creating category:", error);
      alert("Failed to create category. Please check the console for details.");
    }
  };

  const getCategories = async () => {
    try {
      const { data } = await axios(API_CATEGORIES);
      dispatch({ type: "GET_CATEGORIES", payload: data });
    } catch (error) {
      console.error("Error fetching categories:", error);
      alert(
        "Failed to fetch categories. Please check the console for details."
      );
    }
  };

  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(window.location.search);
    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    const url = `${window.location.pathname}?${search}`;
    navigate(url);
  };

  useEffect(() => {
    getMoviesAndCartoons();
    getCategories();
  }, []);

  const values = {
    createMovie,
    createCartoon,
    getMoviesAndCartoons,
    movies: state.movies,
    cartoons: state.cartoons,
    deleteMovie,
    deleteCartoon,
    getOneMovie,
    editMovie,
    editCartoon,
    oneMovie: state.oneMovie,
    createCategory,
    getCategories,
    categories: state.categories,
    fetchByParams,
  };

  return (
    <movieContext.Provider value={values}>{children}</movieContext.Provider>
  );
};

export default MovieContextProvider;
