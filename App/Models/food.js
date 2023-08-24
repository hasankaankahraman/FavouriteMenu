class Food {
  constructor(
    id,
    categoryIds,
    title,
    afforability,
    complexity,
    imageUrl,
    ingredients,
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.afforability = afforability;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
  }
}
export default Food;
