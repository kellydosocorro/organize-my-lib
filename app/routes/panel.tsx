import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";

import { requireUserId } from "~/session.server";
import { useUser } from "~/utils";
import { getNoteListItems } from "~/models/note.server";

export async function loader({ request }: LoaderArgs) {
  const userId = await requireUserId(request);
  const noteListItems = await getNoteListItems({ userId });
  return json({ noteListItems });
}

export default function NotesPage() {
  const data = useLoaderData<typeof loader>();
  // const user = useUser();

  return (
    <div className="flex h-full min-h-screen flex-col">
      {/* <header className="flex items-center justify-between bg-white-500 p-3 text-grey">
        <h1 className="text-3xl font-bold text-slate-700">
          <Link to=".">Organize my lib<span className="text-cyan-300">!</span></Link>
        </h1>
        <p>{user.email}</p>
        <Form action="/logout" method="post">
          <button
            type="submit"
            className="rounded-none bg-slate-200 py-2 px-4 text-cyan-500 hover:bg-cyan-300 hover:text-white active:bg-blue-600"
          >
            Logout
          </button>
        </Form>
      </header> */}

      <div className="navbar bg-base-100 sticky top-0 z-50 border-b border-b-4 border-cyan-300">
        <div className="navbar-start">
          <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden">
            <span className="material-icons">sort</span>
          </label>
          <Link to="." className="btn btn-ghost normal-case text-2xl">
            Organize my lib<span className="text-cyan-300">!</span>
          </Link>
        </div>
        <div className="navbar-center visible md:invisible">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered" />
          </div>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost fill-primary">
            <span className="material-icons">add_box</span>
          </button>
          <button className="btn btn-ghost btn-circle">
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
      </div>

      <main className="flex h-full bg-white">
        {/* <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        
        </div> */}
        {/*<div className="h-full w-80 border-r">
          <Link to="new" className="block p-4 text-xl bg-cyan-300 rounded-none text-white">
            <span class="material-icons">pie_chart</span>
          </Link>

          <hr />

          <h3 className="pt-4 px-2 text-cyan-500 font-bold">Bookmarks</h3>

          {data.noteListItems.length === 0 ? (
            <p className="p-4">No notes yet</p>
          ) : (
            <ol>
              {data.noteListItems.map((note) => (
                <li key={note.id}>
                  <NavLink
                    className={({ isActive }) =>
                      `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`
                    }
                    to={note.id}
                  >
                    📝 {note.title}
                  </NavLink>
                </li>
              ))}
            </ol>
          )}
        </div> */}

        {/* <div className="flex-1 p-6">
          <Outlet />
        </div> */}

        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            Oi
          </div> 
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
              <li><a>Sidebar Item 1</a></li>
              <li><a>Sidebar Item 2</a></li>
            </ul>
          
          </div>
        </div>
      </main>
    </div>
  );
}
