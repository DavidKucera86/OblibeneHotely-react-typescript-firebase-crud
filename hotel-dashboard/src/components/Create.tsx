import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addHotel } from "../lib/controller";
import { StyledCreate } from "./styles/Create.styled";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [feature, setFeature] = useState("Room Only");
  const [location, setLocation] = useState("");
  const [stars, setStars] = useState("1");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const [review, setReview] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [perNight, setPerNight] = useState("");

  const navigate = useNavigate();

  const addNewHotel = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addHotel({
      title,
      description,
      feature,
      location,
      stars,
      country,
      region,
      review,
      totalPrice,
      perNight,
    });

    navigate("/");
  };
  return (
    <StyledCreate>
      <h2>Add a new hotel</h2>
      <form onSubmit={(e) => addNewHotel(e)}>
        <label>Název hotelu:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Popis hotelu:</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>Bonus:</label>
        <select value={feature} onChange={(e) => setFeature(e.target.value)}>
          <option value="Room Only">V ceně jen pokoj</option>
          <option value="Room with Breakfast included">Snídaně v ceně</option>
          <option value="Local Charges Payable at Hotel">
            Dodatečné poplatky lze hradit na recepci
          </option>
          <option value="Free Parking for all guests">Parkování v ceně</option>
          <option value="Free WiFi">Free WiFi</option>
          <option value="Spa and wellness centre included">
            Wellness v ceně
          </option>
          <option value="Private parking at the hotel">
            Soukromé parkování
          </option>
          <option value="Restaurant & Bar">Restaurace & Bar</option>
          <option value="Swimming pool">Plavecký bazén</option>
          <option value="Room and Parking">Parkování přímo u pokoje</option>
        </select>

        <label>URL obrázku hotelu:</label>
        <input
          type="text"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label>Počet hvězd:</label>
        <select value={stars} onChange={(e) => setStars(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label>Země:</label>
        <input
          type="text"
          required
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <label>Region:</label>
        <input
          type="text"
          required
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
        <label>Počet recenzí:</label>
        <input
          type="number"
          required
          min="1"
          max="1000"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <label>Celková cena (Kč):</label>
        <input
          type="text"
          required
          value={totalPrice}
          onChange={(e) => setTotalPrice(e.target.value)}
        />
        <label>Cena za noc(Kč):</label>
        <input
          type="text"
          required
          value={perNight}
          onChange={(e) => setPerNight(e.target.value)}
        />
        <button>Přidat hotel</button>
      </form>
    </StyledCreate>
  );
};

export default Create;
