export const SELECTED_CATEGORY = 'SELECTED_CATEGORY'
export const selectedCategory = (nameCategory) => ({
  type: SELECTED_CATEGORY,
  payload: nameCategory,
})
