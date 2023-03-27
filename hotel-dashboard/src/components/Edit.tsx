import React, { useState } from "react";
import { updateHotel } from "../lib/controller";
import { useNavigate } from "react-router-dom";
import { StyledEdit } from "./styles/Edit.styled";

interface IProps {
  editDescription: boolean;
  setEditDescription: React.Dispatch<React.SetStateAction<boolean>>;
  id?: string;
}

const Edit = ({ editDescription, setEditDescription, id }: IProps) => {
  const [newDescription, setNewDescription] = useState("");
  const navigate = useNavigate();
  const handleUpdate = () => {
    // update hotel
    updateHotel(id, { description: newDescription });
    setEditDescription(!editDescription);
    // navigate back to homepage
    navigate("/");
  };
  return (
    <StyledEdit>
      <label htmlFor="">Nový popis hotelu:</label>
      <textarea
        required
        name="description"
        id="description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      ></textarea>
      <button className="update-button" onClick={() => handleUpdate()}>
        Změnit popis hotelu
      </button>
    </StyledEdit>
  );
};

export default Edit;
