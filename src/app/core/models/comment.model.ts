export interface CarComment{
  id: string;
  content: string;
  name: string;
  createdAt: string;
  carId: string;
}

export interface CreateCommentDto {
  carId: string;
  content: string;
  name: string;
}
