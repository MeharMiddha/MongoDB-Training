import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentScehma } from './student.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Student.name, schema: StudentScehma }
        ])
    ],
})
export class StudentModule {}
