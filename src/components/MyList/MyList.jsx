import { Typewriter } from "react-simple-typewriter";


const MyList = () => {
    return (
        <div className="mt-6">
            <div className="max-w-7xl mx-auto mb-6 text-3xl font-bold text-center">
                M
                <Typewriter
                    loop={false}
                    delaySpeed={2500}
                    words={
                        ['y Spots List',
                        ]}>

                </Typewriter>
            </div>
        </div>
    );
};

export default MyList;