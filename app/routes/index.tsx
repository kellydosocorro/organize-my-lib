import { Link, Form } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import { useUser } from "~/utils";
import { getUserId } from "~/session.server";
import { redirect } from "@remix-run/node";

export async function loader({ request }: LoaderArgs) {
  const userId = await getUserId(request);
  if (!userId) {
    throw redirect("/login");
  }
  return userId;
}

export default function Index() {
  const user = useUser();
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
  }
}
