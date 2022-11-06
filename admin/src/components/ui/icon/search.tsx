import type {CustomIconComponentProps} from '@ant-design/icons/lib/components/Icon';

const Search = (props: Partial<CustomIconComponentProps>) => {
  return <svg width="1.5em" height="1.5em" fill="currentColor" viewBox="0 0 32 32" {...props}>
    <path
      d="M12.573 20.427c1.39 0.99 3.090 1.573 4.927 1.573 4.694 0 8.5-3.806 8.5-8.5s-3.806-8.5-8.5-8.5c-4.694 0-8.5 3.806-8.5 8.5 0 1.837 0.583 3.537 1.573 4.927l-5.585 5.585c-0.55 0.55-0.546 1.431 0 1.976l0.023 0.023c0.544 0.544 1.431 0.546 1.976 0l5.585-5.585zM17.5 20c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5v0z"/>
  </svg>
}

export default Search

