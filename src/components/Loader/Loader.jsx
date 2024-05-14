import { ThreeDots } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.center}>
      <ThreeDots
        classname={css.loader}
        visible={true}
        height="40"
        width="40"
        color="#646cff"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
