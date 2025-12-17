export default function AllRoutesGrid({ routes }) {
  return (
    <section className="bg-white border border-gray-200 p-8 rounded-3xl">
      <h2 className="text-center text-xl font-bold text-gray-700 mb-8">
        All Available Routes
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {routes.map((route) => (
          <div
            key={route.code}
            className="bg-white border border-gray-200 p-4 rounded-xl text-center hover:border-cdo-yellow transition-colors duration-200 cursor-default group h-32 flex flex-col justify-center items-center"
            title={route.name}
          >
            <div className="text-cdo-green-dark font-black text-xl mb-1 group-hover:text-cdo-yellow-dark transition-colors">
              {route.code}
            </div>
            <div className="text-xs text-gray-400 truncate w-full">
              {route.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
