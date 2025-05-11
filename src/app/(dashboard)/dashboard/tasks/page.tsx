export default function Tasks(){
    return (
        <div className="bg-violet-400/0 w-fit h-full grid grid-cols-[repeat(9,25rem)] gap-2 p-4">
            <div className="col-span-1 bg-blue-300/20 p-4 rounded-2xl shadow-lg">
                <h3 className="text-black font-extrabold text-xl uppercase">Nowe</h3>
            </div>
            <div className="col-span-1 bg-yellow-200/20 p-4 rounded-2xl shadow-lg">
                <h3 className="text-black font-extrabold text-xl uppercase">W trakcie</h3>
            </div>
            <div className="col-span-1 bg-emerald-700/20 p-4 rounded-2xl shadow-lg">
                <h3 className="text-black font-extrabold text-xl uppercase">Zlecone</h3>
            </div>
            <div className="col-span-1 bg-violet-700/20 p-4 rounded-2xl shadow-lg">
                <h3 className="text-black font-extrabold text-xl uppercase">Do edycji</h3>
            </div>
            <div className="col-span-1 bg-teal-500/20 p-4 rounded-2xl shadow-lg">
                <h3 className="text-black font-extrabold text-xl uppercase">U klienta</h3>
            </div>
            <div className="col-span-1 bg-cyan-700/20 p-4 rounded-2xl shadow-lg">
                <h3 className="text-black font-extrabold text-xl uppercase">Wymagana zgoda klienta</h3>
            </div>
            <div className="col-span-1 bg-lime-300/20 p-4 rounded-2xl shadow-lg">
                <h3 className="text-black font-extrabold text-xl uppercase">Jest zgoda klienta</h3>
            </div>
            <div className="col-span-1 bg-green-300/20 p-4 rounded-2xl shadow-lg">
                <h3 className="text-black font-extrabold text-xl uppercase">Wykonane przez klienta</h3>
            </div>
            <div className="col-span-1 bg-orange-300/20 p-4 rounded-2xl shadow-lg">
                <h3 className="text-black font-extrabold text-xl uppercase">Zlecenioodbiorca wykonal</h3>
            </div>
        </div>
    )
}