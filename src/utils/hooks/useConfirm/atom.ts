import { atom } from 'recoil'

export interface ConfirmDataType {
  title: string
  body: React.ReactNode
  onConfirm: () => void
  onCancel: () => void
}

const confirmAtom = atom<ConfirmDataType & { show: boolean }>({
  key: 'confirm',
  default: {
    title: 'Confirmation',
    body: null,
    show: false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onConfirm: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onCancel: () => {},
  },
})

export default confirmAtom
