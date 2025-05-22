import React from 'react'

const Copyright: React.FC = () => {
  return (
    <div className="opacity-80 text-xs text-center mt-8">
      <div className="ac-text flex justify-center items-center m-2">
        © 云游君
      </div>
      <div className="ac-text flex justify-center items-center m-2">
        博客： 
        <a
          href="https://blog.zrf.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline ml-1 text-blue-500"
        >
          周润发
        </a>
      </div>
    </div>
  )
}

export default Copyright
