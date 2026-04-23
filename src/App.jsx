
import photo from "./assets/WhatsApp Image 2026-04-20 at 10.17.04 PM.jpeg"

function App() {
  return (
    <div class="h-screen flex items-center justify-center bg-[#494744]">

      
      <div class="w-full h-full flex px-5 py-5 bg-[#494744] gap-8">

        
        <div class="w-1/2 relative">
          <img src={photo} class="w-full h-full object-cover rounded-3xl" />

          <button class="absolute top-4 right-6 text-white bg-black px-4 py-2 rounded-2xl hover:bg-white/20 transition">
            Back to website
          </button>

          <div class="absolute bottom-5 left-5 text-white">
            <h2 class="text-2xl font-semibold">
              Capturing Moments,<br />Creating Memories
            </h2>
            
          </div>
        </div>

        <div class="w-1/2 flex flex-col justify-center px-40 pb-40 pt-80 -translate-y-50 text-white">
          <h1 class="text-5xl font-bold">
            Create an account
          </h1>
          <p class="text-sm mb-6 px-2 py-2 text-white">
            Already have an account? <span className="underline cursor-pointer">Log in</span>
          </p>
          <div className="space-y-4">

            <div className="flex gap-3">
              <input className="w-1/2 p-3 rounded bg-[#201f1c]" placeholder="First name" />
              <input className="w-1/2 p-3 rounded bg-[#201f1c]" placeholder="Last name" />
            </div>
             <input className="w-full p-3 rounded bg-[#201f1c]" placeholder="Email" />

            <input className="w-full p-3 rounded bg-[#201f1c]" placeholder="Password" type="password" />
             <div className="flex items-center gap-2 text-sm">
              <input type="checkbox" />
              <span>I agree to Terms & Conditions</span>
            </div>
             
            <button className="w-full bg-[#201f1c] py-3 rounded-lg mt-2 hover:bg-[#31302f]">
              Create account
            </button>
            </div>

        </div>

      </div>

    </div>
  )
}

export default App