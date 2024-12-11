import React from 'react';

const Star = ({ className }) => {
  return (
    <svg
      width='28'
      height='28'
      viewBox='0 0 28 28'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M14.3438 18.8985L18.2812 21.3985C18.789 21.7188 19.414 21.2422 19.2657 20.6563L18.125 16.1719C18.0942 16.0476 18.099 15.9171 18.1392 15.7955C18.1792 15.6739 18.2529 15.566 18.3516 15.4844L21.8828 12.5391C22.3437 12.1563 22.1094 11.3829 21.5078 11.3438L16.8984 11.0469C16.7727 11.0396 16.6517 10.9958 16.5505 10.9209C16.4492 10.8459 16.3719 10.7431 16.3281 10.625L14.6094 6.29691C14.5639 6.17182 14.481 6.06379 14.372 5.98742C14.263 5.91109 14.1331 5.87012 14 5.87012C13.8669 5.87012 13.737 5.91109 13.628 5.98742C13.519 6.06379 13.4361 6.17182 13.3906 6.29691L11.6719 10.625C11.6281 10.7431 11.5508 10.8459 11.4495 10.9209C11.3483 10.9958 11.2273 11.0396 11.1016 11.0469L6.49222 11.3438C5.89064 11.3829 5.65627 12.1563 6.11716 12.5391L9.64842 15.4844C9.74715 15.566 9.82077 15.6739 9.86082 15.7955C9.90096 15.9171 9.90584 16.0476 9.87502 16.1719L8.82033 20.3282C8.64066 21.0313 9.39062 21.6016 9.9922 21.2188L13.6562 18.8985C13.759 18.8331 13.8782 18.7984 14 18.7984C14.1218 18.7984 14.241 18.8331 14.3438 18.8985Z'
        // fill='black'
        fillOpacity='0.1'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.0084 19.4259C14.0084 19.4259 14.0045 19.4234 14 19.4234C14 19.4234 13.9954 19.4234 13.9916 19.4259L10.3266 21.7468C10.3266 21.7468 9.93669 21.9949 9.48649 21.9635C9.48649 21.9635 9.0722 21.9345 8.73505 21.6782C8.73505 21.6782 8.40211 21.4252 8.25722 21.0357C8.25722 21.0357 8.10144 20.6169 8.21477 20.1734L9.26919 16.0182C9.26919 16.0182 9.27218 16.0061 9.26725 15.9911C9.26725 15.9911 9.26231 15.9761 9.25016 15.9661L5.71686 13.019C5.71686 13.019 5.39721 12.7536 5.29234 12.3555C5.29234 12.3555 5.19651 11.9918 5.30919 11.6277C5.30919 11.6277 5.42313 11.2596 5.71153 11.0158C5.71153 11.0158 6.02898 10.7475 6.45168 10.7201L11.0614 10.4232C11.0614 10.4232 11.0722 10.4225 11.0778 10.4184C11.0778 10.4184 11.0834 10.4142 11.0859 10.4077L11.091 10.3943L12.8069 6.07343C12.8069 6.07343 12.9448 5.70285 13.2695 5.47549C13.2695 5.47549 13.5984 5.24512 14 5.24512C14 5.24512 14.4016 5.24512 14.7305 5.47549C14.7305 5.47549 15.0552 5.70285 15.1931 6.07343L16.909 10.3943L16.9141 10.4077C16.9141 10.4077 16.9165 10.4142 16.9222 10.4184C16.9222 10.4184 16.9278 10.4225 16.9347 10.4229L21.548 10.7201C21.548 10.7201 21.971 10.7475 22.2885 11.0158C22.2885 11.0158 22.5769 11.2596 22.6908 11.6277C22.6908 11.6277 22.8035 11.9918 22.7076 12.3555C22.7076 12.3555 22.6028 12.7536 22.2821 13.0199L18.7519 15.9644C18.7519 15.9644 18.7377 15.9761 18.7327 15.9911C18.7327 15.9911 18.7278 16.0061 18.7316 16.0214L19.8713 20.5022C19.8713 20.5022 19.9731 20.904 19.8312 21.2834C19.8312 21.2834 19.6992 21.6365 19.3968 21.8655C19.3968 21.8655 19.0903 22.0976 18.7131 22.1235C18.7131 22.1235 18.3039 22.1517 17.9478 21.9271L14.0092 19.4264L14.0087 19.4261L14.0084 19.4259ZM18.6147 20.8698L14.6792 18.3711L14.6787 18.3708C14.6787 18.3708 14.3681 18.1734 14 18.1734C14 18.1734 13.6317 18.1734 13.3209 18.3711L9.6578 20.6907C9.6578 20.6907 9.57273 20.7449 9.4915 20.6831C9.4915 20.6831 9.39368 20.6088 9.42584 20.4829L10.4808 16.3256C10.4808 16.3256 10.5722 15.9572 10.4544 15.5999C10.4544 15.5999 10.3367 15.2425 10.0467 15.0027L6.5175 12.0591C6.5175 12.0591 6.49099 12.0371 6.5033 11.9973C6.5033 11.9973 6.51213 11.9688 6.53268 11.9675L11.1417 11.6706C11.1417 11.6706 11.5164 11.6488 11.8212 11.4233C11.8212 11.4233 12.1227 11.2003 12.255 10.8501L13.9715 6.52757L13.978 6.51054C13.978 6.51054 13.9805 6.5036 13.9865 6.49936C13.9865 6.49936 13.9926 6.49512 14 6.49512C14 6.49512 14.0074 6.49512 14.0134 6.49936C14.0134 6.49936 14.0195 6.5036 14.022 6.51054L14.0285 6.52757L15.745 10.8501C15.745 10.8501 15.8773 11.2003 16.1788 11.4233C16.1788 11.4233 16.4836 11.6488 16.8621 11.6708L21.4676 11.9675C21.4676 11.9675 21.4879 11.9688 21.4967 11.9973C21.4967 11.9973 21.509 12.0371 21.4835 12.0583L17.9512 15.0044C17.9512 15.0044 17.6633 15.2425 17.5455 15.5999C17.5455 15.5999 17.4278 15.9572 17.5184 16.3224L18.6599 20.8103C18.6599 20.8103 18.6695 20.8483 18.6422 20.869C18.6422 20.869 18.6291 20.8789 18.6147 20.8698Z'
        // fill='#1C1C1C'
      />
    </svg>
  );
};

export { Star };
