export interface Post {
  id?: string | number;
  title: string;
  content?: string;
  author?: string;
  tags?: string[];
  createdAt?: string;
  excerpt?: string;
  coverImage?: string;
}
