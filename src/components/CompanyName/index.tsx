const Component = ({ name, size }: { name: string, size: "xs" | "lg" }) => (
    <h2 className={`text-${size} font-bold uppercase tracking-widest text-pumpkin`}>
    {
        name
    }
    </h2>
)

export default Component
