import type { SvgIconProps } from '@peersyst/react-components';
import { SvgIcon } from '@peersyst/react-components';
import clsx from 'clsx';

export default function GithubLogoIcon({ className, ...rest }: Omit<SvgIconProps, 'children'>): JSX.Element {
  return (
    <SvgIcon {...rest} data-testid="GithubLogoIcon" className={clsx(undefined, 'Icon', className)} fill="none">
      <path
        opacity="0.2"
        d="M10.4813 6C10.0406 5.31048 9.43355 4.74295 8.71594 4.34974C7.99833 3.95653 7.19328 3.75028 6.375 3.75C6.01116 4.37979 5.79285 5.08301 5.73607 5.80813C5.67929 6.53325 5.78549 7.26188 6.04688 7.94062C5.53426 8.6963 5.25697 9.58689 5.25 10.5V11.25C5.25 12.4435 5.72411 13.5881 6.56802 14.432C7.41193 15.2759 8.55653 15.75 9.75 15.75H14.25C15.4435 15.75 16.5881 15.2759 17.432 14.432C18.2759 13.5881 18.75 12.4435 18.75 11.25V10.5C18.743 9.58689 18.4657 8.6963 17.9531 7.94062C18.2145 7.26188 18.3207 6.53325 18.2639 5.80813C18.2072 5.08301 17.9888 4.37979 17.625 3.75C16.8067 3.75028 16.0017 3.95653 15.2841 4.34974C14.5665 4.74295 13.9594 5.31048 13.5187 6H10.4813Z"
        fill="#394046"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M10.125 15C10.5392 15 10.875 15.3358 10.875 15.75V20.2485" fill="#394046" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.875 15C14.2892 15 14.625 15.3358 14.625 15.75V20.2531C14.6242 20.4499 14.6623 20.645 14.7373 20.8269C14.8122 21.0089 14.9224 21.1743 15.0616 21.3134C15.2007 21.4526 15.3661 21.5628 15.5481 21.6377C15.73 21.7127 15.9251 21.7508 16.1219 21.75C16.5361 21.7483 16.8733 22.0826 16.875 22.4969C16.8767 22.9111 16.5424 23.2483 16.1281 23.25C15.7333 23.2516 15.342 23.1751 14.9769 23.0248C14.6118 22.8744 14.2801 22.6533 14.0009 22.3741C13.7217 22.0949 13.5006 21.7632 13.3502 21.3981C13.2001 21.0335 13.1236 20.6428 13.125 20.2485C13.125 20.248 13.125 20.2474 13.125 20.2469L13.875 20.25H13.125V20.2485V15.75C13.125 15.3358 13.4608 15 13.875 15Z"
        fill="#394046"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.3269 16.6123C16.145 16.5373 15.9499 16.4992 15.7531 16.5L15.75 16.5L14.25 16.5C13.8358 16.5 13.5 16.1642 13.5 15.75C13.5 15.3358 13.8358 15 14.25 15H15.7485M16.3269 16.6123C16.5089 16.6872 16.6743 16.7974 16.8134 16.9366ZM16.8134 16.9366C16.9526 17.0757 17.0628 17.2411 17.1377 17.4231ZM17.1377 17.4231C17.2127 17.605 17.2508 17.8001 17.25 17.9969ZM18.75 18.0015V18.7531C18.7492 18.9499 18.7873 19.145 18.8623 19.3269C18.9372 19.5089 19.0474 19.6743 19.1866 19.8134C19.3257 19.9526 19.4911 20.0628 19.6731 20.1377C19.855 20.2127 20.0501 20.2508 20.2469 20.25C20.6611 20.2483 20.9983 20.5826 21 20.9969C21.0017 21.4111 20.6674 21.7483 20.2531 21.75C19.8583 21.7516 19.467 21.6751 19.1019 21.5248C18.7368 21.3744 18.4051 21.1533 18.1259 20.8741C17.8467 20.5949 17.6256 20.2632 17.4752 19.8981C17.3251 19.5335 17.2486 19.1428 17.25 18.7485C17.25 18.748 17.25 18.7474 17.25 18.7469L18 18.75H17.25V18.7485L17.25 17.9969"
        fill="#394046"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.25147 15H9.75C10.1642 15 10.5 15.3358 10.5 15.75C10.5 16.1642 10.1642 16.5 9.75 16.5H8.24686C8.05006 16.4992 7.85504 16.5373 7.67306 16.6123C7.49108 16.6872 7.32574 16.7974 7.18658 16.9366C7.04742 17.0757 6.93719 17.2411 6.86226 17.4231C6.78733 17.605 6.74917 17.8001 6.75 17.9969L6.75001 18L6.75 18.7485"
        fill="#394046"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.72559 3.37482C5.85963 3.14279 6.10729 2.99991 6.37526 3C7.31943 3.00032 8.24832 3.23831 9.07634 3.69201C9.78094 4.0781 10.3932 4.60982 10.8733 5.25H13.1267C13.6068 4.60982 14.2191 4.0781 14.9237 3.69201C15.7517 3.23831 16.6806 3.00032 17.6247 3C17.8927 2.99991 18.1404 3.14279 18.2744 3.37482C18.6942 4.1015 18.9461 4.91291 19.0116 5.74958C19.0671 6.45818 18.9877 7.16968 18.7789 7.84667C19.2433 8.64998 19.4929 9.56203 19.5 10.4943L19.5 10.5L19.5 11.25C19.5 12.6424 18.9469 13.9777 17.9623 14.9623C16.9777 15.9469 15.6424 16.5 14.25 16.5H9.75C8.35761 16.5 7.02226 15.9469 6.03769 14.9623C5.05312 13.9777 4.5 12.6424 4.5 11.25V10.4943C4.50711 9.56203 4.75668 8.64998 5.22109 7.84666C5.01227 7.16968 4.93288 6.45818 4.98836 5.74958C5.05387 4.91291 5.30577 4.1015 5.72559 3.37482ZM6.82181 4.52445C6.63477 4.94865 6.52014 5.40236 6.48378 5.86668C6.43574 6.48024 6.5256 7.09677 6.74677 7.67109C6.83506 7.90037 6.80547 8.15834 6.66754 8.36166C6.23862 8.99396 6.00637 9.739 6 10.503V11.25C6 12.2446 6.39509 13.1984 7.09835 13.9017C7.80161 14.6049 8.75544 15 9.75 15H14.25C15.2446 15 16.1984 14.6049 16.9017 13.9017C17.6049 13.1984 18 12.2446 18 11.25V10.503C17.9936 9.73903 17.7614 8.99397 17.3325 8.36166C17.1945 8.15834 17.1649 7.90037 17.2532 7.67109C17.4744 7.09677 17.5643 6.48024 17.5162 5.86668C17.4799 5.40236 17.3652 4.94865 17.1782 4.52445C16.6417 4.58313 16.1203 4.74672 15.6445 5.00747C15.0373 5.34019 14.5236 5.8204 14.1507 6.40385C14.0129 6.6195 13.7747 6.75 13.5187 6.75H10.4813C10.2253 6.75 9.98707 6.6195 9.84926 6.40385C9.47644 5.8204 8.96275 5.34019 8.35554 5.00747C7.87966 4.74672 7.35834 4.58313 6.82181 4.52445Z"
        fill="#394046"
      />
    </SvgIcon>
  );
}
