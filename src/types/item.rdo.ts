import {ItemType} from './item-type.enum';

export class ItemRdo {
  public id!: string;
  public createdAt!: string;
  public updatedAt!: string;
  public title!: string;
  public description!: string;
  public listsIds!: string[];
  public consistsOfItemsIds!: string[];
  public deadline!: string | null;
  public type!: ItemType;
}
