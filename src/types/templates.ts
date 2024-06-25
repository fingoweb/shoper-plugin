import { DL_API_PREFIX_KEY } from 'consts/common';
import { EProductElements } from 'types/products';

enum ETemplates {
  LIST_VIEW = `${DL_API_PREFIX_KEY}LIST_VIEW`,
  GRID_VIEW = `${DL_API_PREFIX_KEY}GRID_VIEW`,
  LIST_RELATED_PRODUCTS = `${DL_API_PREFIX_KEY}LIST_RELATED_PRODUCTS`,
}

type TContentMap = {
  selector: string;
  replace: string[];
  canBeNull?: boolean;
  prepareValue?: (item: Element) => string;
};

type TReplaceContentMap = {
  key: string;
  map: {
    gridView: TContentMap[];
    listView: TContentMap[];
    relatedView: TContentMap[];
  };
};

type TReplaceMap = Record<EProductElements, TReplaceContentMap>;

export { ETemplates };
export type { TReplaceContentMap, TReplaceMap };
