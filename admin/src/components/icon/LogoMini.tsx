import type {CustomIconComponentProps} from '@ant-design/icons/lib/components/Icon';

export const LogoMini = (props: Partial<CustomIconComponentProps>) => {
  return <svg width="34" height="45" fill="white" {...props} xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd"
          d="M9.752 13.44H13.8a3.6 3.6 0 110 7.2H9.992a.631.631 0 00-.632.631V40.32a4.68 4.68 0 01-9.36 0V12c0-3.68 1.09-6.6 3.269-8.76 2.18-2.162 5.25-3.241 9.21-3.24 1.344-.004 2.683.15 3.991.456.787.18 1.551.446 2.28.793a1.099 1.099 0 01.558 1.368l-1.707 4.71a1.092 1.092 0 01-1.475.618 6.693 6.693 0 00-2.735-.552c-2.84 0-4.26 1.56-4.259 4.68v.748a.634.634 0 00.62.62zm17.02.626a4.68 4.68 0 014.68 4.68v19.4a4.68 4.68 0 11-9.36 0v-19.4a4.68 4.68 0 014.68-4.68zm0-2.002a6.689 6.689 0 00-6.68 6.682v19.4a6.679 6.679 0 1013.36 0v-19.4a6.689 6.689 0 00-6.68-6.681zm3.561 6.572a3.56 3.56 0 11-7.121 0 3.56 3.56 0 017.121 0z"
    />
  </svg>
}
