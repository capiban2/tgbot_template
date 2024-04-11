import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StartService } from './start.service';
import { CreateStartDto } from './dto/create-start.dto';
import { UpdateStartDto } from './dto/update-start.dto';

@Controller('start')
export class StartController {
  constructor(private readonly startService: StartService) { }

  @Post()
  create(@Body() createStartDto: CreateStartDto) {
    console.log(`TOUCHED POST ROUTE`);
    // return this.startService.create(createStartDto);
    return {
      message: "Some message",
      statusCode: 201
    }
  }

  @Get()
  findAll() {
    return this.startService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.startService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStartDto: UpdateStartDto) {
    return this.startService.update(+id, updateStartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.startService.remove(+id);
  }
}
