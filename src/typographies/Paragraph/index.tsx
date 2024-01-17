type Paragraph = {
  kind: "p" | "span";
  content: string | number | React.ReactNode;
  css: string;
};

const Paragraph: React.FC<Paragraph> = ({ kind, content, css }) => {
  switch (kind) {
    case "p":
      return <p className={css}>{content}</p>;
      break;

    case "span":
      return <span className={css}> {content}</span>;
      break;
  }
};

export default Paragraph;
