import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div
              className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center
             justify-center animate-bounce"
            >
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
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
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold">Welcome to ChatterBox!</h2>
        <p className="text-base-content/60">
          Select a conversation from the sidebar to start chatting
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
