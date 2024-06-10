import { config } from 'common/config';
import type { CSSProperties } from 'react';

import { PeersystLogoRoot } from './PeersystLogo.styles';

export type PeersystLogoProps = {
  className?: string;
  style?: CSSProperties;
};

const PeersystLogo = (props: PeersystLogoProps): JSX.Element => (
  <PeersystLogoRoot href={config.peersystUrl} target="_blank" rel="noreferrer" {...props}>
    <svg width="86" height="18" viewBox="0 0 86 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.32"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.28232 16.4714C12.7185 16.4714 16.3146 12.8575 16.3146 8.39945C16.3146 3.94141 12.7185 0.327454 8.28232 0.327454C3.84619 0.327454 0.25 3.94141 0.25 8.39945C0.25 10.3339 0.927132 12.1094 2.0562 13.4997V8.32719L2.05628 8.32084C2.07052 7.1836 2.34494 6.13071 2.89349 5.18718L2.89375 5.18673C3.43629 4.25462 4.17733 3.51049 5.10919 2.97154C6.05244 2.42607 7.10287 2.16175 8.23565 2.16175C9.39123 2.16175 10.4576 2.42901 11.4095 2.98262C12.3454 3.52701 13.0925 4.27605 13.6349 5.21783L13.6353 5.21841C14.1858 6.17581 14.4518 7.24722 14.4518 8.40862C14.4518 9.55507 14.1932 10.6164 13.6591 11.5694C13.1335 12.5073 12.4101 13.2601 11.4971 13.8085C10.5685 14.3682 9.52781 14.637 8.40332 14.637C7.42156 14.637 6.50326 14.426 5.66885 13.9872L5.66854 13.987L5.66823 13.9868C5.61282 13.9577 5.55806 13.9279 5.50397 13.8974V15.9755C6.36977 16.2963 7.30569 16.4714 8.28232 16.4714ZM4.49912 15.5218V11.6753C4.77422 12.0686 5.10906 12.4102 5.50397 12.7C5.69934 12.8434 5.90942 12.9741 6.13423 13.0922C6.4269 13.2461 6.73415 13.3669 7.056 13.4544C7.4798 13.5696 7.9289 13.6272 8.40332 13.6272C9.36283 13.6272 10.222 13.3997 10.9808 12.9422C11.4098 12.6846 11.7882 12.3737 12.1158 12.0099C12.3686 11.7293 12.5912 11.4172 12.7836 11.0739C13.2254 10.2855 13.4469 9.39748 13.4469 8.40862C13.4469 7.40747 13.2193 6.51328 12.7652 5.72367C12.3112 4.93527 11.6907 4.31293 10.9062 3.85662C10.1216 3.40034 9.23187 3.17157 8.23565 3.17157C7.26387 3.17157 6.3888 3.39663 5.61042 3.84677C4.832 4.29697 4.21641 4.91437 3.76111 5.69659C3.30704 6.47761 3.07328 7.35701 3.06105 8.33355V14.5336C3.50166 14.9127 3.98359 15.2447 4.49912 15.5218ZM6.31167 5.00169C5.73891 5.34607 5.28976 5.8122 4.96665 6.40011C4.6423 6.98802 4.48074 7.65711 4.48074 8.40862C4.48074 9.14656 4.6423 9.81318 4.96665 10.4072C5.28976 11.0025 5.73891 11.4687 6.31167 11.8069C6.88447 12.1439 7.52578 12.3136 8.23565 12.3136C8.95774 12.3136 9.60516 12.1439 10.178 11.8069C10.7507 11.4687 11.2023 11.0025 11.5328 10.4072C11.862 9.81318 12.0272 9.14656 12.0272 8.40862C12.0272 7.65711 11.862 6.98802 11.5328 6.40011C11.2023 5.8122 10.7507 5.34607 10.178 5.00169C9.60516 4.65731 8.95774 4.4851 8.23565 4.4851C7.52578 4.4851 6.88447 4.65731 6.31167 5.00169Z"
        fill="#7F7F87"
      />
      <path
        d="M11.5328 10.4073C11.2023 11.0025 10.7507 11.4687 10.1779 11.8069C9.60515 12.1439 8.95772 12.3136 8.23563 12.3136C7.52577 12.3136 6.88445 12.1439 6.31166 11.8069C5.7389 11.4687 5.28975 11.0025 4.96663 10.4073C4.64228 9.8132 4.48073 9.14658 4.48073 8.40863C4.48073 7.65713 4.64228 6.98804 4.96663 6.40012C5.28975 5.81221 5.7389 5.34608 6.31166 5.0017C6.88445 4.65732 7.52577 4.48512 8.23563 4.48512C8.95772 4.48512 9.60515 4.65732 10.1779 5.0017C10.7507 5.34608 11.2023 5.81221 11.5328 6.40012C11.862 6.98804 12.0272 7.65713 12.0272 8.40863C12.0272 9.14658 11.862 9.8132 11.5328 10.4073ZM12.7652 5.72369C12.3112 4.93528 11.6906 4.31294 10.9061 3.85663C10.1216 3.40036 9.23186 3.17158 8.23563 3.17158C7.26386 3.17158 6.38878 3.39665 5.6104 3.84678C4.83199 4.29698 4.21639 4.91438 3.7611 5.6966C3.30703 6.47763 3.07326 7.35703 3.06104 8.33356V14.5694C3.50165 14.9445 3.98386 15.2704 4.4991 15.5435V11.6753C4.91031 12.2632 5.45496 12.7355 6.13422 13.0922C6.81225 13.4489 7.5686 13.6272 8.4033 13.6272C9.36281 13.6272 10.222 13.3997 10.9808 12.9422C11.7408 12.4859 12.3418 11.8623 12.7836 11.0739C13.2254 10.2855 13.4469 9.39749 13.4469 8.40863C13.4469 7.40748 13.2193 6.51329 12.7652 5.72369Z"
        fill="#7F7F87"
      />
      <path
        d="M23.715 13.6274C22.7063 13.6274 21.8127 13.4054 21.0346 12.961C20.2561 12.5169 19.6458 11.9002 19.2039 11.1117C18.7617 10.3233 18.5408 9.42244 18.5408 8.40862C18.5408 7.38269 18.7491 6.47822 19.1665 5.6961C19.5837 4.91402 20.1595 4.29761 20.8944 3.84688C21.6291 3.39646 22.4758 3.17111 23.4349 3.17111C24.3812 3.17111 25.2063 3.38707 25.91 3.81873C26.6135 4.25065 27.1583 4.84827 27.5445 5.6116C27.9304 6.37522 28.1236 7.24487 28.1236 8.22084C28.1236 8.42133 28.0612 8.58097 27.9368 8.69972C27.8122 8.81875 27.6502 8.87786 27.4511 8.87786H19.5121V7.6765H27.6006L26.7973 8.25841C26.8096 7.5329 26.6787 6.88199 26.405 6.30615C26.1309 5.73063 25.7419 5.28022 25.2375 4.95459C24.7332 4.62928 24.1322 4.4666 23.4349 4.4666C22.725 4.4666 22.1022 4.63535 21.5669 4.97337C21.0314 5.31115 20.6171 5.7776 20.3247 6.3719C20.0319 6.96649 19.8857 7.64557 19.8857 8.40862C19.8857 9.17224 20.0506 9.84804 20.3808 10.436C20.7106 11.0245 21.1621 11.4873 21.735 11.8251C22.3078 12.1631 22.9678 12.3321 23.715 12.3321C24.1634 12.3321 24.6147 12.254 25.0695 12.0974C25.5238 11.9411 25.8881 11.7439 26.1622 11.5061C26.2991 11.3935 26.4546 11.3341 26.6291 11.3277C26.8034 11.3217 26.9529 11.3686 27.0775 11.4686C27.2392 11.6188 27.3233 11.7815 27.3297 11.9566C27.3358 12.1319 27.2642 12.2822 27.1149 12.4073C26.7039 12.7577 26.1809 13.0485 25.5457 13.28C24.9106 13.5117 24.3002 13.6274 23.715 13.6274Z"
        fill="#7F7F87"
      />
      <path
        d="M34.8112 13.6274C33.8025 13.6274 32.9089 13.4054 32.1307 12.961C31.3523 12.5169 30.742 11.9002 30.3001 11.1117C29.8579 10.3233 29.637 9.42244 29.637 8.40862C29.637 7.38269 29.8453 6.47822 30.2627 5.6961C30.6799 4.91402 31.2557 4.29761 31.9906 3.84688C32.7253 3.39646 33.572 3.17111 34.5311 3.17111C35.4774 3.17111 36.3025 3.38707 37.0062 3.81873C37.7097 4.25065 38.2545 4.84827 38.6407 5.6116C39.0266 6.37522 39.2198 7.24487 39.2198 8.22084C39.2198 8.42133 39.1574 8.58097 39.033 8.69972C38.9084 8.81875 38.7464 8.87786 38.5473 8.87786H30.6083V7.6765H38.6968L37.8935 8.25841C37.9058 7.5329 37.7749 6.88199 37.5012 6.30615C37.2271 5.73063 36.8381 5.28022 36.3337 4.95459C35.8294 4.62928 35.2284 4.4666 34.5311 4.4666C33.8212 4.4666 33.1984 4.63535 32.6631 4.97337C32.1276 5.31115 31.7133 5.7776 31.4209 6.3719C31.1281 6.96649 30.9819 7.64557 30.9819 8.40862C30.9819 9.17224 31.1468 9.84804 31.477 10.436C31.8068 11.0245 32.2583 11.4873 32.8312 11.8251C33.404 12.1631 34.064 12.3321 34.8112 12.3321C35.2596 12.3321 35.7108 12.254 36.1656 12.0974C36.62 11.9411 36.9843 11.7439 37.2584 11.5061C37.3953 11.3935 37.5508 11.3341 37.7253 11.3277C37.8996 11.3217 38.0491 11.3686 38.1737 11.4686C38.3354 11.6188 38.4195 11.7815 38.4258 11.9566C38.432 12.1319 38.3604 12.2822 38.2111 12.4073C37.8001 12.7577 37.2771 13.0485 36.6419 13.28C36.0068 13.5117 35.3964 13.6274 34.8112 13.6274Z"
        fill="#7F7F87"
      />
      <path
        d="M42.2458 7.20726C42.2832 6.4315 42.4854 5.73695 42.8529 5.12357C43.22 4.51049 43.6995 4.02857 44.2912 3.67812C44.8826 3.32792 45.5395 3.15228 46.2619 3.15228C46.8346 3.15228 47.2768 3.23403 47.5882 3.39642C47.8993 3.55937 48.0179 3.79715 47.9432 4.10975C47.8933 4.29757 47.8092 4.42267 47.6909 4.48534C47.5725 4.54802 47.4294 4.57288 47.2614 4.5602C47.0932 4.54802 46.9031 4.53534 46.6916 4.52263C45.994 4.4602 45.3747 4.53202 44.8329 4.73859C44.2912 4.94515 43.8616 5.26139 43.544 5.68666C43.2265 6.11226 43.0676 6.61903 43.0676 7.20726H42.2458ZM42.3578 13.5334C42.1337 13.5334 41.9592 13.471 41.8348 13.3456C41.7102 13.2208 41.6479 13.0455 41.6479 12.8201V3.97829C41.6479 3.75323 41.7102 3.57788 41.8348 3.45277C41.9592 3.32792 42.1337 3.26496 42.3578 3.26496C42.582 3.26496 42.7563 3.32792 42.8809 3.45277C43.0052 3.57788 43.0676 3.75323 43.0676 3.97829V12.8201C43.0676 13.0455 43.0052 13.2208 42.8809 13.3456C42.7563 13.471 42.582 13.5334 42.3578 13.5334Z"
        fill="#7F7F87"
      />
      <path
        d="M53.7711 13.6274C53.0363 13.6274 52.3078 13.5023 51.5856 13.2518C50.8632 13.0016 50.278 12.6263 49.8297 12.1256C49.6925 11.9754 49.6365 11.8063 49.6616 11.6188C49.6863 11.431 49.7798 11.2686 49.9418 11.1305C50.116 11.0057 50.2967 10.9555 50.4836 10.9806C50.6703 11.0057 50.8258 11.0869 50.9505 11.2245C51.2493 11.5749 51.6446 11.8439 52.1367 12.0317C52.6285 12.2195 53.1734 12.3134 53.7711 12.3134C54.6926 12.3134 55.359 12.1537 55.77 11.8345C56.1809 11.5155 56.3926 11.1305 56.405 10.6801C56.405 10.2297 56.1932 9.85743 55.77 9.5633C55.3465 9.26916 54.6492 9.04078 53.6778 8.87786C52.4197 8.6779 51.4983 8.32744 50.9131 7.82675C50.3276 7.32633 50.0352 6.73175 50.0352 6.04327C50.0352 5.40504 50.2033 4.87341 50.5395 4.44782C50.8757 4.02254 51.3241 3.70327 51.8845 3.49035C52.4449 3.27771 53.0613 3.17111 53.7337 3.17111C54.568 3.17111 55.2871 3.31528 55.8913 3.60303C56.4952 3.89109 56.9841 4.27882 57.3577 4.76681C57.482 4.92973 57.532 5.09848 57.5072 5.27358C57.482 5.44921 57.3825 5.59282 57.2083 5.70549C57.0588 5.79306 56.8875 5.82121 56.6946 5.79003C56.5014 5.75881 56.3365 5.66796 56.1996 5.51771C55.8881 5.15483 55.527 4.88888 55.1162 4.71985C54.7052 4.55085 54.2317 4.4666 53.6965 4.4666C53.0114 4.4666 52.4636 4.60717 52.0526 4.88888C51.6416 5.17058 51.4362 5.52407 51.4362 5.94963C51.4362 6.2374 51.5138 6.48761 51.6696 6.70025C51.8252 6.91345 52.0929 7.10098 52.4729 7.26366C52.8527 7.4263 53.385 7.56383 54.0701 7.6765C55.0041 7.82675 55.7419 8.04906 56.2836 8.34291C56.8254 8.63704 57.2112 8.98114 57.4418 9.37548C57.6721 9.76958 57.7873 10.1985 57.7873 10.6613C57.7873 11.2498 57.616 11.766 57.2737 12.2101C56.931 12.6544 56.4578 13.0016 55.8541 13.2518C55.2497 13.5023 54.5557 13.6274 53.7711 13.6274Z"
        fill="#7F7F87"
      />
      <path
        d="M68.6208 4.20237L62.5678 17.5701C62.444 17.8558 62.2639 18 62.0275 18C61.929 18 61.8164 17.9745 61.6926 17.9265C61.2677 17.737 61.1495 17.4372 61.3352 17.0243L63.1925 12.9068L59.0193 4.22218C58.932 4.03553 58.9208 3.86018 58.9827 3.69617C59.0446 3.53498 59.1684 3.41055 59.357 3.32005C59.5427 3.23523 59.7171 3.21825 59.8804 3.27481C60.0408 3.33138 60.1646 3.45299 60.2518 3.6396L63.8932 11.3571L67.3686 3.65941C67.5572 3.25783 67.8554 3.14756 68.2663 3.32005C68.6912 3.4954 68.8094 3.78949 68.6208 4.20237Z"
        fill="#7F7F87"
      />
      <path
        d="M74.0758 13.6274C73.3407 13.6274 72.6121 13.5023 71.8902 13.2518C71.1677 13.0016 70.5826 12.6263 70.1342 12.1256C69.997 11.9754 69.941 11.8063 69.966 11.6188C69.991 11.431 70.0844 11.2686 70.2463 11.1305C70.4205 11.0057 70.6013 10.9555 70.7879 10.9806C70.9748 11.0057 71.1304 11.0869 71.2551 11.2245C71.5539 11.5749 71.949 11.8439 72.4412 12.0317C72.9331 12.2195 73.4781 12.3134 74.0758 12.3134C74.9972 12.3134 75.6634 12.1537 76.0745 11.8345C76.4853 11.5155 76.6969 11.1305 76.7095 10.6801C76.7095 10.2297 76.4977 9.85743 76.0745 9.5633C75.651 9.26916 74.9535 9.04078 73.9823 8.87786C72.7243 8.6779 71.8028 8.32744 71.2177 7.82675C70.6321 7.32633 70.3397 6.73175 70.3397 6.04327C70.3397 5.40504 70.5079 4.87341 70.844 4.44782C71.1804 4.02254 71.6286 3.70327 72.1889 3.49035C72.7495 3.27771 73.3659 3.17111 74.0384 3.17111C74.8725 3.17111 75.5916 3.31528 76.196 3.60303C76.7997 3.89109 77.2886 4.27882 77.6623 4.76681C77.7865 4.92973 77.8365 5.09848 77.8116 5.27358C77.7865 5.44921 77.6871 5.59282 77.5128 5.70549C77.3633 5.79306 77.1921 5.82121 76.9992 5.79003C76.806 5.75881 76.6409 5.66796 76.504 5.51771C76.1926 5.15483 75.8316 4.88888 75.4207 4.71985C75.0096 4.55085 74.5363 4.4666 74.001 4.4666C73.3159 4.4666 72.7682 4.60717 72.3571 4.88888C71.9463 5.17058 71.7407 5.52407 71.7407 5.94963C71.7407 6.2374 71.8182 6.48761 71.9743 6.70025C72.1298 6.91345 72.3975 7.10098 72.7773 7.26366C73.1571 7.4263 73.6897 7.56383 74.3745 7.6765C75.3086 7.82675 76.0464 8.04906 76.5881 8.34291C77.1297 8.63704 77.5159 8.98114 77.7464 9.37548C77.9767 9.76958 78.0918 10.1985 78.0918 10.6613C78.0918 11.2498 77.9207 11.766 77.5782 12.2101C77.2355 12.6544 76.7623 13.0016 76.1586 13.2518C75.5543 13.5023 74.8604 13.6274 74.0758 13.6274Z"
        fill="#7F7F87"
      />
      <path
        d="M85.7501 12.8192C85.7501 13.0341 85.6769 13.2038 85.5278 13.3367C85.3758 13.4667 85.1901 13.5346 84.965 13.5346H84.5738C83.9125 13.5346 83.3244 13.3762 82.8094 13.0652C82.2916 12.7513 81.8836 12.3214 81.5853 11.7785C81.287 11.2327 81.1378 10.6105 81.1378 9.90918V4.89804H79.9222C79.7364 4.89804 79.5788 4.83865 79.455 4.71987C79.3312 4.60108 79.2693 4.45405 79.2693 4.2787C79.2693 4.09205 79.3312 3.93934 79.455 3.81777C79.5788 3.69898 79.7364 3.63959 79.9222 3.63959H81.1378V0.729617C81.1378 0.517545 81.2026 0.342195 81.332 0.203603C81.4643 0.0678701 81.6359 3.8147e-06 81.847 3.8147e-06C82.058 3.8147e-06 82.2325 0.0678701 82.3704 0.203603C82.5055 0.342195 82.5758 0.517545 82.5758 0.729617V3.63959H84.6864C84.8721 3.63959 85.0269 3.69898 85.1535 3.81777C85.2773 3.93934 85.3392 4.09205 85.3392 4.2787C85.3392 4.45405 85.2773 4.60108 85.1535 4.71987C85.0269 4.83865 84.8721 4.89804 84.6864 4.89804H82.5758V9.90918C82.5758 10.5483 82.7615 11.0715 83.1358 11.4787C83.5101 11.8859 83.9885 12.0867 84.5738 12.0867H85.0775C85.2773 12.0867 85.4377 12.1574 85.5644 12.2931C85.6882 12.4317 85.7501 12.607 85.7501 12.8192Z"
        fill="#7F7F87"
      />
    </svg>
  </PeersystLogoRoot>
);

export default PeersystLogo;
