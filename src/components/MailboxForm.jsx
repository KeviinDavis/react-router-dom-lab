import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailboxForm = ({ addBox }) => {
  const [formState, setFormState] = useState({ boxholder: "", boxSize: "Small" });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    addBox(formState);
    navigate("/mailboxes");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <main>
      <h1>Create a New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a Boxholder:
          <input
            type="text"
            name="boxholder"
            value={formState.boxholder}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Select a Box Size:
          <select name="boxSize" value={formState.boxSize} onChange={handleChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;
