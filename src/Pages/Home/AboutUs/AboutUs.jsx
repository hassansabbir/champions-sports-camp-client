import summerCampImg from "../../../assets/summerCamp.png";

const AboutUs = () => {
  return (
    <div>
      <h2 className="text-5xl text-center my-20 font-display">
        What is Champions Sports Summer Camp?
      </h2>
      <div className="md:flex justify-center items-center my-20">
        <img className="w-[650px] h-[500px]" src={summerCampImg} alt="" />
        <div className="px-5 md:px-0">
          <h2 className="text-3xl my-10 font-bold text-center">
            An Ideal Camp for <br /> Reanimate Hidden Talent
          </h2>
          <p className="text-xl w-10/12 text-center mx-auto">
            Yusrn azlfi jor sit amet consectetur adipisicing elit. Eos
            consectetur vel voluptatum quaerat velit molestias iure a similique
            dolore, dignissimos temporibus, minus delectus doloremque? Cumque
            nulla, laborum idrlk afjkkryt dignissimos.
          </p>
          <h2 className="text-3xl font-bold text-center mt-10">What We Do</h2>
          <ul className="text-xl ml-10">
            <p className="text-center">
              Lskl sag8u oagha awfoh o8rgv lor sit amet consectetur adipisicing
              elit. Possimus enim est laborum aperiam neque. Id nihil eveniet
              quisquam officia tempore.
            </p>
            <br />
            <div className="md:flex justify-around">
              <div>
                <h2 className="text-2xl font-bold">Yihra alfh</h2>
                <ul>
                  <li className="list-disc">Esibn lisusba</li>
                  <li className="list-disc">Yssg uffbk</li>
                  <li className="list-disc">Oafhbku kuf</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Ohra alffh</h2>
                <ul>
                  <li className="list-disc">Esibn lisusba</li>
                  <li className="list-disc">Yssg uffbk</li>
                  <li className="list-disc">Oafhbku kuf</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Usrgo kahf</h2>
                <ul>
                  <li className="list-disc">Esibn lisusba</li>
                  <li className="list-disc">Yssg uffbk</li>
                  <li className="list-disc">Oafhbku kuf</li>
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
