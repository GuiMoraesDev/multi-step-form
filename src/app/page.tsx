export default function Page() {
  return (
    <main className="flex items-center justify-center h-screen bg-alabaster px-44 py-48 font-sans">
      <section className="flex items-center justify-center bg-magnolia h-full w-full shadow-xl py-12 px-24 max-w-[80%]">
        <form className="flex p-6 bg-white h-full w-full rounded-lg shadow-sm">
          <nav
            className="flex flex-col bg-bottom bg-cover p-6 rounded-md w-1/5"
            style={{
              backgroundImage: "url('/assets/images/desktop-background.png')",
            }}
          >
            <ul className="flex flex-col gap-4">
              <li className="flex gap-2 text-white text-sm uppercase">
                <span className="flex items-center justify-center text-center h-10 w-10 rounded-full border-2 border-magnolia">
                  1
                </span>

                <section className="flex flex-col">
                  <p>Step 1</p>
                  <strong>Your info</strong>
                </section>
              </li>
            </ul>
          </nav>

          <section className="flex flex-col justify-between py-6 gap-4 mx-auto w-[60%]">
            <div className="flex flex-col gap-2">
              <h1 className="text-marine-blue text-3xl font-bold">
                Personal info
              </h1>
              <small className="text-cool-gray">
                Please provide your name, email address, and phone number.
              </small>
            </div>

            <div className="flex flex-col gap-3 text-sm">
              <label className="flex flex-col text-marine-blue font-semi gap-1">
                Name
                <input
                  className="p-3 rounded-md shadow-md border"
                  placeholder="e.g. Stephen King"
                />
              </label>

              <label className="flex flex-col text-marine-blue font-semi gap-1">
                Email Address
                <input
                  className="p-3 rounded-md shadow-md border"
                  placeholder="e.g. stephenking@lorem.com"
                />
              </label>

              <label className="flex flex-col text-marine-blue font-semi gap-1">
                Phone Number
                <input
                  className="p-3 rounded-md shadow-md border"
                  placeholder="e.g. +1 234 567 890"
                />
              </label>
            </div>

            <button
              type="button"
              className="ml-auto border rounded-lg shadow-md px-6 py-4 bg-marine-blue text-white text-bold font-sans"
            >
              Next Step
            </button>
          </section>
        </form>
      </section>
    </main>
  );
}
