import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
  } from 'sequelize';
  import db from '.';
  
  class SequelizeMealsModel extends Model<InferAttributes<SequelizeMealsModel>,
  InferCreationAttributes<SequelizeMealsModel>> {
    declare idMeal: CreationOptional<number>;
    declare strMeal: string;
    declare strCategory: string;
    declare strArea: string;
    declare strInstructions: string;
    declare strMealThumb: string;
    declare strTags: string;
    declare strYoutube: string;
    declare strIngredient1: string;
    declare strIngredient2: string;
    declare strIngredient3: string;
    declare strIngredient4: string;
    declare strIngredient5: string;
    declare strIngredient6: string;
    declare strIngredient7: string;
    declare strIngredient8: string;
    declare strIngredient9: string;
    declare strIngredient10: string;
    declare strIngredient11: string;
    declare strIngredient12: string;
    declare strIngredient13: string;
    declare strIngredient14: string;
    declare strIngredient15: string;
    declare strIngredient16: string;
    declare strIngredient17: string;
    declare strIngredient18: string;
    declare strIngredient19: string;
    declare strIngredient20: string;
    declare strMeasure1: string;
    declare strMeasure2: string;
    declare strMeasure3: string;
    declare strMeasure4: string;
    declare strMeasure5: string;
    declare strMeasure6: string;
    declare strMeasure7: string;
    declare strMeasure8: string;
    declare strMeasure9: string;
    declare strMeasure10: string;
    declare strMeasure11: string;
    declare strMeasure12: string;
    declare strMeasure13: string;
    declare strMeasure14: string;
    declare strMeasure15: string;
    declare strMeasure16: string;
    declare strMeasure17: string;
    declare strMeasure18: string;
    declare strMeasure19: string;
    declare strMeasure20: string;
    declare strSource: string;
  }
  
  SequelizeMealsModel.init({
    idMeal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id_meal',
    },
    strMeal: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_meal',
      },
      strCategory: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_category',
      },
      strArea: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_area',
      },
      strInstructions: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: 'str_instructions',
      },
      strMealThumb: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_meal_thumb',
      },
      strTags: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_tags',
      },
      strYoutube: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_youtube',
      },
      strIngredient1: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_ingredient1',
      },
      strIngredient2: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_ingredient2',
      },
      strIngredient3: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_ingredient3',
      },
      strIngredient4: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_ingredient4',
      },
      strIngredient5: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_ingredient5',
      },
      strIngredient6: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_ingredient6',
      },
      strIngredient7: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_ingredient7',
      },
      strIngredient8: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_ingredient8',
      },
      strIngredient9: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_ingredient9',
      },
      strIngredient10: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_ingredient10',
      },
      strIngredient11: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_ingredient11',
      },
      strIngredient12: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_ingredient12',
      },
      strIngredient13: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_ingredient13',
      },
      strIngredient14: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_ingredient14',
      },
      strIngredient15: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_ingredient15',
      },
      strIngredient16: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_ingredient16',
      },
      strIngredient17: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_ingredient17',
      },
      strIngredient18: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_ingredient18',
      },
      strIngredient19: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_ingredient19',
      },
      strIngredient20: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_ingredient20',
      },
      strMeasure1: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_measure1'
      },
      strMeasure2: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_measure2'
      },
      strMeasure3: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_measure3'
      },
      strMeasure4: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_measure4'
      },
      strMeasure5: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_measure5'
      },
      strMeasure6: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_measure6'
      },
      strMeasure7: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_measure7'
      },
      strMeasure8: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_measure8'
      },
      strMeasure9: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_measure9'
      },
      strMeasure10: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_measure10'
      },
      strMeasure11: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_measure11'
      },
      strMeasure12: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_measure12'
      },
      strMeasure13: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_measure13'
      },
      strMeasure14: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_measure14'
      },
      strMeasure15: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_measure15'
      },
      strMeasure16: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_measure16'
      },
      strMeasure17: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_measure17'
      },
      strMeasure18: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_measure18'
      },
      strMeasure19: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_measure19'
      },
      strMeasure20: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_measure20'
      },
      strSource: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'str_source'
      },
  }, {
    sequelize: db,
    modelName: 'meals',
    timestamps: false,
    underscored: true,
  });
    
  export default SequelizeMealsModel;