import './css/index.css'
import './css/DarkVeil.css'
import DarkVeil from "./components/BackGroundDarkVeil.tsx";
import SplitText from "./components/PageHeader.tsx"; `./BackGroundDarkVeil`

const handleAnimationComplete = () => {
    console.log('All letters have animated!');
};

export default function App() {
    return (
        <div className="main_container">
            <DarkVeil />
            <header>
                <h1 className="main_header">
                    <SplitText
                        text="Welcome to Music Lab"
                        className="text-2xl font-semibold text-center"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                </h1>
            </header>

            <main>

            </main>
        </div>
    );
}