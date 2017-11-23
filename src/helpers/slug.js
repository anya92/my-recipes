import slug from 'slug';

const getSlug = (recipe, name, recipes) => {
  let recipeSlug;
  if (recipe && recipe.name === name) {
    recipeSlug = recipe.slug;
  } else {
    recipeSlug = slug(name).toLowerCase();
    const slugRexEx = new RegExp(`^(${recipeSlug})((-[0-9]*$)?)$`, 'i');
    const recipesWithSlug = recipes.filter(el => el.slug.match(slugRexEx));
    if (recipesWithSlug.length) {
      recipeSlug = `${recipeSlug}-${recipesWithSlug.length + 1}`;
    }
  }
  return recipeSlug;
};

export default getSlug;
