const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

// const STATUSES = {
//     IDLE: 'idle',
//     ERROR: 'error',
//     LOADING: 'loading',
// }


// Object.freeze hm object ko change nahi kar skate hai
export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',

})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE,

    },

    // reducers hmare pure function hote hai isme koi bhi sideEffect nhi hone chahiye ye synchronously work karte hai
    reducers: {
        // setProduct(state, action) {
        //     // 
        //     state.data = action.payload;
        // },
        // setStatus(state, action) {
        //     // 
        //     state.status = action.payload;
        // },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                // state.data = action.payload;
                state.status = STATUSES.ERROR;
            })
    }

})

export const { setProduct, setStatus } = productSlice.actions;
export default productSlice.reducer;


// Thunks ====>>>>ak middleware hote hai hmare redux ke ander ----thunks ak normal function hote hai
// Normal thunks use:

// export function fetchProducts() {
//     return async function fetchProductsThunk(dispatch, getstate) {
//         dispatch(setStatus(STATUSES.LOADING));
//         try {
//             const res = await fetch('https://fakestoreapi.com/products');
//             const data = await res.json();
//             dispatch(setProduct(data));
//             dispatch(setStatus(STATUSES.IDLE));


//         }
//         catch (err) {
//             console.log(err);
//             dispatch(setStatus(STATUSES.ERROR))

//         }

//     }
// }



// second way thunk use
// createAsyncThink ka use basicaaly error ko handlig karne le liye use kiya jata hai jiske two parameter hite hai ---- ak parametr--- jisko kuch nhi identifier de dete hai ,and second paremater ko async function ka us ekarte hai
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
})


