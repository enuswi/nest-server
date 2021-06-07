import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { User } from 'src/entity/user.entity';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
}

export class FindAllResponse {
  @ApiProperty({
    type: [User],
    example: [
      { id: 1, firstName: 'FirstName', lastName: 'LastName', isActive: true },
    ],
  })
  users: User[];
}
