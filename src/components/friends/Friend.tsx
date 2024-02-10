import Button from "../buttons/Button";

interface FriendProps {
  friend: {
    id: string;
    name: string;
    image: string;
    balance: number;
  };
  onSelectedFriend: (friend: {
    id: string;
    name: string;
    image: string;
    balance: number;
  }) => void;
  selectedFriend: {
    id: string;
    name: string;
    image: string;
    balance: number;
  };
}

export default function Friend({
  friend,
  onSelectedFriend,
  selectedFriend,
}: FriendProps) {
  const isSelected = selectedFriend.id === friend.id;

  return (
    <>
      <li key={friend.id} className={isSelected ? "selected" : ""}>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>

        {friend.balance < 0 && (
          <p className="red">
            You owe {friend.name} {Math.abs(friend.balance)}$
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes You {friend.balance}$
          </p>
        )}
        {friend.balance === 0 && (
          <p className="blue">You and {friend.name} are even</p>
        )}

        <Button onHandleCLick={() => onSelectedFriend(friend)}>
          {isSelected ? "Close" : "Select"}
        </Button>
      </li>
    </>
  );
}
