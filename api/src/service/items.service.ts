import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/entity/item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private ItemsRepository: Repository<Item>,
  ) {}

  findAll(): Promise<Item[]> {
    return this.ItemsRepository.find();
  }

  create(name: string) {
    const item = new Item();
    item.name = name;
    this.ItemsRepository.insert(item);
    return item.id;
  }
}
