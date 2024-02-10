import { ReactElement, useState } from "react";
import "./App.css";
import FriendsList from "./components/friends/FriendsList";
import FormAddFriend from "./components/forms/FormAddFriend";
import FormSplitBill from "./components/forms/FormSplitBill";
import Button from "./components/buttons/Button";

const initialFriends = [
  {
    id: "118836",
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: "933372",
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: "499476",
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App(): ReactElement {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState({
    id: "",
    name: "",
    image: "",
    balance: 0,
  });

  interface FriendProps {
    id: string;
    name: string;
    image: string;
    balance: number;
  }

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend: FriendProps) {
    setFriends((prevFriends) => [...prevFriends, friend]);
    setShowAddFriend(false);
  }

  function handleSelectedFriend(friend: FriendProps) {
    setSelectedFriend((cur) =>
      cur.id === friend.id
        ? { id: "", name: "", image: "", balance: 0 }
        : friend
    );
    setShowAddFriend(false);
  }

  function handleSplitBill(value: number) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend({ id: "", name: "", image: "", balance: 0 });
  }

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendsList
            friends={friends}
            onSelectedFriend={handleSelectedFriend}
            selectedFriend={selectedFriend}
          />

          {showAddFriend && <FormAddFriend onAddClick={handleAddFriend} />}
          <Button onHandleCLick={handleShowAddFriend}>
            {showAddFriend ? "Close" : "Add Friend"}
          </Button>
        </div>
        {selectedFriend.id != "" && (
          <FormSplitBill
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
          />
        )}
      </div>
    </>
  );
}

export default App;
