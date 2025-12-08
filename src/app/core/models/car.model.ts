import { CarComment } from "./comment.model";
import { Reservation } from "./reservation.model";
import { User } from "./user.model";

export interface Car{
  id: string;
  brand: string;
  model: string;
  description: string | null;
  year: number;
  price: number | string;
  kilometerAge: number;
  status: 'available' | 'sold' | 'reserved';
  condition: string;
  images: string[];
  features: string[];
  userId: string;
  user?: User;
  createdAt: string;
  updatedAt: string;
  comments?: CarComment[];
  reservations?: Reservation[];
  avgRating?: number;
  totalComments?: number;
}

export interface CarsResponse{
    items: Car[];
    meta: {
        totalItems: number;
        itemCount: number;
        itemsPerPage: number;
        totalPages: number;
        currentPage: number;
    };
}
export interface CreateCarDto {
  brand: string;
  model: string;
  description?: string;
  year: number;
  price: number;
  kilometerAge: number;
  status: string;
  condition: string;
  features?: string[];
  images?: File[] | string[];
}

export interface UpdateCarDto {
  brand?: string;
  model?: string;
  description?: string;
  year?: number;
  price?: number;
  kilometerAge?: number;
  status?: string;
  condition?: string;
  features?: string[];
  images?: File[];
  imagesToKeep?: string[];
}

export interface CarFilters{
    brand?: string;
    model?: string;
    minYear?: string;
    maxYear?: string;
    sortByYear?: 'asc' | 'desc';
    minPrice?: string;
    maxPrice?: string;
    sortByPrice?: 'asc' | 'desc';
    minkilometerAge?: string;
    maxkilometerAge?: string;
    sortByKilometerAge?: 'asc' | 'desc';
    status?: string;
}
