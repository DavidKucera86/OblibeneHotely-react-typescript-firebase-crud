import { DocumentData, onSnapshot, QuerySnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { hotelsCollection } from "../lib/controller";
import { NewHotelType } from "../types/hotel";
import Information from "./Information";
import { StyledCard } from "./styles/Card.styled";

function Card() {
  const [hotels, setHotels] = useState<NewHotelType[]>([]);
  const [sort, setSort] = useState<string>("");

  useEffect(
    () =>
      onSnapshot(hotelsCollection, (snapshot: QuerySnapshot<DocumentData>) => {
        setHotels(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      }),
    []
  );

  const sortedHotels = hotels?.sort((a, b) => {
    if (sort === "title") {
      if (a.title && b.title) return a.title.localeCompare(b.title);
    }
    if (sort === "perNight") {
      return Number(a.perNight) - Number(b.perNight);
    }
    if (sort === "stars") {
      return Number(a.stars) - Number(b.stars);
    }
    if (sort === "review") {
      return Number(a.review) - Number(b.review);
    }
    return 0;
  });

  return (
    <StyledCard>
      <h2 className="sort-title">Seřadit hotely</h2>
      <form>
        <select defaultValue={""} onChange={(e) => setSort(e.target.value)}>
          <option value="">Řadit podle...</option>
          <option value="title">Jméno</option>
          <option value="perNight">Cena az noc</option>
          <option value="stars">Počet hvězd</option>
          <option value="review">Počet hodnocení</option>
        </select>
      </form>
      <h2 className="title">Přehled hotelů</h2>
      {hotels && hotels.length ? (
        <div className="individual-card">
          {sortedHotels?.map((hotel) => (
            <Information key={hotel.id} hotel={hotel} />
          ))}
        </div>
      ) : (
        <h2 className="no-hotels">There are no hotels. Please add one</h2>
      )}
    </StyledCard>
  );
}

export default Card;
