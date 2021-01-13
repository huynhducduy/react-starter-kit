import ConditionalRoute from './ConditionalRoute'

export default function NormalRoute(props) {
  const config = {
    ...props,
    condition: true,
  }

  return <ConditionalRoute {...config} />
}
