import "./Loading.css";
import loading from "../../assets/loading.svg";

function Loading() {
  return (
    <div className="loading_container">
      <img src={loading} className="loading_icon" />
    </div>
  );
}

export default Loading;
