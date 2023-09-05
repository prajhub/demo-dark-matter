export default function ContactForm() {
    return (
        <section className="max-w-[1200px] mx-auto md:py-20">
        <div className="border bg-white border-gray-300 p-6 rounded-lg">
            
  <form className="">
    <div className="mb-6">
    <p className="text-black text-center font-bold md:text-5xl text-3xl">Contact Form</p>
      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
      <input type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Name" required/>
    </div>
    <div className="mb-6">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
      <input type="email"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Email" required/>
    </div>
    <div className="flex items-start mb-6">
      
    </div>
    <textarea id="textarea" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Type your message..." required></textarea>
  </form>
 
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-4 ">Submit</button>
</div>
</section>

    )
}