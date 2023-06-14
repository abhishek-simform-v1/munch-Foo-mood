import { Timestamp } from 'firebase/firestore';

export interface RecipeInterface {
  recipe_name: string;
  recipe_image: {
    url: string
  };
  id?: string;
  recipe_tagline: string
  // creator: string;
  cooking_time: {
    preperation_time: number;
    chill_time: number;
    cook_time: number;
  };
  nutritions: {
    calories: number;
    fiber: number;
    protein: number;
    carbs: number;
    fats: number;
    sugar: number;
  };
  category: string[];
  // likeCount: {
  //   type: number;
  //   default: 0;
  // };
  created_at: string;

  instructions: string[];
  ingredient_info: {
    ingredient_name: string;
    ingredient_operation?: string;
    ingredient_amount: number;
    ingredient_unit: string;
  }[];
}
// export interface userData {
//   user_name:
// }