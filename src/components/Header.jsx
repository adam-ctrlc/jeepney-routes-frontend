import { Bus } from "lucide-react";

export default function Header() {
  return (
    <header className="text-center space-y-4">
      <div className="inline-flex items-center justify-center p-4 bg-white rounded-full border border-gray-200 mb-4">
        <Bus className="w-10 h-10 text-cdo-yellow-dark" />
      </div>

      <h1 className="text-5xl md:text-6xl font-black text-cdo-green-dark tracking-tight">
        CDO <span className="text-cdo-yellow-dark">Jeepney</span> Guide
      </h1>
      <p className="text-xl md:text-2xl text-cdo-green font-medium italic">
        "Wag ka mawala sa sariling bayan."
      </p>
      <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
        The easiest way to navigate Cagayan de Oro City. Find the right jeepney
        route for your destination in seconds.
      </p>
    </header>
  );
}
