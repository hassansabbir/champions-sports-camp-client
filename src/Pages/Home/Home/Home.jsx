import { Helmet } from "react-helmet-async";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import TopClasses from "../TopClasses/TopClasses";
import TopInstructorPage from "../TopInstructorPage/TopInstructorPage";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home || Champions Sports Camp</title>
      </Helmet>
      <Banner></Banner>
      <PhotoGallery></PhotoGallery>
      <TopClasses></TopClasses>
      <AboutUs></AboutUs>
      <TopInstructorPage></TopInstructorPage>
    </div>
  );
};

export default Home;
