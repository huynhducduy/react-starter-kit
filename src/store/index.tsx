import { RecoilRoot } from 'recoil'
import DebugObserver from './DebugObserver'

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <DebugObserver />
      {children}
    </RecoilRoot>
  )
}

export { Provider }
