import Button from "../buttons/Button";
import { useState } from "react";

interface FormSplitBillProps {
  selectedFriend: {
    id: string;
    name: string;
    image: string;
    balance: number;
  };
  onSplitBill: (value: number) => void;
}

export default function FormSplitBill({
  selectedFriend,
  onSplitBill,
}: FormSplitBillProps) {
  const [bill, setBill] = useState<number>();
  const [paidByUser, setPaidByUser] = useState<number>();
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFriend = bill && paidByUser ? bill - paidByUser : 0;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💸 Bill Value</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>💸 Your Expense</label>
      <input
        type="number"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > Number(bill)
              ? Number(paidByUser)
              : Number(e.target.value)
          )
        }
      />

      <label>💸 {selectedFriend.name}'s Expense</label>
      <input type="number" disabled value={paidByFriend} />

      <label>💸 Who is Paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">you</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button onHandleCLick={() => handleSubmit}>Split Bill</Button>
    </form>
  );
}
