import { Link } from "react-router-dom";

const MailboxList = ({ mailboxes }) => {
  return (
    <main>
      <h1>Mailboxes</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {mailboxes.map((mailbox) => (
          <Link
            to={`/mailboxes/${mailbox._id}`}
            key={mailbox._id}
            className="mail-box"
            style={{
              width: "100px",
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              color: "white",
              backgroundColor: "#535bf2",
              border: "2px solid white",
              borderRadius: "8px",
            }}
          >
            {mailbox._id}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default MailboxList;
