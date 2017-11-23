import sampleRecipes from './recipes';

export const loadState = () => {
  try {
    const state = localStorage.getItem('recipes');
    if (state === null) {
      return sampleRecipes;
      // return undefined;
    }
    return JSON.parse(state);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    localStorage.setItem('recipes', JSON.stringify(state));
  } catch (error) {
    console.log(error);
  }
};
