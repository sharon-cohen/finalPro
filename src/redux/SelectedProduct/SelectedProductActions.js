export const SELECTED_PRODUCT = 'SELECTED_PRODUCT';
export const selectedProduct = (product) => ({
  type: SELECTED_PRODUCT,
  payload: product,
});
