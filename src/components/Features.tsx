import { CloudLightning, Crown, User } from "lucide-react";
import FeatureCard from "./feature-card";

const featureDate = [
    {
        title: "Project Management",
        description: "Efficiently manage projects with our intuitive platform for stremalined collaboration and successful outcomes",
        Icon: User
    },
    {
        title: "Best Competition Today",
        description: "Stay ahead of the competition with our innovative solutions designed for today's fast-paced business environment.",
        Icon: Crown
    },
    {
        title: "Networking Opportunities",
        description: "Unlock networking opportunities with our platform for global connections and collaboration",
        Icon: CloudLightning
    }
]


function Features() {
    return (
        <div className="py-12 w-full">
            <div className="flex flex-col space-y-4 text-white lg:items-center lg:flex-row lg:space-x-4">
                <h2 className="text-3xl text-center lg:text-start lg:w-1/2">
                    The Features You Need Most Right Now.
                </h2>
                <p className="text-sm text-center lg:text-start lg:w-1/2">
                    Discover the essential features you need most, designed to enhance your experience, boost productivity, and simplify your tasks. Efficiency and ease at your fingertips.
                </p>
            </div>
            <div className="grid mt-12 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
                {featureDate.map(feature => <FeatureCard title={feature.title} description={feature.description} Icon={feature.Icon} />)}
            </div>
        </div>
    );
}

export default Features;
