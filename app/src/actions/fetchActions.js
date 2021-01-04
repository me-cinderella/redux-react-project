
export const fetchProductsBegin = () => ({
    type: 'FETCH_BEGIN'
  });
  
export const fetchProductsFail = error => ({
    type: 'FETCH_FAIL',
    payload: error
  });
  
export const fetchProductsSuccess = data => ({
    type: 'FETCH_SUCCESS',
    payload: data
  });

const fetchProducts = () => {
    return async dispatch => {

        dispatch(fetchProductsBegin());

        let products = await fetch('https://www.amiiboapi.com/api/amiibo')
            .then(response => response.json())
            .then(data => data.amiibo.slice(5, 17))
            .catch(error => dispatch(fetchProductsFail(error)))

        dispatch(fetchProductsSuccess(products));
    }
}

export default fetchProducts;