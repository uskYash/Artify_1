import AdNav from "../components/AdNav"
import Hero from "../components/Hero"
import AssetsImg from "../assets/a3.jpg"
import Footer from "../components/Footer";
import AdMakeCourse from "../components/AdMakeCourse";

function CreateCourse(){
    return(
        <>
        <AdNav/>
        <Hero
        cName="heromid"
        heroImg={AssetsImg}
        title=""
        btnClass="hide"
        />
        <AdMakeCourse/>
        <Footer/>
        </>
    )
}

export default CreateCourse;