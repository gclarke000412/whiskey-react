import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        brand: "Whiskey Brand",
        age: "Years aged",
        rating: "Rating / 10",
        flavor: "Flavor profile",
        price: "Price per bottle",
    },
    reducers: {
        chooseBrand: (state, action) => { state.brand = action.payload},
        chooseAge: (state, action) => { state.age = action.payload},
        chooseRating: (state, action) => { state.rating = action.payload},
        chooseFlavor: (state, action) => { state.flavor = action.payload},
        choosePrice: (state, action) => { state.price = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseBrand, chooseAge, chooseRating, chooseFlavor, choosePrice} = rootSlice.actions