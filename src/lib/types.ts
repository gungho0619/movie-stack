export type UniverseType = {
  id: string;
  title: string;
};

export type TitleType = {
  universe_id: string;
  id: string;
  title: string;
  branch: string;
  banner_url: string;
  duration: number;
  release_date: string;
  text: "white" | "black";
};

export type TitleConnectionType = {
  parent_id: string;
  child_id: string;
};