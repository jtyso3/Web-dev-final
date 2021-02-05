//Defines DB columns and data

// date hours type media status additional comments

module.exports = (sequelize, DataTypes) => {

    let Activity = sequelize.define('Activity', {
        date:{
            type: DataTypes.DATE,
        }, hours: {
            type: DataTypes.TINYINT
        }, activityType: {
            type: DataTypes.STRING
        }, media: {
            type: DataTypes.STRING
        }, status: {
            type: DataTypes.STRING
        }, additionalComments: {
            type: DataTypes.STRING
        }
    })

    Activity.sync({force: false}).then( () =>{
        console.log('synced activity table')
    })

    return Activity
}