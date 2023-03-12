import {ApiProperty} from '@nestjs/swagger';

export class Course {
    @ApiProperty({example: 1, description: 'id of course'})
    id: number
    @ApiProperty({example: 'Introduction to Algorithms', description: 'name of the course'})
    name: string
    @ApiProperty({example: 'https//:www.xyz.com', description: 'link of the course where it is stored'})
    link: string
    @ApiProperty({example: 'Computer Science', description: 'Subject under which the course comes'})
    subject: string
    @ApiProperty({example: ['programming', 'algorithms', 'DSA'], description: 'tags related to the course'})
    tags: string[]
    @ApiProperty({example: 500, description: 'number of views on the course'})
    views: number
    @ApiProperty({example: 400, description: 'number of likes on the course'})
    likes: number
    @ApiProperty({example: false, description: 'boolean flag which indicates whether the course is available or not'})
    deleted: boolean
}