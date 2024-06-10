import type { SvgIconProps } from '@peersyst/react-components';
import { SvgIcon } from '@peersyst/react-components';
import clsx from 'clsx';

export default function HelpIcon({ className, ...rest }: Omit<SvgIconProps, 'children'>): JSX.Element {
  return (
    <SvgIcon {...rest} data-testid="HelpIcon" className={clsx(undefined, 'Icon', className)} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20.8C16.8602 20.8 20.8 16.8602 20.8 12C20.8 7.13989 16.8602 3.19999 12 3.19999C7.13989 3.19999 3.19999 7.13989 3.19999 12C3.19999 16.8602 7.13989 20.8 12 20.8ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12.402 7.63066C12.049 7.56512 11.6846 7.60515 11.3543 7.7457C11.024 7.88625 10.7425 8.12112 10.5451 8.42088C10.3476 8.72064 10.243 9.07198 10.2442 9.43093L8.0442 9.43855C8.04147 8.6468 8.27233 7.87183 8.70787 7.21064C9.14342 6.54945 9.76432 6.03142 10.4929 5.72139C11.2214 5.41135 12.0251 5.32309 12.8037 5.46764C13.5821 5.6122 14.3005 5.98316 14.8692 6.53407L14.8721 6.53682C15.2705 6.92566 15.5732 7.40179 15.7562 7.92764C15.9392 8.45348 15.9974 9.01467 15.9264 9.56688L15.9255 9.57401L15.9253 9.57399C15.8026 10.4821 15.3125 11.1933 14.875 11.7059C14.6675 11.9516 14.4358 12.1901 14.2365 12.3955C14.1898 12.4436 14.1449 12.4899 14.1025 12.534C13.8606 12.7854 13.67 12.996 13.5203 13.209L13.5195 13.21C13.2616 13.5763 13.1112 14.007 13.085 14.4538V14.6721H10.885V14.4246C10.885 14.4068 10.8854 14.389 10.8862 14.3712C10.9286 13.4993 11.218 12.6574 11.7205 11.9437C11.9736 11.5836 12.2647 11.2711 12.517 11.0088C12.5749 10.9486 12.6302 10.8916 12.6833 10.8369C12.8776 10.6365 13.0419 10.467 13.1957 10.2847L13.2001 10.2796C13.5335 9.88912 13.7047 9.57092 13.7448 9.28238C13.7716 9.0695 13.7489 8.85327 13.6783 8.6506C13.6077 8.44733 13.4907 8.26325 13.3369 8.11274C13.0794 7.86375 12.7542 7.69608 12.402 7.63066ZM12 18.6C12.6075 18.6 13.1 18.1076 13.1 17.5C13.1 16.8925 12.6075 16.4 12 16.4C11.3925 16.4 10.9 16.8925 10.9 17.5C10.9 18.1076 11.3925 18.6 12 18.6Z"
        fill="black"
      />
    </SvgIcon>
  );
}
