import { IconSvgProps } from "./SVGProps";

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
      >
<path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke="#292929" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor"/>

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
    size = 30,
    width,
    height,
    ...props
  }) => {
    return (
      <svg
        height={size || height}
        viewBox="-1 0 19 19"
        width={size || width}
        {...props}
      ><path d="M16.417 9.583A7.917 7.917 0 1 1 8.5 1.666a7.917 7.917 0 0 1 7.917 7.917zm-3.49-3.99a.396.396 0 0 0-.396-.396H9.088a.396.396 0 0 0 0 .791h2.488L9.952 7.612a1.178 1.178 0 0 0-.562-.142H5.146a1.189 1.189 0 0 0-1.188 1.187v4.244a1.189 1.189 0 0 0 1.188 1.187H9.39a1.189 1.189 0 0 0 1.187-1.187V8.657a1.18 1.18 0 0 0-.092-.459l1.65-1.65v2.488a.396.396 0 0 0 .792 0zm-5.302 5.466 2.16-2.161V12.9a.396.396 0 0 1-.395.396H5.146a.396.396 0 0 1-.396-.396V8.657a.396.396 0 0 1 .396-.396h4.157L7.065 10.5a.396.396 0 1 0 .56.56z" fill="currentColor"/></svg>
    );
  };