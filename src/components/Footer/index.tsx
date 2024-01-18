import Paragraph from "../../typographies/Paragraph";

const Component = () => (
  <div className="mt-3">
    <Paragraph
      kind="p"
      css="mt-16 py-5 text-center md:mt-0 list-none flex justify-center"
      content={
        <>
          Coded with love by{" "}
          <a
            href="https://github.com/CalcagnoLoic"
            target="_blank"
            className="ml-1"
          >
            @CalcagnoLoic
          </a>
        </>
      }
    />
  </div>
);

export default Component;
