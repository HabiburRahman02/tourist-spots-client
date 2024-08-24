
import { Typewriter } from 'react-simple-typewriter';
import faqImg from '../../../../assets/faq/faq.jpg'
const Faq = () => {
    return (
        <div className="mt-16 max-w-7xl mx-auto">
            <div className="mb-6 text-3xl font-bold text-center">
                F
                <Typewriter
                    loop={false}
                    delaySpeed={2500}
                    words={
                        ['requent Asked Questions_',
                        ]}>

                </Typewriter>
            </div>
            <div className="lg:flex items-center gap-6">
                <div className="lg:w-1/2">
                    <img className='w-full h-full' src={faqImg} alt="" />
                </div>
                <div className="lg:w-1/2">
                    <div className="join join-vertical w-full">
                        <div className="collapse collapse-plus join-item border-black border-b-[1px] py-3">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-xl md:text-2xl font-semibold">How to showcase top destinations?</div>
                            <div className="collapse-content text-lg">
                                <p className="">Use visually appealing images, brief descriptions, and highlight unique features. Implement a carousel or grid layout for easy navigation.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus join-item border-black border-b-[1px] py-3">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-xl md:text-2xl font-semibold">How to add virtual tours?</div>
                            <div className="collapse-content text-lg">
                                <p>Integrate 360-degree images or videos using platforms like Matterport or Google Street View, and embed them directly into the website.
                                </p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus join-item border-black border-b-[1px] py-3">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-xl md:text-2xl font-semibold">How to categorize tourist spots?</div>
                            <div className="collapse-content text-lg">
                                <p>Group by type (e.g., natural, cultural, historical), location, or popularity, and provide filters to help users find what they’re interested in</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus join-item py-3">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-xl md:text-2xl font-semibold">How to highlight local landmarks?</div>
                            <div className="collapse-content text-lg">
                                <p>Use prominent visuals, feature them on the homepage, and create dedicated pages with detailed information, history, and visitor tips.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;