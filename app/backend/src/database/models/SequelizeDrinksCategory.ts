import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizeDrinksCategory extends Model<InferAttributes<SequelizeDrinksCategory>,
InferCreationAttributes<SequelizeDrinksCategory>> {
  declare id: CreationOptional<number>;
  declare strCategory: string;
}

SequelizeDrinksCategory.init({
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER
  }, 
  strCategory: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'str_category'
  }, 
 }, {
    sequelize: db,
    modelName: 'drinks_categories',
    timestamps: false,
    underscored: true
});

export default SequelizeDrinksCategory;