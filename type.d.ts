export interface CardType {
  id: number;
  title: string;
  reactions: {
    likes: number;
    dislikes: number;
  };
  userId: number;
  body: string;
  tags: string[];
  views: number;
}
