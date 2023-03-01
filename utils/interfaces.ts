export interface DataCriptoInfo {
  id: string;
  name: string;
  symbol: string;
  price: number;
  percentage: number;
  img: any;
}

export interface ItemCriptoProps {
  item: DataCriptoInfo;
}

export interface ListCriptoProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ModalInputProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface initialStateProps {
  cryptosData: DataCriptoInfo[];
  error: string;
}

export interface cryptoThunkProps {
  name: string;
  refresh: boolean;
}
