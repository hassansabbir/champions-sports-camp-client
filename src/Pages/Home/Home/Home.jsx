import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import TopClasses from "../TopClasses/TopClasses";
import TopInstructorPage from "../TopInstructorPage/TopInstructorPage";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <PhotoGallery></PhotoGallery>
      <TopClasses></TopClasses>
      <TopInstructorPage></TopInstructorPage>
    </div>
  );
};

export default Home;
