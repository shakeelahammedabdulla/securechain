import "./Navbar.css"


export default function myNavbar() {
    return (
        <>
            <div className="navbar flex flex-row bg-black text-white p-4 pr-16 pl-16 justify-between items-center">
                <div className="left font-bold text-2xl">SecureChain</div>
                <div className="middle flex flex-row gap-8">
                    <button>Home</button>
                    <button>Docs</button>
                    <button>Pricing</button>
                </div>
                <div className="right">
                    <button className="join-now-btn p-2 bg-white text-black rounded-full">Join Now!</button>
                </div>
            </div>
        </>
    )
}