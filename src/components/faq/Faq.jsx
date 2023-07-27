import SingleCard from "../cards/card";

const Faq = () => {
  return (
    <div>
      <div className="mt-5 mb-5">
        <h2 className="fs-45 text-uppercase">FAQ</h2>
      </div>
      <div className="container">
        <div className="blur2 position-absolute "></div>
        <div className="d-flex flex-wrap m-aut justify-content-center">
          <SingleCard
            tittle="Q: What is Crater?"
            data="Crater is an AI-powered Business Manager for Creators, Freelancers and Solo entrepreneurs. We help users automate Social Media, Finances and Cyber security, all in one place."
          />
          <SingleCard
            tittle="Q: What are the features?"
            data="Crater provides a wide range of useful features including sentiment analysis, audience engagement tools, social media management, insurance coverage for digital accounts, and automated tax management. Additionally, it offers tools to help maximize your YouTube views."
          />
        </div>
        <div className="d-flex flex-wrap m-aut justify-content-center">
          <SingleCard
            tittle="Q: Is my data safe?"
            data="Crater uses official Instagram/ Facebook/ TikTok/ Linkedin APIs to access data. We are regulated by the API guidelines of Instagram/ Facebook/ Youtube/ Linkedin and don't indulge in unauthorized activities on your Social Media Accounts. Also, We don't store any unnecessary data about your profile at our end."
          />
          <SingleCard
            tittle="Q: Is Crater only for Creators?"
            data="Crater can also be used by startups, agencies, talent managers to manage their social media."
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
