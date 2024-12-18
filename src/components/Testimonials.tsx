import { InfiniteMovingCards } from './ui/infinite-movig-cards';

const testimonials = [
    {
        quote: "Our team has experienced seamless collaboration and improved productivity since adopting this solution. The streamlined processes have saved us valuable time and resources.",
        name: "Alex Johnson",
        title: "CTO at Acme Corp",
    },
    {
        quote: "Effortless team building tools have helped us foster a more cohesive and productive environment, leading to faster project completion.",
        name: "Jamie Lee",
        title: "Project Manager at Tech Innovators",
    },
    {
        quote: "The platform has enabled our team to collaborate seamlessly, enhancing our workflow and boosting overall efficiency.",
        name: "Taylor Smith",
        title: "Director of Operations",
    },
    {
        quote: "With these tools, we’ve been able to streamline team-building processes, leading to faster project outcomes and improved collaboration.",
        name: "Emily Davis",
        title: "Team Lead at AgileWorks",
    },
    {
        quote: "Our team has seen significant improvements in communication and collaboration, thanks to the effortless setup and intuitive features.",
        name: "Chris Brown",
        title: "Operations Manager at NextGen Solutions",
    },
    // New testimonials
    {
        quote: "The collaborative features have transformed our team's productivity, reducing meetings and enabling faster decision-making.",
        name: "Sophia Miller",
        title: "Operations Lead at Bright Future",
    },
    {
        quote: "Thanks to this platform, we've seen a marked improvement in cross-team collaboration and a boost in overall project efficiency.",
        name: "Michael Lee",
        title: "Product Manager at InnovateX",
    },
    {
        quote: "With minimal setup and great integration options, our team is now more aligned and productive than ever before.",
        name: "Jessica Turner",
        title: "Project Coordinator at Streamline Solutions",
    },
    {
        quote: "The streamlined workflow has helped us meet tight deadlines and exceed project goals consistently.",
        name: "Daniel Roberts",
        title: "Team Lead at AgileWorks",
    },
    {
        quote: "Collaboration has become much smoother, and our team is now more connected, even when working remotely.",
        name: "Liam White",
        title: "Remote Operations Manager",
    },
];

function Testimonials() {
    return (
        <div className="py-12 w-full">
            <div className="flex flex-col space-y-4 text-white lg:items-center lg:flex-row lg:space-x-4">
                <h2 className="text-3xl text-center lg:text-start lg:w-1/2">
                    What Our Happy Customers Are Saying About Us
                </h2>
                <p className="text-sm text-center lg:text-start lg:w-1/2">
                    Read what our satisfied customers are saying about us. Discover their experience and see how our services have positively impacted their businesses and lives.
                </p>
            </div>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
            <InfiniteMovingCards
                items={testimonials}
                direction="left"
                speed="slow"
            />
        </div>
    );
}

export default Testimonials;
