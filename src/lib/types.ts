export type UniverseType = {
  id: string;
  title: string;
  banner_url: string;
  description: string;
};

export type TitleType = {
  universe_id: string;
  id: string;
  title: string;
  branch: string;
  type: string;
  banner_url: string;
  duration: number;
  release_date: string;
};

export type TitleConnectionType = {
  parent_id: string;
  child_id: string;
};
