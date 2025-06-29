import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                  <defs>
                    <linearGradient id="bubbleGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#764ba2', stopOpacity: 1 }} />
                    </linearGradient>
                    <linearGradient id="bubbleGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#f093fb', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#f5576c', stopOpacity: 1 }} />
                    </linearGradient>
                    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="rgba(0,0,0,0.3)" />
                    </filter>
                  </defs>
                  <circle cx="50" cy="50" r="48" fill="url(#bubbleGradient1)" filter="url(#shadow)" />
                  <path d="M25 25 Q25 20 30 20 L65 20 Q70 20 70 25 L70 45 Q70 50 65 50 L35 50 L25 60 Z" fill="white" opacity="0.95" />
                  <path d="M30 35 Q30 30 35 30 L70 30 Q75 30 75 35 L75 55 Q75 60 70 60 L40 60 L30 70 Z" fill="url(#bubbleGradient2)" opacity="0.9" />
                  <circle cx="35" cy="35" r="2.5" fill="#667eea" opacity="0.7" />
                  <circle cx="45" cy="35" r="2.5" fill="#667eea" opacity="0.7" />
                  <circle cx="55" cy="35" r="2.5" fill="#667eea" opacity="0.7" />
                  <circle cx="45" cy="45" r="2" fill="white" opacity="0.9" />
                  <circle cx="53" cy="45" r="2" fill="white" opacity="0.9" />
                  <circle cx="61" cy="45" r="2" fill="white" opacity="0.9" />
                </svg>
              </div>
              <h1 className="text-lg font-bold">ChatterBox</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={"/settings"}
              className={`
              btn btn-sm gap-2 transition-colors
              
              `}
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser && (
              <>
                <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button className="flex gap-2 items-center" onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
