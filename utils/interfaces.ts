export interface DataCriptoInfo {
  id: string;
  name: string;
  symbol: string;
  price: string;
  percentage: number;
  img: any;
}

export interface ItemCriptoProps {
  item: DataCriptoInfo;
}

export interface ListCriptoProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
