import React, { useState, useEffect } from 'react'
import { FaStar } from "react-icons/fa";
import axios from "axios"
const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
};

export default function Rating() {
    const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  const handleClick = value => {
    setCurrentValue(value)
    setRating(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("review", review);
    formData.append("rating", review);
    

    try {
        await axios.post("http://localhost/api/teacher_new_crseP.php", formData);
        alert("Information added successfully!");
    } catch (error) {
        console.error(error);
        alert("Error uploading video.");
    }
};
  return (
    <form style={styles.container}  onSubmit={handleSubmit}>
    <h2> React Ratings </h2>
    <div style={styles.stars}>
      {stars.map((_, index) => {
        return (
          <FaStar key={index}size={24} onClick={() => handleClick(index + 1)} onMouseOver={() => handleMouseOver(index +1)} onMouseLeave={handleMouseLeave} color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
            style={{
              marginRight: 10,
              cursor: "pointer"
            }}
          />
        )
      })}
    </div>
    <textarea placeholder="What's your experience?" style={styles.textarea} className="field" autoComplete="off" required value={review} onChange={(e) => setReview(e.target.value)}/>
    <button style={styles.button} type="submit"> Submit </button>
    </form>
  )
}
const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    stars: {
      display: "flex",
      flexDirection: "row",
    },
    textarea: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      padding: 10,
      margin: "20px 0",
      minHeight: 100,
      width: 300
    },
    button: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      width: 300,
      padding: 10,
    }
  
  };