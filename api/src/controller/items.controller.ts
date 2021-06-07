import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { GetItemsRequest, GetItemsResponse } from 'src/dto/item.dto';

@Controller()
export class ItemsController {
  @Get('api/v1/items')
  @ApiResponse({ status: HttpStatus.OK, type: GetItemsResponse })
  getItems(@Query() { ids }: GetItemsRequest): GetItemsResponse {
    return { items: [] };
  }
}
