export default function LoginPage(){

 
  return (
    <form action="/dashboard" className="absolute top-1/2 left-1/2  bg-stone-100 rounded-md border-1 -translate-1/2 border-stone-200 w-[50vw] min-h-96 flex flex-col items-center justify-center gap-4">
      <h1 className="text-black font-extrabold text-4xl">RadWEB CRM</h1>
      <fieldset className="flex flex-col gap-2"> 
      <input type="text" className="w-56 border-1 border-black rounded-md px-2 py-3"  placeholder="Login"  />
      <input type="password" className="w-56 border-1 border-black rounded-md px-2 py-3"  placeholder="Haslo"  />
      </fieldset>
      <button className="btn bg-red-500 text-white w-fit">Login</button>
    </form>
  )
}