import React from "react";
import "./Allbooks.css";

function Allbooks() {
  const API_URL = process.env.REACT_APP_API_URL;

  const addToCart = async (bookId) => {
    try {
      const response = await fetch(`${API_URL}api/cart/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookId }),
      });

      if (response.ok) {
        alert("Book added to cart!");
      } else {
        alert("Failed to add to cart.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="books-page">
      <div className="books">
        <div className="book-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp16xiXu1ZtTzbLy-eSwEK4Ng6cUpUZnuGbQ&usqp=CAU"
            alt=""
          />
          <p className="bookcard-title">Wings Of Fire</p>
          <p className="bookcard-author">By Pranavdhar</p>
          <div className="bookcard-category">
            <p>Auto Biography</p>
          </div>
          <div className="bookcard-emptybox"></div>
          <button onClick={() => addToCart("book1")}>Add to Cart</button>
        </div>

        <div className="book-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Rb2t6jA5ml7n57qdTZbAOWX1qSfsLCbaOA&usqp=CAU"
            alt=""
          />
          <p className="bookcard-title">The Power Of Your Subconscious Mind</p>
          <p className="bookcard-author">By Joseph</p>
          <div className="bookcard-category">
            <p>Psychology</p>
          </div>
          <div className="bookcard-emptybox"></div>
          <button onClick={() => addToCart("book2")}>Add to Cart</button>
        </div>

        <div className="book-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRFiDRQ7a-Oo-CnMmnbIMApP1Cq9B5bYx-UA&usqp=CAU"
            alt=""
          />
          <p className="bookcard-title">Elon Musk</p>
          <p className="bookcard-author">By Elon</p>
          <div className="bookcard-category">
            <p>Auto Biography</p>
          </div>
          <div className="bookcard-emptybox"></div>
          <button onClick={() => addToCart("book3")}>Add to Cart</button>
        </div>

        <div className="book-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Rb2t6jA5ml7n57qdTZbAOWX1qSfsLCbaOA&usqp=CAU"
            alt=""
          />
          <p className="bookcard-title">The Subtle Art Of Not Giving A Fuck</p>
          <p className="bookcard-author">By Mark Manson</p>
          <div className="bookcard-category">
            <p>Comic</p>
          </div>
          <div className="bookcard-emptybox"></div>
          <button onClick={() => addToCart("book4")}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Allbooks;
