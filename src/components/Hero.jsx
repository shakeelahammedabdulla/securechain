import "./Hero.css"


export default function myHero() {
    return (
        <>
            <div className="hero p-32 flex flex-row text-white h-screen">

                <div className="left basis-1/2 pt-32">
                    <div className="heading text-6xl font-medium m-4">
                        Take part in the loyalty-driven gaming network.
                    </div>
                    <div className="sub-heading m-4 text-xl">Join the Alpha Dune network and pioneer the next gen GameFi and GambleFi applications with the ecosystem that rewards users for their actions at the network level.</div>
                    <a href="http://127.0.0.1:3000/"><button className="start-btn text-white m-4 p-4 rounded-full font-medium border-2 border-indigo-500 hover:bg-white hover:text-black">Start Sharing!</button></a>
                </div>
                <div className="right basis-1/2 pl-64 pb-128">
                    <img src="./ether.svg" alt="" srcset="" />
                </div>
            </div>

        </>
    )
}