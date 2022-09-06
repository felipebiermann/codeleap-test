export function Cards(props) {
  return (
    <section className="mb-32 text-gray-800 border border-current ">
      <div className="block   rounded-lg  bg-white">
        <div className="bg-black md:px-12">
          <h2 className="mx-3 text-2xl font-bold mb-4 text-white ">
            {props.title}
          </h2>
        </div>

        <p className="text-xs text-gray-600">{props.created_datetime}</p>
        <p className="mx-2 font-semibold mb-4 text-slate-600">
          @{props.username}
        </p>
        <p className="mx-4 text-gray-500 mb-6">{props.content}</p>
      </div>
    </section>
  );
}
