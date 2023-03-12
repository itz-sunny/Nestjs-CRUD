import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { CourseService } from './course.service';
import { Course, CreateCourseDto, UpdateCourseDto } from './model';
import { ApiOperation, ApiResponse,  ApiTags, ApiOkResponse, ApiCreatedResponse} from '@nestjs/swagger';

@ApiTags('courses')
@Controller('course')
export class CourseController {

    @Inject()
    courseService: CourseService

    @ApiOperation({summary: 'fetches course by id'})
    @ApiOkResponse({description: 'course fetched successfully', type: Course, isArray: false})
    @ApiResponse({status: 404, description: 'path not found'})
    @ApiResponse({status: 400, description: 'bad request'})
    @ApiResponse({status: 500, description: 'Something went wrong at our end'})
    @Get('/:id')
    async fetchCourseById(@Param('id', ParseIntPipe) id: number): Promise<Course> {
        return await this.courseService.fetchCourseById(id);
    }

    @ApiOperation({summary: 'fetches courses related to text entered'})
    @ApiOkResponse({description: 'courses fetched successfully', type: Course, isArray: true})
    @ApiResponse({status: 404, description: 'path not found'})
    @ApiResponse({status: 400, description: 'bad request'})
    @ApiResponse({status: 500, description: 'Something went wrong at our end'})
    @Get()
    async fetchCourses(@Query('filter') filter: string): Promise<Course[]> {
        return await this.courseService.fetchCourses(filter);
    }

    @ApiOperation({summary: 'creates course for given data'})
    @ApiCreatedResponse({description: 'course created successfully', type: Course, isArray: false})
    @ApiResponse({status: 404, description: 'path not found'})
    @ApiResponse({status: 400, description: 'bad request'})
    @ApiResponse({status: 500, description: 'Something went wrong at our end'})
    @Post()
    async createCourse(@Body() createCourseDto: CreateCourseDto): Promise<Course> {
        return await this.courseService.createCourse(createCourseDto);
    }

    @ApiOperation({summary: 'updates course with given id and data'})
    @ApiOkResponse({description: 'course updated successfully', type: Course, isArray: false})
    @ApiResponse({status: 404, description: 'path not found'})
    @ApiResponse({status: 400, description: 'bad request'})
    @ApiResponse({status: 500, description: 'Something went wrong at our end'})
    @Put('/:id')
    async upateCourse(@Body() updateCourseDto: UpdateCourseDto, @Param('id', ParseIntPipe) id: number): Promise<Course> {
        return await this.courseService.updateCourse(updateCourseDto, id);
    }

    @ApiOperation({summary: 'deletes course for given id'})
    @ApiOkResponse({description: 'course deleted successfully', type: Course, isArray: false})
    @ApiResponse({status: 404, description: 'path not found'})
    @ApiResponse({status: 400, description: 'bad request'})
    @ApiResponse({status: 500, description: 'Something went wrong at our end'})
    @Delete('/:id')
    async deleteCourse(@Param('id', ParseIntPipe) id: number): Promise<Course> {
        return await this.courseService.deleteCourse(id);
    }
}
