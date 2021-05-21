
export const JoinGroupAction = user => ({
    type: 'JOIN_GROUP',
    payload: group
})

export const LeaveGroupAction = user => ({
    type: 'LEAVE_GROUP',
    payload: user
})