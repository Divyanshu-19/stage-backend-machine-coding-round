import {
  IsNotEmpty,
  IsString,
  IsArray,
  IsDate,
  Min,
  Max,
  IsOptional,
  IsEnum,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { genre } from 'src/constants/constants';

class WatchHistoryItem {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  contentId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  watchedOn: Date;

  @ApiProperty()
  @IsOptional()
  @Min(1)
  @Max(5)
  rating?: number;
}

class MyListItem {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  contentId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(['Movie', 'TVShow'])
  contentType: 'Movie' | 'TVShow';
}

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsArray()
  @IsEnum(genre, { each: true })
  @IsOptional()
  favoriteGenres?: string[];

  @ApiProperty()
  @IsArray()
  @IsEnum(genre, { each: true })
  @IsOptional()
  dislikedGenres?: string[];

  @ApiProperty()
  @IsArray()
  @IsOptional()
  watchHistory?: WatchHistoryItem[];

  @ApiProperty()
  @IsArray()
  @IsOptional()
  myList?: MyListItem[];
}

export class UpdateUserDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  username?: string;

  @ApiProperty()
  @IsArray()
  @IsEnum(genre, { each: true })
  @IsOptional()
  favoriteGenres?: string[];

  @ApiProperty()
  @IsArray()
  @IsEnum(genre, { each: true })
  @IsOptional()
  dislikedGenres?: string[];

  @ApiProperty()
  @IsArray()
  @IsOptional()
  watchHistory?: WatchHistoryItem[];

  @ApiProperty()
  @IsArray()
  @IsOptional()
  myList?: MyListItem[];
}
