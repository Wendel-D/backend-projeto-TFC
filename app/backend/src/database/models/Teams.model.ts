import { STRING } from "sequelize";
import { INTEGER } from "sequelize";
import { Model } from "sequelize";
import db from '.';

class Teams extends Model {
    declare id: number;
    declare team_name: string;
}

Teams.init({
    id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    team_name: {
        type: STRING,
        allowNull: false,
    }
},
    {
        sequelize: db,
        modelName: 'teams',
        timestamps: false,
    }
)

export default Teams;