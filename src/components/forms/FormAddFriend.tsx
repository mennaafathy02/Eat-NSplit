import { useState } from "react";
import Button from "../buttons/Button";

interface FormAddFriendProps {
  onAddClick: (friend: {
    id: string;
    name: string;
    image: string;
    balance: number;
  }) => void;
}

export default function FormAddFriend({ onAddClick }: FormAddFriendProps) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const id = String(crypto.randomUUID());
    const newFriend = {
      id: id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddClick(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👨🏼‍🤝‍👨🏼 Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🌆 Friend Image</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button onHandleCLick={() => onsubmit}>Add</Button>
    </form>
  );
}
