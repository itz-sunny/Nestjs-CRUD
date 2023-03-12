import { IsNotEmpty, IsString, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCourseDto {
    @ApiProperty({example: 'Introduction to Algorithms', description: 'name of the course'})
    name: string | undefined | null
    @ApiProperty({example: 'https//:www.xyz.com', description: 'link of the course where it is stored'})
    link: string | undefined | null
    @ApiProperty({example: 'Computer Science', description: 'Subject under which the course comes'})
    subject: string | undefined | null
    @ApiProperty({example: ['programming', 'algorithms', 'DSA'], description: 'tags related to the course'})
    tags: string[] | undefined | null
    @ApiProperty({example: 500, description: 'number of views on the course'})
    views: number | undefined | null
    @ApiProperty({example: 400, description: 'number of likes on the course'})
    likes: number | undefined | null
}