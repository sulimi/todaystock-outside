export interface Stock {
  brand: string;
  capacity: string;
  color: string;
  condition: string;
  model: string;
  modelName: string;
  quantity: number;
  spec: string;
  id: string;
  bagSelected?: boolean;
  bagQty: number;
  bagPrice: string;
  bagKey?: string;
}


interface TableHeaderProps {
  key: string;
  label: string;
  sortable: boolean;
  class?: string;
}

interface CanHiddenTableTitles {
  spec: boolean;
  capacity: boolean;
  color: boolean;
  model: boolean;
  condition: boolean;
}

export interface RootState {
  defaultTableTitleList: TableHeaderProps[];
  canHiddenTableTitles: CanHiddenTableTitles;
  list: Stock[];
  originalList: Stock[];
  filterList: Stock[],
  excelDownloadList: Stock[],
  getListError: boolean;
  downError: boolean;
  searchKeyword: string | null;
  bagList: Stock[];
  isOverMaxStock: boolean;
  maxStock: number;
  urlMap: string | string[];
  currentPage: number;
  currentRowId: string[];
  addError: boolean;
}

export interface AddOrderDate extends Stock {
  brand: string;
  capacity: string;
  clientEmail: string;
  clientName: string;
  clientPhone: string;
  clientRemark: string;
  color: string;
  condition: string;
  model: string;
  modelName: string;
  price: string;
  quantity: number;
  spec: string;
}

export interface PlayerOptions {
  muted: boolean;
  fluid: boolean;
  language: string;
  playbackRates: number[];
  sources: [
    {
      type: string;
      src: string;
    },
  ],
  poster,
}

export interface SwiperDataList {
  url: string;
  class: string;
  key: string;
  textContent: string[];
  playerOptions: PlayerOptions;
}
