import { memo } from 'react'
import ContentLoader from 'react-content-loader'

type SkeletonType = {
  width?: number
  height?: number
  speed?: number
  backgroundColor?: string
  foregroundColor?: string
}

const Skeleton = memo<SkeletonType>(
  ({
    width = 200,
    height = 20,
    speed = 2,
    backgroundColor = '#f3f3f3',
    foregroundColor = '#ecebeb',
  }) => {
    return (
      <ContentLoader
        speed={speed}
        width={width}
        height={height}
        viewBox={`0 0 ${String(width)} 20`}
        backgroundColor={backgroundColor}
        foregroundColor={foregroundColor}
      >
        <rect x="0" y="0" rx="2" ry="2" width={width} height={height} />
      </ContentLoader>
    )
  }
)

export default Skeleton
