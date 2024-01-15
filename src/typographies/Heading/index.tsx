type Title = {
  content: string;
  kind: "h1" | "h2" | "span";
  css: string;
};

const Heading: React.FC<Title> = ({ content, kind, css }) => {
  switch (kind) {
    case "h1":
      return <h1 className={css}>{content}</h1>;
      break;

    case "h2":
      return <h2 className={css}>{content}</h2>;
      break;

    case "span":
      return <span className={css}> {content}</span>;
      break;
  }
};

export default Heading;
