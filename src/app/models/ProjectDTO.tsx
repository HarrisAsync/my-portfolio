import CardDTO from "./CardDTO";
import NameLinkDTO from "./NameLinkDTO";

export default interface ProjectDTO {
  card: CardDTO;
  name: string;
  type: string;
  date: string;
  members: string[];
  links: NameLinkDTO[];
  headLineImage: ImageType;
  rows: Row[];
  contentHeight: number;
}

export interface Row {
  cells: Cell[];
}

export interface Cell {
  paragraph?: ParagraphType;
  image?: ImageType;
}

export interface ParagraphType {
  title?: string;
  body: string;
}

export interface ImageType {
  url: string;
  width: number;
  height: number;
}
