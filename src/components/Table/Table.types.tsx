export interface IPropsData {
  id: string;
  name: string;
  birthDate: string;
  phone: string;
  city: string;
}


export interface IProps {
  data: Array<IPropsData>;
}

export interface IHeaderProps {
  data: Array<IPropsData>;
  onClickHandle: (e: any) => void;
  sortedBy: string | null;
}

export interface IRowProps {
  data: Array<IPropsData>;
  onClickHandler: (e: any) => void;
}

export interface ITargetId {
  id: string;
}

export interface IEvent {
  target: ITargetId;
}
