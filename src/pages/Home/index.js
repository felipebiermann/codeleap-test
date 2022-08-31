import CodeLeap from "../../images/codeleap_logo_black 1.svg";
import { Link } from "react-router-dom";
import { Modal } from "../../components/Modal";

export function Home() {
  return (
    <>
      <img className="flex justify-center items-center" src={CodeLeap} alt="" />

      <Modal />
    </>
  );
}
