import { StartService } from './start.service';
import { CreateStartDto } from './dto/create-start.dto';
import { UpdateStartDto } from './dto/update-start.dto';
export declare class StartController {
    private readonly startService;
    constructor(startService: StartService);
    create(createStartDto: CreateStartDto): {
        message: string;
        statusCode: number;
    };
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateStartDto: UpdateStartDto): string;
    remove(id: string): string;
}
