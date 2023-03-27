import React, { useState } from "react";
import { NewHotelType } from "../types/hotel";
import { Link, useNavigate } from "react-router-dom";
import Edit from "./Edit";
import { deleteHotel } from "../lib/controller";
import { StyledInformation } from "./styles/Information.styled";

interface IProps {
  hotel: NewHotelType;
  detailsPage?: boolean;
}

const Information = ({ hotel, detailsPage }: IProps) => {
  const [editDescription, setEditDescription] = useState(false);
  const navigate = useNavigate();

  return (
    <StyledInformation>
      <div className="image-container">
        <img className="location-image" src={hotel.location} alt="Hotel" />
        <h3>{hotel.title}</h3>
        <p className="region">{hotel.region}</p>
        <p className="per-night">{hotel.perNight} Kč / noc</p>
      </div>

      {/* Description */}
      <div className="description">
        <p className="reviews">
          <strong className="review-number">{hotel.stars} hvězdy</strong> (
          {hotel.review} hodnocení)
        </p>

        <p className="feature">Bonus: {hotel?.feature}</p>

        {detailsPage ? (
          <>
            <p className="description-text">
              {hotel.description}{" "}
              <strong
                className="edit-text"
                onClick={() => setEditDescription(!editDescription)}
              >
                Změnit popis
              </strong>
              {editDescription ? (
                <Edit
                  editDescription={editDescription}
                  setEditDescription={setEditDescription}
                  id={hotel.id}
                />
              ) : null}
            </p>
            <button onClick={() => deleteHotel(hotel.id, navigate)}>
              Smazat hotel
            </button>
          </>
        ) : (
          <Link to={`/hotels/${hotel.id}`}>
            <button>Více informací</button>
          </Link>
        )}
      </div>
    </StyledInformation>
  );
};

export default Information;
