type Paragraph = {
  content: string | number | React.ReactNode;
  css: string;
};

const Paragraph: React.FC<Paragraph> = ({ content, css }) => {
  return <p className={css}>{content}</p>;
};

export default Paragraph;
