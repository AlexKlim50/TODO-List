export const getNextTodoStatus = (currentStatus) => {
    switch (currentStatus) {
        case "new":
            return "in progress"
        case "in progress":
            return "done"
        case "done":
            return "new"
    }
}
