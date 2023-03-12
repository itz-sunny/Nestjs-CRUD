import { Inject, Injectable } from "@nestjs/common";
import { DBService } from "src/db/db.service";
import { CreateCourseDto, UpdateCourseDto } from './model'

@Injectable()
export class CourseService {

    @Inject()
    dbService: DBService;

    async fetchCourseById(id: number): Promise<any> {
        try {
             return await this.dbService.course.findFirst({
                where: {
                    id
                }
            });
        } catch (error) {
            throw new Error(JSON.stringify({msg: `error in fetching course for id: ${id}`}));
        }
    }

    async fetchCourses(filter: string): Promise<any> {
        try {
            return await this.dbService.course.findMany({
               where: {
                    'OR': [
                        {
                            name: {
                                contains: filter,
                                mode: 'insensitive'
                            }
                        },
                        {
                            subject: {
                                contains: filter,
                                mode: 'insensitive'
                            }
                        },
                        {
                            tags: {
                                has: filter
                            }
                        }
                    ]
               }
           });
       } catch (error) {
           throw new Error(JSON.stringify({msg: `error in fetching courses for filter: ${filter}`}))
       }
    }

    async createCourse(createCourseDto: CreateCourseDto): Promise<any> {
        try {
            return await this.dbService.course.create({
                data: {
                    ...createCourseDto
                }
            })
        } catch {
            throw new Error(JSON.stringify({msg: `error in creating new course: ${JSON.stringify(createCourseDto)}`}))
        }
    }

    async updateCourse(updateCourseDto: UpdateCourseDto, id: number): Promise<any> {
        try {
            const course = await this.fetchCourseById(id);
            if (!course)
                throw new Error('No such course found');

            const data = {};
            this.addValidUpdateData(updateCourseDto, data, 'name')
            this.addValidUpdateData(updateCourseDto, data, 'subject')
            this.addValidUpdateData(updateCourseDto, data, 'link')
            this.addValidUpdateData(updateCourseDto, data, 'views')
            this.addValidUpdateData(updateCourseDto, data, 'likes')
            if (!updateCourseDto.tags) {
                updateCourseDto.tags = [...course.tags, ...updateCourseDto.tags]
            }

            return await this.dbService.course.update({
                where: { id },
                data
            })
        } catch {
            throw new Error(JSON.stringify({msg: `error in creating new course: ${JSON.stringify(updateCourseDto)}`}))
        }
    }

    async deleteCourse(id: number): Promise<any> {
        try {
            return await this.dbService.course.update({
                where: { id },
                data: {
                    deleted: true
                }
            })
        } catch {
            throw new Error(JSON.stringify({msg: `error in creating new course: ${JSON.stringify(id)}`}))
        }
    }

    private addValidUpdateData(updateCourseDto: UpdateCourseDto, data: Object, key: string) {
        if (!updateCourseDto[key])
                data[key] = updateCourseDto[key]
    }

}