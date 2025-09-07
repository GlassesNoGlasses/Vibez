
import { NavLink } from "react-router";
import LoginButton from "~/components/buttons/LoginButton";
import SignupButton from "~/components/buttons/SignupButton";


export default function Navbar() {
    return (
        <div id="navbar" className="flex w-screen min-h-1/5 justify-evenly items-center border-b-2 border-gray-300">
            <div id="left-nav" className="flex flex-1 align-middle justify-start">
                <NavLink to="/" style={({ isActive }) => isActive ? { fontWeight: "bold" } : undefined}>
                    <h1 className="text-3xl font-bold p-4">Vibez</h1>
                </NavLink>
            </div>
            <div id="center-nav" className="flex flex-1 align-middle justify-center gap-8">
                <NavLink to="/events" style={({ isActive }) => isActive ? { fontWeight: "bold" } : undefined}>Events</NavLink>
                <NavLink to="/music" style={({ isActive }) => isActive ? { fontWeight: "bold" } : undefined}>Music</NavLink>
            </div>
            <div id="right-nav" className="flex flex-1 justify-end items-center gap-4 pr-4">
                <NavLink to="/contact" style={({ isActive }) => isActive ? { fontWeight: "bold" } : undefined}>
                    <span>Contact</span>
                </NavLink>
                <NavLink to="/signup" style={({ isActive }) => isActive ? { fontWeight: "bold" } : undefined}>
                    <SignupButton />
                </NavLink>
                <NavLink to="/login" style={({ isActive }) => isActive ? { fontWeight: "bold" } : undefined}>
                    <LoginButton />
                </NavLink>
            </div>
    </div>
    )
}

