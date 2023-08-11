import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export class Task extends Document {
	@ApiProperty()
	id: number;

	@ApiProperty()
	description: string;

	@ApiProperty()
	completed: boolean;
}
