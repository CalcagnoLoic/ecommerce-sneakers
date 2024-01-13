type Title = {
  content: string;
  kind: "h1" | "h2";
};

function Typography({ content, kind }: Title) {
  if (kind === "h1") {
    return <h1 className="mt-7 text-4xl capitalize">{content}</h1>;
  }

  return <h2 className="text-xs font-bold uppercase tracking-widest text-pumpkin">{content}</h2>;
}

export default Typography;
