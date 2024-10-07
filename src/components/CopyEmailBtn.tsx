import React, { useState } from 'react';
import { EmailIcon } from '../globals/SocialIcons';



const CopyEmailBtn: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const email = "mgravitee@gmail.com"

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 5000); // Reset after 2 seconds
    });
  };

  return (
    <button onClick={handleCopy}>
      {copied ? 'Email Copied' : <EmailIcon size={40}/>}
    </button>
  );
};

export default CopyEmailBtn;