import { Position } from './position.interface';

export interface PositionsResponse {
  success: boolean;
  positions: Position[];
}
