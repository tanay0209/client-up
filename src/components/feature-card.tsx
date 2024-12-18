
interface IFeatureCard {
    title: string,
    description: string,
    Icon: React.ElementType

}

function FeatureCard({ title, description, Icon }: IFeatureCard) {
    return (
        <div className="relative overflow-hidden flex flex-col items-center py-2 px-4 justify-around h-[300px] rounded-xl shadow-lg text-white text-start border border-stone-500">
            <div className="rounded-full z-10 relative size-16 bg-gradient-to-b from-green-300 to-green-500 flex items-center justify-center mb-4">
                <Icon color="white" size={24} />
                <div className="absolute bg-green-500 rounded-full opacity-20 size-20"></div>
            </div>
            <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-2 items-start">{title}</h3>
                <p className="text-sm text-white/75">
                    {description}
                </p>
            </div>
            <div
                className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-b from-green-900 to-transparent opacity-20 z-0"
            ></div>
            <div
                className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-b from-green-700 to-transparent opacity-10 z-0"
            ></div>
        </div>
    );
}

export default FeatureCard;
