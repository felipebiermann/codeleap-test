export function Cards(props) {
  return (
    <div
      className="w-full rounded-lg bg-white shadow p-5 text-gray-800 font-sans relative flex flex-col justify-between"
      // style="max-width: 400px"
    >
      <div className="flex mb-4">
        <div className="flex-grow pl-3">
          <h6 className="font-bold text-md">{props.username}</h6>
          <p className="text-xs text-gray-600">
            {/* {state.date.toLocaleDateString()} */}
          </p>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-sm">{props.content}</p>
      </div>
      <div className="flex justify-between"></div>
    </div>
  );
}
