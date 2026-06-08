import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useMemo,
} from "react";

const CartContext = createContext();

const STORAGE_KEY = "cartItems";

// ---------------- ACTIONS ----------------
const ACTIONS = {
  ADD: "ADD",
  UPDATE: "UPDATE",
  REMOVE: "REMOVE",
  CLEAR: "CLEAR",
};

// ---------------- INITIAL STATE ----------------
const initialState = () => {
  if (typeof window === "undefined") return { items: [] };

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];

    return {
      items: parsed.map((i) => ({
        id: String(i.id),
        name: i.name,
        img: i.img,
        price: Number(i.price),
        size: i.size || "default", // ✅ FIX
        quantity: Number(i.quantity || 1),
      })),
    };
  } catch {
    return { items: [] };
  }
};

// ---------------- REDUCER ----------------
function reducer(state, action) {
  switch (action.type) {

    // ADD ITEM
    case ACTIONS.ADD: {
      const item = {
        ...action.payload,
        size: action.payload.size || "default", // ✅ FIX
      };

      const exists = state.items.find(
        (i) =>
          String(i.id) === String(item.id) &&
          (i.size || "default") === item.size
      );

      if (exists) {
        return {
          items: state.items.map((i) =>
            String(i.id) === String(item.id) &&
            (i.size || "default") === item.size
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          ),
        };
      }

      return {
        items: [...state.items, item],
      };
    }

    // UPDATE ITEM
    case ACTIONS.UPDATE:
      return {
        items: state.items
          .map((i) =>
            String(i.id) === String(action.payload.id) &&
            (i.size || "default") === (action.payload.size || "default")
              ? { ...i, quantity: action.payload.quantity }
              : i
          )
          .filter((i) => i.quantity > 0),
      };

    // REMOVE ITEM
    case ACTIONS.REMOVE:
      return {
        items: state.items.filter(
          (i) =>
            !(
              String(i.id) === String(action.payload.id) &&
              (i.size || "default") === (action.payload.size || "default")
            )
        ),
      };

    // CLEAR CART
    case ACTIONS.CLEAR:
      return { items: [] };

    default:
      return state;
  }
}

// ---------------- PROVIDER ----------------
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, null, initialState);

  // SAVE TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
  }, [state.items]);

  // ---------------- TOTAL ITEMS ----------------
  const totalItems = useMemo(
    () => state.items.reduce((sum, i) => sum + i.quantity, 0),
    [state.items]
  );

  // ---------------- TOTAL PRICE ----------------
  const totalPrice = useMemo(() => {
    return state.items.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
  }, [state.items]);

  // ---------------- ADD ITEM ----------------
  const addItem = (product) => {
    const id = String(product.id || product._id);

    dispatch({
      type: ACTIONS.ADD,
      payload: {
        id,
        name: product.name,
        img: product.image,
        price: Number(product.price),
        size: product.size || "default", // ✅ FIX
        quantity: Number(product.quantity || 1),
      },
    });
  };

  // ---------------- INCREMENT ----------------
  const increment = (id, size) => {
    const safeSize = size || "default";

    const item = state.items.find(
      (i) =>
        String(i.id) === String(id) &&
        (i.size || "default") === safeSize
    );
    if (!item) return;

    dispatch({
      type: ACTIONS.UPDATE,
      payload: {
        id,
        size: safeSize,
        quantity: item.quantity + 1,
      },
    });
  };

  // ---------------- DECREMENT ----------------
  const decrement = (id, size) => {
    const safeSize = size || "default";

    const item = state.items.find(
      (i) =>
        String(i.id) === String(id) &&
        (i.size || "default") === safeSize
    );
    if (!item) return;

    const qty = item.quantity - 1;

    if (qty <= 0) {
      dispatch({
        type: ACTIONS.REMOVE,
        payload: { id, size: safeSize },
      });
    } else {
      dispatch({
        type: ACTIONS.UPDATE,
        payload: {
          id,
          size: safeSize,
          quantity: qty,
        },
      });
    }
  };

  // ---------------- REMOVE ----------------
  const removeItem = (id, size) =>
    dispatch({
      type: ACTIONS.REMOVE,
      payload: { id, size: size || "default" }, // ✅ FIX
    });

  // ---------------- CLEAR ----------------
  const clearCart = () =>
    dispatch({ type: ACTIONS.CLEAR });

  return (
    <CartContext.Provider
      value={{
        cart: state.items,
        addItem,
        increment,
        decrement,
        removeItem,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// ---------------- HOOK ----------------
export const useCart = () => useContext(CartContext);