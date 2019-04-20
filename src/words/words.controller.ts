import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { WordDto } from './word.dto';
import { WordsService } from './words.service';
import { Word } from './word.interface';

@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Post()
  async add(@Body() wordDto: WordDto) {
    return this.wordsService.add(wordDto);
  }

  @Get()
  findAll() {
    return this.wordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wordsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() wordDto: WordDto) {
    return this.wordsService.update(id, wordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wordsService.remove(id);
  }
}
