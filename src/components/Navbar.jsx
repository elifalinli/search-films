import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useAuth } from "../hooks/AuthContext";
import SignOut from "./SignOut";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white-75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <div className="flex items-center space-x-2">
            <h3>Film Search</h3>
          </div>
          {user ? <SignOut /> : null}
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
