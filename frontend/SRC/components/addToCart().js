import axios from "axios";

const addToCart = async (bookId) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}api/cart/add`, {
      userId: currentUser._id, // from AuthContext
      bookId: bookId,
    });
    alert("Book added to cart!");
  } catch (err) {
    console.error(err);
    alert("Failed to add book.");
  }
};
