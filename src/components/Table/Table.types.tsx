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
  onClickHandle: (e: IEvent) => void;
  sortedBy: string;
}

export interface IRowProps {
  data: Array<IPropsData>;
  onClickHandler: (e: IEvent) => void;
}

export interface ITargetId {
  id: string;
}

export interface IEvent {
  target: ITargetId;
}
