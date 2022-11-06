import type {CustomIconComponentProps} from '@ant-design/icons/lib/components/Icon';

const Home = (props: Partial<CustomIconComponentProps>) => {

  return <svg width="1.5em" height="1.5em" fill="currentColor" viewBox="0 0 32 32" {...props}>
    <path d="M32 19l-6-6v-9h-4v5l-6-6-16 16v1h4v10h10v-6h4v6h10v-10h4z"/>
  </svg>
}

export default Home
