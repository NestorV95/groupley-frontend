const selectGroup = ({id, image, name, code, users}) =>{
    return{
        type: 'SELECT_GROUP',
        group: {
            id: id,
            image: image,
            name: name,
            code: code,
            users: users
        }
    }
}



export default selectGroup