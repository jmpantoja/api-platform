import type {CustomIconComponentProps} from '@ant-design/icons/lib/components/Icon';

const Menu = (props: Partial<CustomIconComponentProps>) => {
  return <svg width="1.5em" height="1.5em" fill="currentColor" viewBox="0 0 20 20" {...props}>
    <path d="M0 3h20v2h-20v-2zM0 9h20v2h-20v-2zM0 15h20v2h-20v-2z"/>
  </svg>
}

export default Menu
