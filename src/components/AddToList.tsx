import { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.img) {
      return;
    }

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        note: input.note,
      },
    ]);

    setInput({
      name: "",
      age: "",
      note: "",
      img: "",
    });
  };

  return (
    <div className="add-list">
      <input
        type="text"
        name="name"
        maxLength={50}
        placeholder="Name"
        className="add-list-input"
        value={input.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="age"
        placeholder="Age"
        className="add-list-input"
        value={input.age}
        onChange={handleChange}
      />
      <input
        type="text"
        name="img"
        placeholder="Image Url"
        className="add-list-input"
        value={input.img}
        onChange={handleChange}
      />
      <textarea
        name="note"
        placeholder="Message"
        className="add-list-input"
        maxLength={110}
        value={input.note}
        onChange={handleChange}
        style={{ resize: "none", height: "70px" }}
      ></textarea>
      <button className="add-list-btn" onClick={handleClick}>
        Add To List
      </button>
    </div>
  );
};

export default AddToList;
