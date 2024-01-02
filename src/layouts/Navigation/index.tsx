const Layout = ({ children, isChrimas }: { children: JSX.Element[], isChrimas: boolean }) => (
    <nav className={`${isChrimas ? "bg-orange-500" : ""} hidden flex-grow self-center lg:flex`}>
        {
            children
        }
    </nav>
)

export default Layout
