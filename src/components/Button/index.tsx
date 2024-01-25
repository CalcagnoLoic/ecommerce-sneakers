import Paragraph from "../../typographies/Paragraph";

interface ButtonType {
  onClick?: () => void;
  content: string;
  icon?: React.ReactNode;
  css: string;
}

const Component = ({ onClick, content, icon, css }: ButtonType) => {
  if (onClick) {
    return (
      <div className={css} onClick={() => onClick()}>
        {icon}
        <Paragraph kind="span" content={content} css="button-text" />
      </div>
    );
  }

  return (
    <div className={css}>
      {icon}
      <Paragraph kind="span" content={content} css="button-text" />
    </div>
  );
};
export default Component;
