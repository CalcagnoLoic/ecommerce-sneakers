const Component = ({
  content,
  id,
  additionnalClass,
}: {
  content: string;
  id: number;
  additionnalClass?: string;
}) => (
  <img
    src={content}
    alt="Product slider"
    className={`cursor-pointer md:h-[450px] md:rounded-xl ${additionnalClass}`}
    key={id}
  />
);

export default Component;
