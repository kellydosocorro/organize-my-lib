import { Link, Form } from "@remix-run/react";

import { redirect } from "@remix-run/node";

import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  if (user) {
    return (
      <div className="flex h-full min-h-screen flex-col">
        <nav className="navbar bg-base-100 sticky top-0 z-50 border-b border-b-4 border-cyan-300">
          <div className="navbar-start">
            <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden">
              <span className="material-icons">sort</span>
            </label>
            <Link to="." className="btn btn-ghost normal-case text-2xl">
              Organize my lib<span className="text-cyan-300">!</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:block">
            <div className="form-control">
              <input type="text" placeholder="Search" className="input input-bordered" />
            </div>
          </div>
          <div className="navbar-end">
            <button className="btn btn-ghost fill-primary hidden md:block">
              <span className="material-icons">add_box</span>
            </button>
            <button className="btn btn-ghost btn-circle hidden md:block">
              <span className="material-icons">bookmark</span>
            </button>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li>
                  <Form action="/logout" method="post">
                    <button type="submit">
                      Logout
                    </button>
                  </Form>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main className="flex h-full bg-white overflow-y-auto">
          <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
              Oi
            </div>
            <div className="drawer-side h-full overflow-hidden">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
              <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    )
  } else {
    redirect('/login')
  }
  /* return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Organize my Lib!
            </h1>
            <p className="mb-5">A free option to save your readings.</p>

            <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
              {user ? (
                <Link
                  to="/panel"
                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-blue-700 shadow-sm hover:bg-blue-50 sm:px-8"
                >
                  View Notes for {user.email}
                </Link>
              ) : (
                <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                  <Link
                    to="/join"
                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-blue-700 shadow-sm hover:bg-blue-50 sm:px-8"
                  >
                    Sign up
                  </Link>
                  <Link
                    to="/login"
                    className="flex items-center justify-center rounded-md bg-blue-500 px-4 py-3 font-medium text-white hover:bg-blue-400"
                  >
                    Log In
                  </Link>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </main>

  ); */
}
