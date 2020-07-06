const booksLoaded = payload => ({
   type: "FETCH_BOOKS_SUCCESS",
   payload
});

const booksRequested = () => ({type: "FETCH_BOOKS_REQUEST"});

const booksError = payload => ({type: "FETCH_BOOKS_FAILURE", payload})

export const getBooksData = service =>{

   return async (dispatch) => {
      dispatch(booksRequested());

      try {
         const data = await service.getBooks();

         dispatch(booksLoaded(data));
      } catch(e) {
         console.log(e)
         dispatch(booksError(e))
      }
   }
}

export const incGoods = payload => ({type: "INC_GOODS", payload});

export const decGoods = payload => ({type: "DEC_GOODS", payload});

export const delGoods = payload => ({type: "DEL_GOODS", payload});

export const bookAddedToCart = payload => ({type: "ADD_TO_CART", payload})