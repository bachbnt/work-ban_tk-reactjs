export interface Props {
  currentPage: number;
  totalPage: number;
  onPrevious: () => void;
  onNext: () => void;
}
