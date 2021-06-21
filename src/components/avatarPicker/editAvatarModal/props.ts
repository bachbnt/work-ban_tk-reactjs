export interface Props {
  open: boolean;
  onConfirm: (base64: string) => void;
  onClose: () => void;
}
