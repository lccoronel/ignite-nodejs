import { v4 as uuidv4 } from 'uuid';

export class Rental {
  id: string;

  car_id: string;

  user_id: string;

  start_date: string;

  end_date: string;

  expected_return_date: Date;

  total: number;

  created_at: Date;

  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}