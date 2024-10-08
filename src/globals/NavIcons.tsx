import { IconSvgProps } from "./SVGProps";


export const Logo: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 512 512"
      width={size || width}
      {...props}
    >
     <path d="M422.8,229.81c-13.33,0-26.66.26-39.97-.21-2.68-.1-6-2.35-7.78-4.59-32.63-41.01-74.88-60.89-127.38-59.2-66.03,2.12-127.37,55.75-138.09,121.06-14.16,86.17,39.73,162.4,126.33,174.9,81.79,11.8,152.7-44.63,166.6-121.44.1-.57.59-2.88.53-3.41-43.63,0-88.07,0-132.15,0-.55,0-.82-.29-.81-.9v-37.69c0-.45.23-.69.68-.69h171.51c1.39,0,1.63.54,1.69,1.6,2.33,29.81-1.89,58.32-13.02,85.72-31.67,77.99-109.66,125.26-193.34,117.46-85.78-8.01-156.3-75.29-168.26-160.51-14.45-103,53.42-196.12,155.87-213.86,6.74-1.16,12.14-.5,17.84,4.93,10.92,10.42,12.74,9.42,23.87-1.05,2.97-2.8,8.5-4.71,12.55-4.25,47.85,5.47,87.47,27.13,118.94,63.25,9.82,11.26,17.71,23.12,25.18,36.53,1.08,1.86.95,2.38-.79,2.35Z" fill="currentColor"/>
  <path d="M150.99,11.32c52.74,2.65,88.07,38.27,79.32,82.34-6.52-25.65-20.8-41.72-42.89-50.81,15.14,15.54,25.13,33.65,29.63,55.7-17.22,1.75-30.89-4.36-41.94-16.19-18.43-19.75-24.05-44.02-24.12-71.03Z" fill="currentColor"/>
  <path d="M283.09,97.83c2.37-9.67,30.49-29.07,49.78-33.25,0,0-28.26-1.22-54.58,23.95,0-31.62,40.14-42.56,74.44-28.24-9.61,31.51-43.01,55.61-69.64,37.53Z" fill="currentColor"/>
  <path d="M254.73,128.77c-7.44-40.97-.1-79.26,18.49-115.62,2.73-5.33,10.06-5.79,16.46-1.54,6.13,4.06,8.85,11.77,5.04,15.93-25.59,27.95-35.78,61.96-39.32,98.66-.31,1.37-.45,1.72-.68,2.57Z"
        fill="currentColor"
      />
    </svg>
  );
};



export const HamburgerMenuO: React.FC<IconSvgProps> = ({
    size = 30,
    width,
    height,
    ...props
  }) => {
    return (
      <svg
        height={size || height}
        viewBox="0 0 24 24"
        width={size || width}
        {...props}
        clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2"
      >
<path d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z" fillRule="nonzero"fill="currentColor"/>

</svg>
    );
  };

  export const HamburgerMenuC: React.FC<IconSvgProps> = ({
    size = 30,
    width,
    height,
    ...props
  }) => {
    return (
      <svg
        height={size || height}
        viewBox="0 0 24 24"
        width={size || width}
        {...props}
      >
<path fillRule="evenodd" clipRule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="currentColor"/></svg>
    );
  };

  export const MoonFilledIcon = ({
    size = 24,
    width,
    height,
    ...props
  }: IconSvgProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
        fill="currentColor"
      />
    </svg>
  );
  
  export const SunFilledIcon = ({
    size = 24,
    width,
    height,
    ...props
  }: IconSvgProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <g fill="currentColor">
        <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
        <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
      </g>
    </svg>
  );
  
  export const ExLinkIC: React.FC<IconSvgProps> = ({
    size = 24,
    width,
    height,
    ...props
  }) => {
    return (
      <svg
        height={size || height}
        viewBox="0 0 24 24"
        width={size || width}
        {...props}
      ><path d="m12.012 1.995c-5.518 0-9.998 4.48-9.998 9.998s4.48 9.998 9.998 9.998 9.997-4.48 9.997-9.998-4.479-9.998-9.997-9.998zm0 1.5c4.69 0 8.497 3.808 8.497 8.498s-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498 3.808-8.498 8.498-8.498zm1.528 4.715s1.502 1.505 3.255 3.259c.146.147.219.339.219.531s-.073.383-.219.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.336.217-.527.217-.191-.001-.383-.074-.53-.221-.293-.293-.295-.766-.004-1.057l1.978-1.977h-6.694c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.694l-1.979-1.979c-.289-.289-.286-.762.006-1.054.147-.147.339-.221.531-.222.19 0 .38.071.524.215z" fillRule="nonzero" fill="currentColor"/></svg>
    );
  };