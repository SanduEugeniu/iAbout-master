import {Photo} from '../../../common/_interface/photo.interface';

export class Post {
  id?: number;
  mail?: string;
  content: string;
  firstName: string;
  lastName: string;
  title: string;
  category: string;
  photos?: {
    profilePic?: string;
    gallery?: {
      photo1?: string;
      photo2?: string;
      photo3?: string;
      photo4?: string;
    };

  };
}
