import mongoose, { Schema, Document } from "mongoose";

interface MenuItem {
  price: string;
  menu: string;
}

interface Tag {
  storename: string;
  category_name?: string;
  new_addr_fullname?: string;
  name3?: string;
  newaddrfull?: string;
  menu_name: MenuItem[];
}

interface Comment {
  list: {
    point: number,
    contents: String,
    username: String,
    profile: String,
    date: String,
  }[];
}

interface BasicInfo {
  catename: string;
  mainphotourl: string;
  visit: number;
  favorite: number;
}

interface SearchListItem {
  basicInfo: BasicInfo;
  comment: Comment;
  tag: Tag[];
}

interface SearchResult extends Document {
  store: SearchListItem[];
}

const SearchListItemSchema = new Schema<SearchListItem>(
  {
    basicInfo: {
      catename: String,
      mainphotourl: String,
      visit: Number,
      favorite: Number,
    },
    comment: {
      list: [
        {
          point: Number,
          contents: String,
          username: String,
          profile: String,
          date: String,
        },
      ],
    },
    tag: [
      {
        storename: String,
        category_name: String,
        new_addr_fullname: String,
        name3: String,
        newaddrfull: String,
        menu_name: [{} as MenuItem],
      },
    ],
  },
  { _id: false }
);

const SearchListSchema = new Schema<SearchResult>(
  {
    store: [SearchListItemSchema],
  },
  {
    timestamps: true,
    collection: "DealiciousFood",
  }
);

const SearchList = mongoose.model<SearchResult>("SearchList", SearchListSchema);

export default SearchList;