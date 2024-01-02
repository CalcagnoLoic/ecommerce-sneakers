const Component = ({ content, href, isActive }: { content: string, href: string, isActive: boolean }) => (
    <a className={`${isActive ? "font-bold": ""}link-nav`} href={href}>
        {
            content
        }
    </a>
)

export default Component
