import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';

function FAQ() {
    return (
        <div className="py-12 w-full flex lg:flex-row flex-col text-white space-x-4 space-y-4">
            <div className="flex flex-col space-y-4 text-white lg:items-center lg:space-x-4 lg:w-1/2">
                <h2 className="text-3xl lg:text-start text-center">
                    You&apos;ve Got Questions, We&apos;ve Got Answers
                </h2>
                <p className="text-sm lg:text-start text-center">
                    We&apos;ve got you covered! Explore our comprehensive FAQ section for answers to all your questions. Satisfaction guaranteed.
                </p>
            </div>
            <div className="lg:w-1/2">
                <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <h3 className="text-lg font-medium">What is your refund policy?</h3>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-sm">
                                We offer a full refund within 30 days of purchase if you are not satisfied.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            <h3 className="text-lg font-medium">How can I contact support?</h3>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-sm">
                                You can contact support via email at support@example.com or through our contact form.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            <h3 className="text-lg font-medium">Is my data secure?</h3>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-sm">
                                Yes, we use industry-standard encryption to ensure your data is secure.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}

export default FAQ;
