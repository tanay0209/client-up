import tesla from "../assets/logos/tesla-9.svg"
import coinbase from "../assets/logos/coinbase-1.svg"
import dropboax from "../assets/logos/dropbox-3.svg"
import spotify from "../assets/logos/logo-spotify.svg"
import openai from "../assets/logos/openai-wordmark.svg"
import qualcomm from "../assets/logos/qualcomm-logo.svg"

function Companies() {
    return (
        <div className="flex flex-col items-center w-full px-12 mt-12 text-white lg:mt-24">
            <h4 className="w-full text-xl text-center">Join 4000+ companies already growing</h4>
            <div className="flex items-center gap-16 overflow-x-auto no-scrollbar">
                <img src={tesla} alt="tesla" className="size-24" />
                <img src={coinbase} alt="coinbase" className="size-32" />
                <img src={dropboax} alt="dropbox" className="size-32" />
                <img src={spotify} alt="spotify" className="size-32" />
                <img src={openai} alt="openai" className="size-32" />
                <img src={qualcomm} alt="slack" className="size-32" />
            </div>
        </div>
    )
}

export default Companies