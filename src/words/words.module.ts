import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WordsController } from './words.controller';
import { WordSchema } from './word.schema';
import { WordsService } from './words.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Word', schema: WordSchema }])],
  controllers: [WordsController],
  providers: [WordsService],
})
export class WordsModule {}
