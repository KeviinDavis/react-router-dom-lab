import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailboxForm = ({ addBox }) => {
  const [boxholder, setBoxholder] = useState("");
  const [boxSize, setBoxSize] = useState("Small");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    addBox({ boxholder, boxSize });
    navigate("/mailboxes"); 
  };

  return (
    <main>
      <h1>Create a New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Boxholder Name:
          <input
            type="text"
            value={boxholder}
            onChange={(e) => setBoxholder(e.target.value)}
            required
          />
        </label>
        <label>
          Box Size:
          <select
            value={boxSize}
            onChange={(e) => setBoxSize(e.target.value)}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>
        <button type="submit">Create Mailbox</button>
      </form>
    </main>
  );
};

export default MailboxForm;
