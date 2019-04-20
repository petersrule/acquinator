import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Word } from './word.interface';
import { WordDto } from './word.dto';

@Injectable()
export class WordsService {
  constructor(@InjectModel('Word') private readonly wordModel: Model<Word>) {}

  async add(wordDto: WordDto): Promise<Word> {
    const createdWord = new this.wordModel(wordDto);
    return await createdWord.save();
  }

  async findAll(): Promise<Word[]> {
    return await this.wordModel.find().exec();
  }

  async findOne(id: string): Promise<Word> {
    return await this.wordModel.findOne({ _id: id });
  }

  async update(id: string, word: Word) {
    return await this.wordModel.findOneAndUpdate(id, word, { new: true });
  }

  async remove(id: string) {
    // return await this.wordModel.findByIdAndRemove(id);
    return await this.wordModel.findOneAndDelete(id);
  }
}
