import { CreateStartDto } from './dto/create-start.dto';
import { UpdateStartDto } from './dto/update-start.dto';
export declare class StartService {
    create(createStartDto: CreateStartDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateStartDto: UpdateStartDto): string;
    remove(id: number): string;
}
