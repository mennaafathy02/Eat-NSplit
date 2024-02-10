import Friend from "./Friend";

/* first i have to create an interface for the props
    because if i don't do that, i will get an error
    this error because i didn't define the type of the props
    */

interface FriendListProps {
  friends: {
    id: string;
    name: string;
    image: string;
    balance: number;
  }[];
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

export default function FriendsList({
  friends,
  onSelectedFriend,
  selectedFriend,
}: FriendListProps) {
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend
            key={friend.id}
            friend={friend}
            onSelectedFriend={onSelectedFriend}
            selectedFriend={selectedFriend}
          />
        ))}
      </ul>
    </>
  );
}
