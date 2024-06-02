import { Schema, model } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interface';

const academicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
    },
  },
  {
    timestamps: true,
  },
);

// academicDepartmentSchema.pre("save", async function(next){
//     const isDepartmentExists = await AcademicDepartment.findOne({name: this.name,
//       });
//       if (isDepartmentExists) {
//         throw new Error('Department is Already Exists');
//       }
//       next()
// })
academicDepartmentSchema.pre('save', async function (next) {
  const isDepartmentExists = await AcademicDepartment.findOne({
    name: this.name,
  });
  if (isDepartmentExists) {
    throw new Error('Department is Already Exists');
  }
  next();
});

//update korar age
academicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();
});

export const AcademicDepartment = model<TAcademicDepartment>(
  'AcademicDepartment',
  academicDepartmentSchema,
);
