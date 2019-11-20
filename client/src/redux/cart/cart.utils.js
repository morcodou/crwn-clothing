export const addItemToCart = (cartItems, cartItem) => {
  const existingCartItem = cartItems.find(ci => ci.id === cartItem.id);

  if (existingCartItem) {
    return cartItems.map(ci =>
      ci.id === cartItem.id ? { ...ci, quantity: ci.quantity + 1 } : ci
    );
  }

  return [...cartItems, { ...cartItem, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItem) => {
  const existingCartItem = cartItems.find(ci => ci.id === cartItem.id);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(ci => ci.id !== cartItem.id);
  }

  return cartItems.map(ci =>
    ci.id === cartItem.id ? { ...ci, quantity: ci.quantity - 1 } : ci
  );
};
