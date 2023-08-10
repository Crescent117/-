export interface MenuItem {
  price: string;
  menu: string;
}

export interface Tag {
  storename: string;
  category_name?: string;
  new_addr_fullname?: string;
  name3?: string;
  newaddrfull?: string;
  menu_name: MenuItem[];
}

export interface Comment {
  list: {
    point: number;
    contents: string;
    username: string;
    profile: string;
    date: string;
  }[];
}

export interface BasicInfo {
  placenamefull: string;
  catename: string;
  mainphotourl: string;
  visit: number;
  favorite: number;
}

export interface SearchListItem {
  store: {
    storeInfo: {
      basicInfo: BasicInfo;
      comment: Comment;
      tag: Tag[];
    };
  };
  storeInfo: SearchListItem;
  basicInfo: BasicInfo;
  comment: Comment;
  tag: Tag[];
}