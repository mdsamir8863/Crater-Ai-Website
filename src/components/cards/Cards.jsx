import SingleCard from "./card";
import "./card.css";
const Cards = () => {
  return (
    <div>
      <div className="mt-5 mb-5">
        <h2 className="fs-45">All the creator business tools.</h2>
        <h2 className="fs-45">All with your Crater account.</h2>
      </div>
      <div className="container card-wrapper">
        <div className="blur2 position-absolute "></div>

        <SingleCard
          tittle="Sentimental Analysis"
          data="Automatically hides damaging, hateful, racist comments and spam from
            your Social Media posts."
        />
        <SingleCard
          tittle="Maximize Your YouTube Views"
          data="Compare thumbnails and titles and see which will get more Views on YouTube. Predict YouTube Views before you upload."
        />
        <SingleCard
          tittle="Engage with Your Audience"
          data="Al will Reply to 1000s of comments/messages just like how the Creator would in less than a second."
        />
        <SingleCard
          tittle="Social Media Manager"
          data="Manage all your Social Media accounts from a single Dashboard"
        />
        <SingleCard
          tittle="Digital Account Recovery"
          data="Don't lose your entire digital business to a hack, protect it with Crater."
        />
        <SingleCard
          tittle="Automation of taxes"
          data="Once you sync your accounts, our AI will handle the rest. It will help you file taxes in less than 20 minutes."
        />
      </div>
    </div>
  );
};

export default Cards;
