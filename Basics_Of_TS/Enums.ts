//Create a numeric or string enum named UserRole with members: Admin, Editor, and Viewer.

enum UserRole{
    Admin="Admin",
    Editor="Editor",
    Viewer="Viewer"
}

let userRole:UserRole=UserRole.Admin
console.log("User Role: ",userRole)

function canEdit(role:UserRole):void{
    if(role===UserRole.Admin || role===UserRole.Editor){console.log("User can edit")}
    else {console.log("User cannot edit")}
}

canEdit(userRole)