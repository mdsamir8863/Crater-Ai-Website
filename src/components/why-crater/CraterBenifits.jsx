import "./style.css";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import NoEncryptionGmailerrorredOutlinedIcon from "@mui/icons-material/NoEncryptionGmailerrorredOutlined";
const CraterBenefits = () => {
  return (
    <section className="container mt-5 mb-5">
      <div className="blurCrater"></div>
      <p className="fs-45 ">Why Crater ?</p>

      <div className="craters-container rounded-3 border border-5 border-warning shadow d-flex ">
        <div className="withoutCrater w-50">
          <p className="text-white fw-bold text-center mb-0">Without Crater</p>
          <div className="list">
            <div className="d-flex align-items-start gap-2">
              <NoEncryptionGmailerrorredOutlinedIcon className="text-danger" />
              <div className="">
                <li className="list-unstyled text-white fs-10">
                  Manual Business Management
                </li>
                <li className="list-unstyled fs-8 text-white-50">
                  Spend hours, Limited focus on Creativity and struggle to
                  optimize margins
                </li>
              </div>
            </div>
          </div>
          <div className="list">
            <div className="d-flex align-items-start gap-2">
              <NoEncryptionGmailerrorredOutlinedIcon className="text-danger" />
              <div className="">
                <li className="list-unstyled text-white fs-10">
                  Manual Social Media Management
                </li>
                <li className="list-unstyled fs-8 text-white-50">
                  Manage multiple accounts manually, limited engagement with
                  your followers and lot of guess work in selecting captions and
                  thumbnails.
                </li>
              </div>
            </div>
          </div>
          <div className="list">
            <div className="d-flex align-items-start gap-2">
              <NoEncryptionGmailerrorredOutlinedIcon className="text-danger" />
              <div className="">
                <li className="list-unstyled text-white fs-10">
                  Manual Financial Management
                </li>
                <li className="list-unstyled fs-8 text-white-50">
                  Increase in Financial risk via manual methods and missed
                  revenue opportunities
                </li>
              </div>
            </div>
          </div>
          <div className="list">
            <div className="d-flex align-items-start gap-2">
              <NoEncryptionGmailerrorredOutlinedIcon className="text-danger" />

              <div className="">
                <li className="list-unstyled text-white fs-10">
                  Costly Solutions
                </li>
                <li className="list-unstyled fs-8 text-white-50">
                  Expensive management options and High expenditure on hiring
                  managers or outsourcing
                </li>
              </div>
            </div>
          </div>
          <div className="list">
            <div className="d-flex align-items-start gap-2">
              <NoEncryptionGmailerrorredOutlinedIcon className="text-danger" />

              <div className="">
                <li className="list-unstyled text-white fs-10">
                  Vulnerability to Cyber Threats
                </li>
                <li className="list-unstyled fs-8 text-white-50">
                  Increased risk of cyber attacks and Lack of dedicated security
                  features
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="withCrater w-50">
          <p className="text-white fw-bold text-center mb-0">With Crater</p>

          <div className="list">
            <div className="d-flex align-items-start gap-2">
              <VerifiedOutlinedIcon className="text-success" />

              <div className="">
                <li className="list-unstyled text-white fs-10">
                  Automated Business Management
                </li>
                <li className="list-unstyled fs-8 text-white-50">
                  Save time, Focus on creativity and increse margins by more
                  than 30%
                </li>
              </div>
            </div>
          </div>
          <div className="list">
            <div className="d-flex align-items-start gap-2">
              <VerifiedOutlinedIcon className="text-success" />

              <div className="">
                <li className="list-unstyled text-white fs-10">
                  AI-powered Social Media Management
                </li>
                <li className="list-unstyled fs-8 text-white-50">
                  Manage multiple Social Media accounts, AI-powered replies and
                  ML-powered views and revenue predictor
                </li>
              </div>
            </div>
          </div>
          <div className="list">
            <div className="d-flex align-items-start gap-2">
              <VerifiedOutlinedIcon className="text-success" />

              <div className="">
                <li className="list-unstyled text-white fs-10">
                  AI-powered Financial Management
                </li>
                <li className="list-unstyled fs-8 text-white-50">
                  Monitor and control finances and let AI file taxes in less
                  than 10 minutes
                </li>
              </div>
            </div>
          </div>

          <div className="list">
            <div className="d-flex align-items-start gap-2">
              <VerifiedOutlinedIcon className="text-success" />

              <div className="">
                <li className="list-unstyled text-white fs-10">
                  Affordability
                </li>
                <li className="list-unstyled fs-8 text-white-50">
                  Cost-effective subscription plans and Value for money
                </li>
              </div>
            </div>
          </div>
          <div className="list">
            <div className="d-flex align-items-start gap-2">
              <VerifiedOutlinedIcon className="text-success" />

              <div className="">
                <li className="list-unstyled text-white fs-10">
                  Cyber Threat Mitigation
                </li>
                <li className="list-unstyled fs-8 text-white-50">
                  Protect against cyber threats and Enhanced security measures
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraterBenefits;
