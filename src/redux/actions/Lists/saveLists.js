const saveLists = () => async (getState) => {
    const lists = getState().listsState.lists
    const req = {
        method: "POST",
        headers:{'Content-Type':'application/json','Accept':'application/json'},
        body: JSON.stringify(lists)
    }
    await fetch('http://localhost:3000/api/v1/lists',req)
    alert("Success")
}

export default saveLists