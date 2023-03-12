import { Controller, Get, Inject } from "@nestjs/common";
import { PingService } from "./ping.service";
import { ApiOperation, ApiResponse,  ApiTags} from '@nestjs/swagger';

@ApiTags('ping')
@Controller('ping')
export class PingController {

    @Inject()
    pingService: PingService;

    @ApiOperation({summary: 'pings server to check it\'s health'})
    @ApiResponse({status: 200, description: 'SUCCESS', type: String})
    @ApiResponse({status: 404, description: 'path not found'})
    @ApiResponse({status: 400, description: 'bad request'})
    @ApiResponse({status: 500, description: 'Something went wrong at our end'})
    @Get()
    ping() {
        return this.pingService.ping();
    }
}