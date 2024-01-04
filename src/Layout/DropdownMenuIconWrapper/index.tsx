const Layout = ({children}: {children: JSX.Element[]}) => (
    <div className="z-30 flex flex-grow items-center justify-start">
        {children}
    </div>
)

export default Layout