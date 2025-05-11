import Link from "next/link"
 
export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <div className="grid grid-cols-16 grid-rows-[4rem_1fr] max-h-screen overflow-hidden" ><nav className="col-span-3 row-span-2 min-h-screen bg-stone-800 flex flex-col gap-3 p-3 h-full justify-center">
<Link className="border-1 border-stone-500 w-fit px-2 py-1 text-stone-200 font-semibold rounded-md cursor-pointer hover:bg-stone-600" href="/dashboard/" >Start</Link>
<Link className="border-1 border-stone-500 w-fit px-2 py-1 text-stone-200 font-semibold rounded-md cursor-pointer hover:bg-stone-600" href="/dashboard/clients" >Klienci</Link>
<Link className="border-1 border-stone-500 w-fit px-2 py-1 text-stone-200 font-semibold rounded-md cursor-pointer hover:bg-stone-600" href="/dashboard/tasks" >Zadania</Link>
<Link className="border-1 border-stone-500 w-fit px-2 py-1 text-stone-200 font-semibold rounded-md cursor-pointer hover:bg-stone-600" href="/dashboard/wiki" >Wiki</Link>
<Link className="border-1 border-stone-500 w-fit px-2 py-1 text-stone-200 font-semibold rounded-md cursor-pointer hover:bg-stone-600" href="/dashboard/copy" >Treści</Link>
<Link className="border-1 border-stone-500 w-fit px-2 py-1 text-stone-200 font-semibold rounded-md cursor-pointer hover:bg-stone-600" href="/dashboard/links" >Linkowanie</Link>
<Link className="border-1 border-stone-500 w-fit px-2 py-1 text-stone-200 font-semibold rounded-md cursor-pointer hover:bg-stone-600" href="/dashboard/settings" >Ustawienia</Link>
<Link className="border-1 border-stone-500 w-fit px-2 py-1 text-stone-200 font-semibold rounded-md cursor-pointer hover:bg-stone-600" href="/dashboard/messages" >Chats</Link>
<Link className="border-1 border-stone-500 w-fit px-2 py-1 text-stone-200 font-semibold rounded-md cursor-pointer hover:bg-stone-600" href="/" >Wyloguj</Link>

    </nav>
    <form action="" className="col-span-13 sticky top-0 h-full w-full bg-stone-700 flex items-center justify-end ">
        <input  className="bg-pink-400" type="search" name="" id="" /><div> <kbd>K</kbd> <kbd>CMD</kbd> </div></form>
        <section className="w-full col-span-13 col-start-4  bg-purple-300/0 h-full overflow-scroll" >{children}</section></div>
  }