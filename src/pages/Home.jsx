import Header from "../components/Header";
import Body from "../components/Body";

function Home() {
    return (
        <div className="w-full h-auto bg-[url('/images/background.jpg')] bg-cover bg-no-repeat">
            <Header />
            <Body />
        </div>
    );
}

export default Home;