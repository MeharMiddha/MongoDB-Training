import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentScehma } from './student.schema';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Student.name, schema: StudentScehma }
        ])
    ],
    providers: [StudentService],
    controllers: [StudentController],
})
export class StudentModule {}
