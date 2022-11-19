import { useParams } from "react-router-dom";

export const Answer = () => {
  const { code } = useParams();

  if (!code) {
    return <>Sorry nothing for you</>;
  }

  const decoded = window.atob(code);

  const [giver, reciver, gift] = decoded.split(":");
  return (
    <div className="answer">
      <div>
        <p>{`🎅 Dear ${giver},`}</p>
        <p>{`you are to give a gift to "${reciver}".`}</p>

        <p>
          {`They have been very good this year and have asked for `}
          <span>
            <strong>{`"${gift}"`}</strong>
            {` 🎁.`}
          </span>
        </p>
        <p>{`Please don't spend anymore than €160.`}</p>
        <p> {`Love Santa, Ho Ho Ho!`}</p>
        <p>
          {" "}
          {`P.s. Why not get them a small treat too, like some chocolate.`}
        </p>
      </div>
    </div>
  );
};
