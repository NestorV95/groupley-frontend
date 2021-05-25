const selectGroup = group =>{
    const {image, name, code, users} = group
    return{
        type: 'SELECT_GROUP',
        group: {
            image: image,
            name: name,
            code: code,
            users: users
        }
    }
}



export default selectGroup