import { Link } from "react-router-dom";

const MailboxList = ({ mailboxes }) => {
  return (
    <main>
      <h1>Mailbox List</h1>
      <div className="mailbox-list">
        {mailboxes.map((mailbox) => (
          <Link to={`/mailboxes/${mailbox._id}`} key={mailbox._id} className="mailbox-link">
            Mailbox {mailbox._id}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default MailboxList;
