import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array of cart items
  total: 0,  // Total amount
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const item = action.payload;
      state.items.push(item);
      state.total += item.price;  // Update total
    },
    removeItemFromCart: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === itemId);
      if (itemIndex >= 0) {
        state.total -= state.items[itemIndex].price;
        state.items.splice(itemIndex, 1);  // Remove item from cart
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    }
  }
});

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;