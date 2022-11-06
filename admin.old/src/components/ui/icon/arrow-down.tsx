import type {CustomIconComponentProps} from '@ant-design/icons/lib/components/Icon';

const ArrowDown = (props: Partial<CustomIconComponentProps>) => {
  return <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24" style={{verticalAlign: 'middle'}} {...props} >
    <path d="M7.406 8.578l4.594 4.594 4.594-4.594 1.406 1.406-6 6-6-6z"/>
  </svg>
}
export default ArrowDown
