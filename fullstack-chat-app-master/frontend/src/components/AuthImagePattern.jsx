const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        {/* Animated SVG: Floating Chat Bubbles */}
        <div className="mb-8 flex justify-center">
          <svg width="220" height="140" viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <ellipse cx="60" cy="60" rx="40" ry="28" fill="url(#bubble1)" opacity="0.9">
                <animate attributeName="cy" values="60;50;60" dur="2.5s" repeatCount="indefinite" />
              </ellipse>
              <ellipse cx="150" cy="90" rx="30" ry="20" fill="url(#bubble2)" opacity="0.8">
                <animate attributeName="cy" values="90;105;90" dur="3s" repeatCount="indefinite" />
              </ellipse>
              <ellipse cx="110" cy="40" rx="18" ry="12" fill="url(#bubble3)" opacity="0.7">
                <animate attributeName="cy" values="40;30;40" dur="2s" repeatCount="indefinite" />
              </ellipse>
              {/* Chat dots in main bubble */}
              <circle cx="50" cy="60" r="3" fill="#fff" opacity="0.7">
                <animate attributeName="cy" values="60;55;60" dur="1.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="60" cy="60" r="3" fill="#fff" opacity="0.7">
                <animate attributeName="cy" values="60;65;60" dur="1.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="70" cy="60" r="3" fill="#fff" opacity="0.7">
                <animate attributeName="cy" values="60;55;60" dur="1.5s" repeatCount="indefinite" />
              </circle>
            </g>
            <defs>
              <linearGradient id="bubble1" x1="20" y1="32" x2="100" y2="88" gradientUnits="userSpaceOnUse">
                <stop stopColor="#667eea" />
                <stop offset="1" stopColor="#764ba2" />
              </linearGradient>
              <linearGradient id="bubble2" x1="120" y1="70" x2="180" y2="110" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f093fb" />
                <stop offset="1" stopColor="#f5576c" />
              </linearGradient>
              <linearGradient id="bubble3" x1="92" y1="28" x2="128" y2="52" gradientUnits="userSpaceOnUse">
                <stop stopColor="#43e97b" />
                <stop offset="1" stopColor="#38f9d7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
