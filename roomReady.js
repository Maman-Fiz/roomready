let cleaningStatus = "Completed";
let criticalMaintenanceIssue = true;
let bedIsMade = true;
let roomStatus ;
if (cleaningStatus === "Completed" && 
    criticalMaintenanceIssue === false &&
    bedIsMade === true) {
        roomStatus = "Ready";
} else {
    roomStatus = "Not Ready";
}
console.log(roomStatus);
