import profilePic from "../assets/images/pfp.jpg";

export default function Banner(){
    return (
        <section class="py-8 z-10 font-serif">
        <div class="flex flex-col md:flex-row items-center max-w-6xl px-6 py-8 mx-auto">
          <div class="w-full md:w-1/2 py-8">
            <h1 class="text-purple-900 text-7xl font-semibold leading-none tracking-tighter">
              Hi, I'm <br/><span class="text-fuchsia-600">Maricris. <br/></span> I write code.
            </h1>
          </div>
          <div class="w-full md:w-1/2 py-8">
            <img src={profilePic} class="rounded-2xl" />
          </div>
        </div>
      </section>
    )
}