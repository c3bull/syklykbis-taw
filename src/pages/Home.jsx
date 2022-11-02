import { useNavigate } from 'react-router-dom';
import HomeSwiper from "../components/home/HomeSwiper";
import OurProductsSwiper from "../components/home/OutProductsSwiper";
import HomeMakeAndOrder from "../components/home/HomeMakeAnOrder";
import Navbar from "../components/layouts/Navbar";


const Home = () => {
    //TODO
    // - inne zdjęcia w pierwszym sliderze
    // - nie jestes robotem ReCaptcha

    const navigate = useNavigate();

    const goToProducts = () => {
        navigate("/produkty");
    };

    const goToOrder = () => {
        navigate("/zamow");
    };
    return (
        <>
            <HomeSwiper />
            <OurProductsSwiper goToProducts={goToProducts} />
            <HomeMakeAndOrder goToOrder={goToOrder} />
        </>
    );
}

export default Home