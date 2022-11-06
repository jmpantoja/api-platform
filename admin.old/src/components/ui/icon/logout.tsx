import Icon from '@ant-design/icons';
import type {CustomIconComponentProps} from '@ant-design/icons/lib/components/Icon';

const LogoutSvg = () => (
  <svg  fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
    <path d="M17.653 7.347c1.562 1.563 2.343 3.608 2.342 5.657s-0.782 4.094-2.344 5.656c-1.562 1.561-3.606 2.342-5.654 2.342-2.052 0-4.098-0.782-5.659-2.344s-2.342-3.608-2.342-5.656 0.781-4.094 2.342-5.656c0.39-0.391 0.39-1.024 0-1.414s-1.024-0.39-1.414 0c-1.952 1.952-2.928 4.513-2.928 7.070s0.976 5.118 2.928 7.070c1.952 1.953 4.513 2.93 7.071 2.93s5.119-0.976 7.072-2.928c1.953-1.952 2.93-4.513 2.93-7.070-0.001-2.561-0.977-5.12-2.928-7.072-0.39-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM11 2v10c0 0.552 0.448 1 1 1s1-0.448 1-1v-10c0-0.552-0.448-1-1-1s-1 0.448-1 1z"/>
  </svg>
)

const Logout = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={LogoutSvg} {...props} />
);

export default Logout
