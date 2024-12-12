import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const mailbox = mailboxes.find((m) => m._id === Number(mailboxId));

  return (
    <main>
      {mailbox ? (
        <>
          <h1>Mailbox {mailbox._id}</h1>
          <p><strong>Boxholder:</strong> {mailbox.boxholder}</p>
          <p><strong>Box Size:</strong> {mailbox.boxSize}</p>
        </>
      ) : (
        <h1>Mailbox Not Found!</h1>
      )}
    </main>
  );
};

export default MailboxDetails;
