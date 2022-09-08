import moment from "moment";
import DeleteIcon from "../../images/Vector.svg";

export function Cards(props) {
  return (
    <section className="mx-4 mb-24 text-gray-800 border border-current ">
      <div className="flex relative flex-row bg-white rounded-lg justify-between p-4 text-black">
        <img
          className="bg-black rounded-full p-0.5 inline-block absolute text-center right-4 top-12 text-white"
          onClick={props.onPressRemoveItem}
          src={DeleteIcon}
          alt=""
        ></img>
      </div>
      <div className="rounded-lg  bg-white">
        <div className="bg-black p-1">
          <h2 className="py-3 mx-4 text-2xl font-bold  text-white ">
            {props.title}
          </h2>
        </div>

        <p className="flex justify-end text-xs text-gray-600 mx-2">
          {moment(props.created_datetime).fromNow()}
        </p>
        <p className=" mx-4 font-semibold mb-4 text-slate-600">
          @{props.username}
        </p>
        <p className=" mx-4 text-gray-500 mb-6">{props.content}</p>
      </div>
    </section>
  );
}
