import React from 'react'

const Context = React.createContext ({
    notes: [],
    folders: [],
    deleteNote: () => {}
})

export default Context;