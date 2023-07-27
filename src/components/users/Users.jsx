import UserCard from "./UserCard";
import "./style.css";
const Users = () => {
  return (
    <div>
      <div className="container">
        <p className="fs-45">10,000+ Users have signed up!</p>

        <div className="d-flex flex-wrap align-items-center justify-content-evenly mt-5">
          <UserCard
            name="Mitansh"
            profession="Youtuber"
            text='"I have been able to increase my Youtube views by more than 30% by using their Views Predictor."'
            url="https://s3.ap-south-1.amazonaws.com/www.cratermedia/mitansh.jpeg"
          />
          <UserCard
            name="Chintan"
            profession="Solo Entrepreneur"
            text="Crater is the ultimate all-in-one solution. I can't imagine going back to managing everything manually."
            url="https://s3.ap-south-1.amazonaws.com/www.cratermedia/chintan.jpeg"
          />
          <UserCard
            name="Manisha"
            profession="Architect"
            text="I was skeptical at first, but after using Crater for just a few weeks, I'm completely sold. The AI-powered features are incredible."
            url="https://s3.ap-south-1.amazonaws.com/www.cratermedia/Manisha.jpeg"
          />
          <UserCard
            name="Pallavi"
            profession="Freelancer"
            text="The amount of money they saved for me was massive, didn't know AI could reply like me and better."
            url="https://s3.ap-south-1.amazonaws.com/www.cratermedia/pallavi.jpeg"
          />
        </div>
        <button className="btn btn-lg btn-warning rounded-5 border border-5 border-warning btn-outline-light fs-3 shadow mt-5 fw-bold d-flex m-auto">
          {" "}
          Get Early Access
        </button>
      </div>
    </div>
  );
};

export default Users;
