import { Item } from 'src/entity/item.entity';
import { ApiProperty } from '@nestjs/swagger';

export class GetItemsResponse {
  @ApiProperty({ type: [Item], example: [{ id: 1, name: 'test' }] })
  items: Item[];
}

export class GetItemsRequest {
  @ApiProperty({ type: [String], example: ['1', '2', '3'] })
  ids: string[];
}
