export const selectCartModule = (state) => state.cart;

export const selectMovieAmount = (state, movieId) =>
  selectCartModule(state)[movieId] || 0;

export const selectMoviesAmount = (state) =>
  Object.values(selectCartModule(state)).reduce(
    (acc, amount) => acc + amount,
    0
  );
