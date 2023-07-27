import "./style.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// eslint-disable-next-line react/prop-types
const UserCard = ({name, profession,url, text}) => {
  return (
    <div>
      <div className="userCard bg-white rounded rounded-3 shadow d-flex flex-column mb-4 ">
        <div className="top d-flex align-items-center p-1 justify-content-between">
          <div className=" d-flex align-items-center gap-2">
            <img
              className="userImg"
              src={url}
              alt="userImage"
            />
            <div>
              <p className="fw-bold text-dark mb-0 fs-5">{name}</p>
              <span className="profession-text">{profession}</span>
            </div>
          </div>
          <MoreHorizIcon className="fs-1" />
        </div>
        <div className="middle text-white bg-dark p-2"> {text}</div>

        <div className="bottom d-flex align-items-center justify-content-between p-2">
          <div className="d-flex align-items-center gap-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              version="1"
              viewBox="0 0 48 48"
              className="lg:text-[1.35vw] text-[21px] "
              height="1.2em"
              width="1.2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#F44336"
                d="M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"
              ></path>
            </svg>

            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"></path>
            </svg>

            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"></path>
            </svg>
          </div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 384 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
