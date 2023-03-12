import { IsNotEmpty, IsString, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: 'Introduction to Algorithms', description: 'name of the course'})
    name: string
    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: 'https//:www.xyz.com', description: 'link of the course where it is stored'})
    link: string
    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: 'Computer Science', description: 'Subject under which the course comes'})
    subject: string
    @IsArray()
    @ApiProperty({example: ['programming', 'algorithms', 'DSA'], description: 'tags related to the course'})
    tags: string[]
}