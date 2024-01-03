
const Component = ({content, href, id}: {content: string; href: string; id: number}) => (
    <a href={href} className="link-nav" key={id}>
        {content}
      </a>
)

export default Component;
